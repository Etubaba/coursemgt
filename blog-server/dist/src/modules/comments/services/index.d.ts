import { CreateCommentDto } from "../dto/createCommentDto";
export declare class CommentService {
    createComment(createCommentDto: CreateCommentDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            comment: string;
            postId: string;
            author: string;
            created_at: Date;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
}
