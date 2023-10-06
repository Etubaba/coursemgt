"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const main_1 = require("../../../main");
class CommentService {
    async createComment(createCommentDto) {
        try {
            const { postId } = createCommentDto;
            const post = await main_1.prisma.posts.findUnique({
                where: {
                    id: postId,
                },
            });
            if (!post) {
                return {
                    statusCode: 400,
                    message: "Post not found",
                };
            }
            const newPost = await main_1.prisma.comments.create({
                data: Object.assign({}, createCommentDto),
            });
            return {
                statusCode: 201,
                data: newPost,
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=index.js.map