import { LoginDto } from "../dto/loginDto";
import { RegisterDto } from "../dto/registerDto";
export declare class UserService {
    login(loginDto: LoginDto): Promise<{
        statusCode: number;
        user: {
            id: string;
            full_name: string;
            email: string;
            password: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        user?: undefined;
    }>;
    createUser(registerDto: RegisterDto): Promise<{
        statusCode: number;
        message: any;
    }>;
}
