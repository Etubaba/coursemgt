import { IsNotEmpty } from "class-validator";

export class CreateCourseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  lecturer: string;

  @IsNotEmpty()
  course_time: string;
}
