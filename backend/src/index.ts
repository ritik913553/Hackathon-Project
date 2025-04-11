import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import routes from "./routes/v1";
import dbConfig from "./config/db";

async function main() {
  const app = express();
  const httpsServer = createServer(app);
  const port = process.env.PORT;
  const uri = process.env.MONGO_URI;

  app.use(cors());
  app.use(express.json());
  app.use("api/v1", routes);

  await dbConfig(uri!);

  httpsServer.listen(port, () => {
    console.log(`server is up at port: ${port}`);
  });
}

main();
