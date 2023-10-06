import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  comment: string;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  postId: string;
}
