import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
// import mongoose from "mongoose";

dotenv.config();

const app = express();

// const { DB_HOST, PORT = 3000 } = process.env;
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT);
//     console.log("Database connection successful");
//     console.log("Server is running. Use our API on port: 3000");
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

export default app;
