"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const service_1 = require("../service");
const postService = new service_1.PostService();
class PostController {
    async createPostController(req, res) {
        var _a;
        const createPostDto = req.body;
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const response = await postService.createPost(createPostDto, image);
        res.status(response.statusCode).json(response);
    }
    async updatePostController(req, res) {
        var _a;
        const updatePostDto = req.body;
        const id = req.params.id;
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        const response = await postService.updatePost(id, updatePostDto, image);
        res.status(response.statusCode).json(response);
    }
    async allPost(req, res) {
        const query = req.query;
        const response = await postService.PostList(query);
        res.status(response.statusCode).json(response);
    }
    async singlePost(req, res) {
        const slug = req.params.slug;
        const response = await postService.singlePost(slug);
        res.status(response.statusCode).json(response);
    }
    async userPosts(req, res) {
        const id = req.params.id;
        const response = await postService.userPost(id);
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