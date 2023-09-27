"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API Name",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/*.js"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swaggerConfig.js.map