import { prisma } from "../../../main";
import { LoginDto } from "../dto/loginDto";
import * as argon from "argon2";
import { RegisterDto } from "../dto/registerDto";

export class UserService {
  async login(loginDto: LoginDto) {
    try {
      const { email, password }: LoginDto = loginDto;

      //check if user credential is valid
      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return { statusCode: 401, message: `Invalid credentials` };
      }

      //check if user password is correct

      const isPasswordCorrect = await argon.verify(user.password, password);

      if (!isPasswordCorrect) {
        return { statusCode: 401, message: `User password is incorrect` };
      }

      //delete passord from user details
      delete user.password;

      return {
        statusCode: 200,
        user,
      };
    } catch (err) {
      console.log(err);
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }

  async createUser(registerDto: RegisterDto) {
    try {
      const { full_name, password, email }: RegisterDto = registerDto;
      const userExist = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (userExist) {
        return { statusCode: 401, message: "Credential already in use" };
      }

      //hash user password
      const hashedPassword = await argon.hash(password);

      //create user
      await prisma.users.create({
        data: { full_name, email, password: hashedPassword },
      });

      return { statusCode: 201, message: "User created Successfully" };
    } catch (err: any) {
      console.log(err);
      return { statusCode: 500, message: err.message };
    }
  }
}
