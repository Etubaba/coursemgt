"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const service_1 = require("../service");
const postService = new service_1.PostService();
class PostController {
    async createPostController(req, res) {
        const createPostDto = req.body;
        const response = await postService.createPost(createPostDto);
        res.status(response.statusCode).json(response);
    }
    async updatePostController(req, res) {
        const updatePostDto = req.body;
        const id = req.params.id;
        const response = await postService.updatePost(id, updatePostDto);
        res.status(response.statusCode).json(response);
    }
    async allPost(req, res) {
        const query = req.query;
        const response = await postService.PostList(query);
        res.status(response.statusCode).json(response);
    }
    async singlePost(req, res) {
        const id = req.params.id;
        const response = await postService.singlePost(id);
        res.status(response.statusCode).json(response);
    }
    async deletePost(req, res) {
        const id = req.params.id;
        const response = await postService.deletePost(id);
        res.status(response.statusCode).json(response);
    }
}
exports.PostController = PostController;
//# sourceMappingURL=index.js.map