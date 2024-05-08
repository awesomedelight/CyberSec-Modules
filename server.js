const dotenv = require("dotenv").config();
// create express server
const express = require("express");

//const {connectDb} = require("./config/dbConnection");

const errorHandler = require("./middleware/errorHandler");

const connectDb = require("./config/dbConnection");

//connect to database
//connectDb();

const app = express();

const port = process.env.PORT || 5005;

app.use(express.json());

app.use("/api/modules", require("./routes/moduleRoutes"));

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

