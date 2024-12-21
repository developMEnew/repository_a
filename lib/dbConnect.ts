import mongoose from "mongoose";

const connection = { isConnected: false }; // Tracks the connection status

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Database is already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState === 1; // Ready state 1 means connected
    console.log("Database connected successfully.");
  } catch (error:any) {
    console.error("Database connection error:", error.message);
    throw new Error("Failed to connect to the database.");
  }
}

export default dbConnect;
