const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");

const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB connected with sucess");
  } catch (error) {
    console.log("database connection fail", error);
  }
};

module.exports = {
  db,
};
