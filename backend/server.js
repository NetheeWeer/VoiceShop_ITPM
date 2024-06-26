const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = 5001;
const itemRoutes = require("./routes/itemRoutes");
const adminRoutes = require("./routes/adminRoutes");
const stripe = require("./routes/stripe");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/items", itemRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/stripe", stripe);
app.use("/uploads", express.static("uploads"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
