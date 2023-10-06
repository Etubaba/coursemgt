"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = () => ({
    app: {
        environment: process.env.APP_ENV === "production" ? "production" : process.env.APP_ENV,
        port: parseInt(process.env.APP_PORT, 10) || 4010,
        host: "localhost",
        name: process.env.APP_NAME || "Test",
    },
    cors: {
        origin: process.env.CORS_ORIGIN || "*",
        methods: process.env.CORS_METHODS || "GET,HEAD,PUT,PATCH,POST,DELETE",
        headers: process.env.CORS_HEADERS || "*",
    },
});
//# sourceMappingURL=index.js.map