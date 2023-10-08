import { Router } from "express";
import { PostController } from "../controller";
import { validateDto } from "../../../middleware/validateDto";
import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";
import * as multer from "multer";
import storage from "../../../utils/cloudinary/index";

const router: Router = Router();
const basePath = "/api/";

const upload = multer({ storage });

const postController = new PostController();
router.post(
  `${basePath}blog`,
  upload.single("image"),
  validateDto(CreatePostDto),
  postController.createPostController
);
router.put(
  `${basePath}blog/:id`,
  validateDto(UpdatePostDto),
  postController.updatePostController
);
router.get(
  `${basePath}blog/:slug`,

  postController.singlePost
);
router.get(
  `${basePath}user/post/:id`,

  postController.userPosts
);
router.delete(
  `${basePath}blog/:id`,

  postController.deletePost
);

router.get(`${basePath}blog`, postController.allPost);

export default router;
