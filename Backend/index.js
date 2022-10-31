require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./utils/connectDB");

app.use(cors());

//connection to DB
connectDB();

//middleware
app.use(express.json());

//routes
app.use("/users", require("./routes/users"));
app.use("/category", require("./routes/category"));
app.use("/product", require("./routes/product"));
app.use("/cart", require("./routes/cart"));

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
