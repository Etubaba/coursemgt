"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const validateDto_1 = require("../../../middleware/validateDto");
const loginDto_1 = require("../dto/loginDto");
const registerDto_1 = require("../dto/registerDto");
const router = (0, express_1.Router)();
const basePath = "/api/";
const commentController = new controller_1.UserController();
router.post(`${basePath}login`, (0, validateDto_1.validateDto)(loginDto_1.LoginDto), commentController.loginController);
router.post(`${basePath}register`, (0, validateDto_1.validateDto)(registerDto_1.RegisterDto), commentController.registerController);
exports.default = router;
//# sourceMappingURL=index.js.map