import mongoose from "mongoose";
const DbConnection = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DataBase connected successfully 🟢");
    
  } catch (error) {
    console.log("DataBase connection error 🔴", error.message);
    process.exit(1);
  }
};

export  default  DbConnection;
