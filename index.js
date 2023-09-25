// const http = require("http");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/config/config");
const rateLimiters = require("./src/middlewares/rate-limit");
const { Schema } = mongoose;
const fs = require("fs");
const server = express();
server.use(express.json());
//RATE_LIMIT
server.use(rateLimiters);

// const rateLimit = require("express-rate-limit");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const product = data.products;
// const user = data.user;

const userRouter = require("./src/Router/user/userRouter");
const productRouter = require("./src/Router/product-Route/productRouter");

///////////////////////////////////////////////////////////////////////////////
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("hello nodejs");
//   } else if (req.url == "/product") {
//     let modifiIndex = index
//       .replace("**title", product.title)
//       .replace("**image**", product.thumbnail);
//     res.end(modifiIndex);
//   }
// });

//limiter request
// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   max: 10,
//   statusCode: 200,
//   message: {
//     status: 429,
//     error: "You are doing that too much. Please try again in 10 minutes.",
//   },
// });
/////////////////////////////////////////////////////////////////////////////////
//dataabase connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.DB.CONNECTION_URL);
  console.log(`database start on ${config.DB.CONNECTION_URL}`);
}
///////////////////////////////////////////////////////////////////////////////

server.use("/product", productRouter.Router);
server.use("/user", userRouter.Routers);
// server.use("/user", limiter);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// server.get("/", (req, res) => {
//   res.send(`hello  ${req.query.name}`);
// });
// server.get("/login", (req, res) => {
//   res.send("<h1>You are in login page</h1>");
// });
// server.get("/html", (req, res) => {
//   res.sendFile(fileSet);
// });
// server.get("/htmlStudent", (req, res) => {
//   res.sendFile(filePath);
// });
// server.get("*", (req, res) => {
//   res.send("<h1>404 not found</h1>");
// });

server.listen(config.PORT, () => {
  console.log(`server start on http://localhost:${config.PORT}`);
});
//////////////////////////////////////////////////////////////////////////////
