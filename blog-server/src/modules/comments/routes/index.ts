import { Router } from "express";
import { CommentController } from "../controllers";
import { validateDto } from "../../../middleware/validateDto";
import { CreateCommentDto } from "../dto/createCommentDto";

const router: Router = Router();
const basePath = "/api/";

const commentController = new CommentController();
router.post(
  `${basePath}comment`,
  validateDto(CreateCommentDto),
  commentController.createPostController
);

export default router;
