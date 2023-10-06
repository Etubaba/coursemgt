import { IsNotEmpty } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()
  full_name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  email: string;
}
