"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("../service");
const userService = new service_1.UserService();
class UserController {
    async loginController(req, res) {
        const authDto = req.body;
        const response = await userService.login(authDto);
        res.status(response.statusCode).json(response);
    }
    async registerController(req, res) {
        const registerDto = req.body;
        const response = await userService.createUser(registerDto);
        res.status(response.statusCode).json(response);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=index.js.map