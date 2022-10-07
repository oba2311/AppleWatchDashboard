// TODO:
// setup mongo.

// create test endpoints for MongoDB.

import express from "express";
import bodyParser from "body-parser";
import fitnessRoutes from "./routes/fitnessRoutes";
import connectDB from "./config/db";

const app = express();

connectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

fitnessRoutes(app);

debugger;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
