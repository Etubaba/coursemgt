"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const services_1 = require("../services");
const commentService = new services_1.CommentService();
class CommentController {
    async createPostController(req, res) {
        const createPostDto = req.body;
        const response = await commentService.createComment(createPostDto);
        res.status(response.statusCode).json(response);
    }
}
exports.CommentController = CommentController;
//# sourceMappingURL=index.js.map