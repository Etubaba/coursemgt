"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validateDto_1 = require("../../../middleware/validateDto");
const createCommentDto_1 = require("../dto/createCommentDto");
const router = (0, express_1.Router)();
const basePath = "/api/";
const commentController = new controllers_1.CommentController();
router.post(`${basePath}comment`, (0, validateDto_1.validateDto)(createCommentDto_1.CreateCommentDto), commentController.createPostController);
exports.default = router;
//# sourceMappingURL=index.js.map