import { prisma } from "../../../main";
import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";

export class PostService {
  async createPost(createPostDto: CreatePostDto) {
    try {
      const { title, content, userId }: CreatePostDto = createPostDto;

      //create Posts
      const Post = await prisma.posts.create({
        data: { title, content, userId },
      });

      return {
        statusCode: 201,
        data: Post,
      };
    } catch (err: any) {
      return { statusCode: 500, message: err.message };
    }
  }

  async PostList() {
    try {
      const allPosts = await prisma.posts.findMany({});

      return { statusCode: 200, data: allPosts };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
  async singlePost(id: string) {
    try {
      //check if record exist
      const Post = await prisma.posts.findUnique({
        where: {
          id,
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

  async updatePost(id: string, updatePostDto: UpdatePostDto) {
    try {
      const { title, content, userId }: UpdatePostDto = updatePostDto;
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
          userId,
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
