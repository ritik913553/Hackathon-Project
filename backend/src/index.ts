import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import routes from "./routes/v1";

const app = express();
const httpsServer = createServer(app);
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("api/v1", routes);

httpsServer.listen(port, () => {
  console.log(`server is up at port: ${port}`);
});
