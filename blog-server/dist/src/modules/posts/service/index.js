"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const main_1 = require("../../../main");
class PostService {
    async createPost(createPostDto) {
        try {
            const { title, content, userId } = createPostDto;
            const Post = await main_1.prisma.posts.create({
                data: { title, content, userId },
            });
            return {
                statusCode: 201,
                data: Post,
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async PostList() {
        try {
            const allPosts = await main_1.prisma.posts.findMany({});
            return { statusCode: 200, data: allPosts };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async singlePost(id) {
        try {
            const Post = await main_1.prisma.posts.findUnique({
                where: {
                    id,
                },
                include: {
                    comments: true,
                    user: true,
                },
            });
            if (!Post)
                return { statusCode: 404, message: "Record not fount" };
            return { statusCode: 200, data: Post };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async updatePost(id, updatePostDto) {
        try {
            const { title, content, userId } = updatePostDto;
            const Post = await main_1.prisma.posts.findUnique({
                where: {
                    id,
                },
            });
            if (!Post)
                return { statusCode: 404, message: "Record not fount" };
            const newPost = await main_1.prisma.posts.update({
                where: {
                    id,
                },
                data: {
                    title,
                    content,
                    userId,
                },
            });
            return { statusCode: 200, data: newPost };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async deletePost(id) {
        try {
            const Post = await main_1.prisma.posts.findUnique({
                where: {
                    id,
                },
            });
            if (!Post) {
                return { statusCode: 404, message: "Record not found" };
            }
            await main_1.prisma.posts.delete({
                where: {
                    id,
                },
            });
            return {
                statusCode: 200,
                message: "Post  deleted successfully",
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
}
exports.PostService = PostService;
//# sourceMappingURL=index.js.map