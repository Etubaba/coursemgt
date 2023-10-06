import { Router } from "express";
import { PostController } from "../controller";
import { validateDto } from "../../../middleware/validateDto";
import { CreatePostDto } from "../dto/createPostDto";

import { UpdatePostDto } from "../dto/updatePostDto";

const router: Router = Router();
const basePath = "/api/";

const postController = new PostController();
router.post(
  `${basePath}blog`,

  validateDto(CreatePostDto),
  postController.createPostController
);
router.put(
  `${basePath}blog/:id`,
  validateDto(UpdatePostDto),
  postController.updatePostController
);
router.get(
  `${basePath}blog/:id`,

  postController.singlePost
);
router.delete(
  `${basePath}blog/:id`,

  postController.deletePost
);

router.get(`${basePath}blog`, postController.allPost);

export default router;
