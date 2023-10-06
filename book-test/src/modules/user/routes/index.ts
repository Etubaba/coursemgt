import { Router } from "express";
import { UserController } from "../controller";
import { validateDto } from "../../../middleware/validateDto";
import { LoginDto } from "../dto/loginDto";
import { RegisterDto } from "../dto/registerDto";

const router: Router = Router();
const basePath = "/api/";

const commentController = new UserController();
router.post(
  `${basePath}login`,
  validateDto(LoginDto),
  commentController.loginController
);
router.post(
  `${basePath}register`,
  validateDto(RegisterDto),
  commentController.registerController
);

export default router;
