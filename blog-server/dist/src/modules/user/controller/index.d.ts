import { Response, Request } from "express";
export declare class UserController {
    loginController(req: Request, res: Response): Promise<void>;
    registerController(req: Request, res: Response): Promise<void>;
}
