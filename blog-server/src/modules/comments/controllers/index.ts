import { Response, Request } from "express";
import { CommentService } from "../services";
import { CreateCommentDto } from "../dto/createCommentDto";

const commentService = new CommentService();
export class CommentController {
  async createPostController(req: Request, res: Response) {
    const createPostDto: CreateCommentDto = req.body;
    const response = await commentService.createComment(createPostDto);
    res.status(response.statusCode).json(response);
  }
}
