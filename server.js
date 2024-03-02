import app from "./app.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const { DB_HOST } = process.env;
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
    console.log("Server is running. Use our API on port: 3000");
    console.log(DB_HOST);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
