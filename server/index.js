import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to MEMORIES App");
});
app.use("/posts", postRoutes);

const dbURL =
  "mongodb+srv://anubhav:memories@cluster0.9uino.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 3000;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, function (req, res) {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
