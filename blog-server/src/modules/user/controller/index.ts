import { Response, Request } from "express";
import { UserService } from "../service";
import { LoginDto } from "../dto/loginDto";
import { RegisterDto } from "../dto/registerDto";

const userService = new UserService();
export class UserController {
  async loginController(req: Request, res: Response) {
    const authDto: LoginDto = req.body;
    const response = await userService.login(authDto);
    res.status(response.statusCode).json(response);
  }

  async registerController(req: Request, res: Response) {
    const registerDto: RegisterDto = req.body;
    const response = await userService.createUser(registerDto);
    res.status(response.statusCode).json(response);
  }
}
