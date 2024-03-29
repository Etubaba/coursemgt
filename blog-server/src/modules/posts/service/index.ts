import { prisma } from "../../../main";
import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";

export class PostService {
  async createPost(createPostDto: CreatePostDto, image: string) {
    try {
      const { title, content, userId }: CreatePostDto = createPostDto;

      function convertToSlug(title: string): string {
        if (!title) return undefined;
        const slug =
          title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "") + Math.random().toString(36).slice(2, 7);

        return slug;
      }

      const slug = convertToSlug(title);

      //create Posts
      const Post = await prisma.posts.create({
        data: { title, content, userId, image, slug },
      });

      return {
        statusCode: 201,
        data: Post,
      };
    } catch (err: any) {
      return { statusCode: 500, message: err.message };
    }
  }

  async PostList(query: { page: string }) {
    const { page } = query;
    try {
      const postData = await prisma.posts.findMany({});

      type PostType = {
        id: string;
        title: string;
        content: string;
        image: string;
        slug: string;
        created_at: Date;
        updated_at: Date;
        userId: string;
      };
      const itemsPerPage = 20;

      const paginatedPost = (posts: PostType[]): PostType[] => {
        if (posts.length < itemsPerPage) return posts;
        const pageNumber = parseInt(page, 10) || 1;

        const start = (pageNumber - 1) * itemsPerPage + 1;
        const end = pageNumber * itemsPerPage;
        const paginated = posts.slice(start, end);
        return paginated;
      };

      const totalCalc = (length: number) => {
        if (length < itemsPerPage) return 1;
        const result = length / itemsPerPage;
        if (result % 1 !== 0) return Math.floor(result) + 1;
        return result;
      };

      const total_page = totalCalc(postData.length);

      const allPosts = paginatedPost(postData);

      return {
        statusCode: 200,
        data: allPosts,
        post_per_page: itemsPerPage,
        total_page,
      };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
  async singlePost(slug: string) {
    try {
      //check if record exist
      const Post = await prisma.posts.findUnique({
        where: {
          slug,
        },
        include: {
          comments: true,
          user: true,
        },
      });
      if (!Post) return { statusCode: 404, message: "Record not fount" };
      return { statusCode: 200, data: Post };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async userPost(id: string) {
    try {
      const user = await prisma.users.findUnique({
        where: {
          id,
        },
      });
      if (!user) return { statusCode: 404, message: "User not found" };

      const posts = await prisma.posts.findMany({
        where: {
          userId: id,
        },
      });

      return { statusCode: 200, data: posts };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async updatePost(id: string, updatePostDto: UpdatePostDto, image: string) {
    try {
      const { title, content }: UpdatePostDto = updatePostDto;
      //check if record exist
      const Post = await prisma.posts.findUnique({
        where: {
          id,
        },
      });
      if (!Post) return { statusCode: 404, message: "Record not fount" };

      //update

      const newPost = await prisma.posts.update({
        where: {
          id,
        },
        data: {
          title,
          content,
          image,
        },
      });

      return { statusCode: 200, data: newPost };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async deletePost(id: string) {
    try {
      //check if Post exist
      const Post = await prisma.posts.findUnique({
        where: {
          id,
        },
      });
      if (!Post) {
        return { statusCode: 404, message: "Record not found" };
      }

      await prisma.posts.delete({
        where: {
          id,
        },
      });

      return {
        statusCode: 200,
        message: "Post  deleted successfully",
      };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
}
