"use server";

import mongoose from "mongoose";

//Singleton connection

let isConnected = false;

export const ConnectionToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not set.");
  }

  if (isConnected) {
    console.log("MONGODB is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "CodeQuest",
    });
    isConnected = true;
    console.log("Using new database connection.");
  } catch (error) {
    console.log("Error while to connecting to database.");
  }
};
