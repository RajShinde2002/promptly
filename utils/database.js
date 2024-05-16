import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://rjshinde45:Raj2002@cluster0.thxmbzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "share_prompt",
    });
    
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
