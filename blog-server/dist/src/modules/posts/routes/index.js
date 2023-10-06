"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const validateDto_1 = require("../../../middleware/validateDto");
const createPostDto_1 = require("../dto/createPostDto");
const updatePostDto_1 = require("../dto/updatePostDto");
const router = (0, express_1.Router)();
const basePath = "/api/";
const postController = new controller_1.PostController();
router.post(`${basePath}blog`, (0, validateDto_1.validateDto)(createPostDto_1.CreatePostDto), postController.createPostController);
router.put(`${basePath}blog/:id`, (0, validateDto_1.validateDto)(updatePostDto_1.UpdatePostDto), postController.updatePostController);
router.get(`${basePath}blog/:id`, postController.singlePost);
router.delete(`${basePath}blog/:id`, postController.deletePost);
router.get(`${basePath}blog`, postController.allPost);
exports.default = router;
//# sourceMappingURL=index.js.map