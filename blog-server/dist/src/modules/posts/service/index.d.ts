import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";
export declare class PostService {
    createPost(createPostDto: CreatePostDto, image: string): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            image: string;
            slug: string;
            updated_at: Date;
            userId: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    PostList(query: {
        page: string;
    }): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            image: string;
            slug: string;
            created_at: Date;
            updated_at: Date;
            userId: string;
        }[];
        post_per_page: number;
        total_page: number;
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
        post_per_page?: undefined;
        total_page?: undefined;
    }>;
    singlePost(slug: string): Promise<{
        statusCode: number;
        data: {
            user: {
                id: string;
                full_name: string;
                email: string;
                password: string;
            };
            comments: {
                id: string;
                comment: string;
                postId: string;
                author: string;
                created_at: Date;
            }[];
        } & {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            image: string;
            slug: string;
            updated_at: Date;
            userId: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    userPost(id: string): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            image: string;
            slug: string;
            updated_at: Date;
            userId: string;
        }[];
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    updatePost(id: string, updatePostDto: UpdatePostDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            image: string;
            slug: string;
            updated_at: Date;
            userId: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    deletePost(id: string): Promise<{
        statusCode: number;
        message: any;
    }>;
}
