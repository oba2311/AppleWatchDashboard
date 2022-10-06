import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
	try {
		const connectionURI = process.env.DATABASE_URL;
		const conn = await mongoose.connect(connectionURI || "");
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connectDB;
