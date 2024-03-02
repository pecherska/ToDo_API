import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { DB_HOST, PORT = 3000 } = process.env;
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
    console.log("Server is running. Use our API on port: 3000");
    console.log(DB_HOST);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
