import * as express from "express";
import * as cors from "cors";
import config from "../config";
import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
import postRoute from "./modules/posts/routes";
import commentRoute from "./modules/comments/routes";
import userRoute from "./modules/user/routes";

export const prisma = new PrismaClient();

const app = express();
const port = config().app.port;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: config().cors.origin, methods: config().cors.methods }));

app.use(`/`, postRoute);
app.use(`/`, commentRoute);
app.use(`/`, userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Working Perfectly 👍🚀");
});

app.listen(port, () => {
  prisma
    .$connect()
    .then(() => {
      console.log("🚀 Database Connected====🔗🔗🔗🔗===>");
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log(`Server is running on port ${port}`);
});
