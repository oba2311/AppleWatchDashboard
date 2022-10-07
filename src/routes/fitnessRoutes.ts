import { Application } from "express";
import Fitness from "../models/Fitness";

const fitnessRoutes = (app: Application) => {
	app.get("/daily-exercise-minutes", (req, res) => {
		res.send({
			"daily-exercise-minutes": "30",
		});
	});
	app.get("/weight", (req, res) => {
		res.send({
			weight: "80",
		});
	});
	app.get("/minutes-cycled-week", (req, res) => {
		res.send({
			minutesCycled: "80",
		});
	});
	app.get("/minutes-ran-week", (req, res) => {
		res.send({
			minutesRan: "80",
		});
	});
	app.post("/create-data", async (req, res) => {
		const data = await Fitness.create(req.body);
		await data.save();
		res.send(data);
	});
};

export default fitnessRoutes;
