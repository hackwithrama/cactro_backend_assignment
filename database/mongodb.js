import mongoose from "mongoose";

// Connect to mongodb
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajram92:9kXuwlJbQuDxsShV@cactrobackend.wg9kk.mongodb.net/?retryWrites=true&w=majority&appName=Cactrobackend"
    );
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
};

export default connectToDatabase;
