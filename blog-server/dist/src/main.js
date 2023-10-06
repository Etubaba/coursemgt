"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express = require("express");
const cors = require("cors");
const config_1 = require("../config");
const client_1 = require("@prisma/client");
const routes_1 = require("./modules/posts/routes");
const routes_2 = require("./modules/comments/routes");
const routes_3 = require("./modules/user/routes");
exports.prisma = new client_1.PrismaClient();
const app = express();
const port = (0, config_1.default)().app.port;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: (0, config_1.default)().cors.origin, methods: (0, config_1.default)().cors.methods }));
app.use(`/`, routes_1.default);
app.use(`/`, routes_2.default);
app.use(`/`, routes_3.default);
app.listen(port, () => {
    exports.prisma
        .$connect()
        .then(() => {
        console.log("🚀 Database Connected====🔗🔗🔗🔗===>");
    })
        .catch((error) => {
        console.log(error.message);
    });
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=main.js.map