import { Response, Request } from "express";
export declare class PostController {
    createPostController(req: Request, res: Response): Promise<void>;
    updatePostController(req: Request, res: Response): Promise<void>;
    allPost(req: Request, res: Response): Promise<void>;
    singlePost(req: Request, res: Response): Promise<void>;
    deletePost(req: Request, res: Response): Promise<void>;
}
