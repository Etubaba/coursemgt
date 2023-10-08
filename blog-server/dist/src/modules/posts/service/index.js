"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const main_1 = require("../../../main");
class PostService {
    async createPost(createPostDto, image) {
        try {
            const { title, content, userId } = createPostDto;
            function convertToSlug(title) {
                if (!title)
                    return undefined;
                const slug = title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\w-]+/g, "") + Math.random().toString(36).slice(2, 7);
                return slug;
            }
            const slug = convertToSlug(title);
            const Post = await main_1.prisma.posts.create({
                data: { title, content, userId, image, slug },
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
    async PostList(query) {
        const { page } = query;
        try {
            const postData = await main_1.prisma.posts.findMany({});
            const itemsPerPage = 20;
            const paginatedPost = (posts) => {
                if (posts.length < itemsPerPage)
                    return posts;
                const pageNumber = parseInt(page, 10) || 1;
                const start = (pageNumber - 1) * itemsPerPage + 1;
                const end = pageNumber * itemsPerPage;
                const paginated = posts.slice(start, end);
                return paginated;
            };
            const totalCalc = (length) => {
                if (length < itemsPerPage)
                    return 1;
                const result = length / itemsPerPage;
                if (result % 1 !== 0)
                    return Math.floor(result) + 1;
                return result;
            };
            const total_page = totalCalc(postData.length);
            const allPosts = paginatedPost(postData);
            return {
                statusCode: 200,
                data: allPosts,
                post_per_page: itemsPerPage,
                total_page,
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async singlePost(slug) {
        try {
            const Post = await main_1.prisma.posts.findUnique({
                where: {
                    slug,
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
    async userPost(id) {
        try {
            const user = await main_1.prisma.users.findUnique({
                where: {
                    id,
                },
            });
            if (!user)
                return { statusCode: 404, message: "User not found" };
            const posts = await main_1.prisma.posts.findMany({
                where: {
                    userId: id,
                },
            });
            return { statusCode: 200, data: posts };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async updatePost(id, updatePostDto) {
        try {
            const { title, content } = updatePostDto;
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