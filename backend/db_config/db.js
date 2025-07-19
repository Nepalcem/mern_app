import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("Connected to Moongoose database!")
        })
    } catch (error) {
        console.error("Error connecting to Database", error);
        process.exit(1);
    }
};

export default db;