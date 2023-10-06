"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const main_1 = require("../../../main");
const argon = require("argon2");
class UserService {
    async login(loginDto) {
        try {
            const { email, password } = loginDto;
            const user = await main_1.prisma.users.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                return { statusCode: 401, message: `Invalid credentials` };
            }
            const isPasswordCorrect = await argon.verify(user.password, password);
            if (!isPasswordCorrect) {
                return { statusCode: 401, message: `User password is incorrect` };
            }
            delete user.password;
            return {
                statusCode: 200,
                user,
            };
        }
        catch (err) {
            console.log(err);
            return {
                statusCode: 500,
                message: err.message,
            };
        }
    }
    async createUser(registerDto) {
        try {
            const { full_name, password, email } = registerDto;
            const userExist = await main_1.prisma.users.findUnique({
                where: {
                    email: email,
                },
            });
            if (userExist) {
                return { statusCode: 401, message: "Credential already in use" };
            }
            const hashedPassword = await argon.hash(password);
            await main_1.prisma.users.create({
                data: { full_name, email, password: hashedPassword },
            });
            return { statusCode: 201, message: "User created Successfully" };
        }
        catch (err) {
            console.log(err);
            return { statusCode: 500, message: err.message };
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=index.js.map