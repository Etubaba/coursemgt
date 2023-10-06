import { CreatePostDto } from "../dto/createPostDto";
import { UpdatePostDto } from "../dto/updatePostDto";
export declare class PostService {
    createPost(createPostDto: CreatePostDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            updated_at: Date;
            userId: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    PostList(): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            updated_at: Date;
            userId: string;
        }[];
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    singlePost(id: string): Promise<{
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
            }[];
        } & {
            id: string;
            title: string;
            content: string;
            created_at: Date;
            updated_at: Date;
            userId: string;
        };
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
