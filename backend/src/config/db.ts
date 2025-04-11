import mongoose from "mongoose";

export default async function dbConfig(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
}
