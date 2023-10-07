import { Response, Request } from "express";
import { PostService } from "../service";
import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";

const postService = new PostService();
export class PostController {
  async createPostController(req: Request, res: Response) {
    const createPostDto: CreatePostDto = req.body;
    const image = req.file?.path;
    const response = await postService.createPost(createPostDto, image);
    res.status(response.statusCode).json(response);
  }

  async updatePostController(req: Request, res: Response) {
    const updatePostDto: UpdatePostDto = req.body;
    const id = req.params.id;
    const response = await postService.updatePost(id, updatePostDto);
    res.status(response.statusCode).json(response);
  }

  async allPost(req: Request, res: Response) {
    const query = req.query as { page: string };
    const response = await postService.PostList(query);
    res.status(response.statusCode).json(response);
  }

  async singlePost(req: Request, res: Response) {
    const slug = req.params.slug;
    const response = await postService.singlePost(slug);
    res.status(response.statusCode).json(response);
  }

  async deletePost(req: Request, res: Response) {
    const id = req.params.id;
    const response = await postService.deletePost(id);
    res.status(response.statusCode).json(response);
  }
}
