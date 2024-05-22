const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://aya:${process.env.DB_PASSWORD}@cluster0.vnfs8px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


module.exports = connectDB;
