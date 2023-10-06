import { prisma } from "../../../main";
import { CreateCommentDto } from "../dto/createCommentDto";

export class CommentService {
  async createComment(createCommentDto: CreateCommentDto) {
    try {
      const { postId } = createCommentDto;
      //post in existance
      const post = await prisma.posts.findUnique({
        where: {
          id: postId,
        },
      });

      if (!post) {
        return {
          statusCode: 400,
          message: "Post not found",
        };
      }

      //create Comment
      const newPost = await prisma.comments.create({
        data: { ...createCommentDto },
      });

      return {
        statusCode: 201,
        data: newPost,
      };
    } catch (err: any) {
      return { statusCode: 500, message: err.message };
    }
  }
}
