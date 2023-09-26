import { IsOptional } from "class-validator";

export class UpdateCourseDto {
  @IsOptional()
  title: string;

  @IsOptional()
  lecturer: string;

  @IsOptional()
  couser_time: string;
}
