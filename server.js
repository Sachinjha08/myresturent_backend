const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/connection");
const router = require("./routers/userRoute");

const app = express();

connectDB();

const corsOptions = {
  origin: "  origin: "https://thriving-chebakia-ae0455.netlify.app/",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/vi/user", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
