import { model, Schema } from "mongoose";

const fitnessSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	time: {
		type: Date,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
});

const Fitness = model("Fitness", fitnessSchema);

export default Fitness;
