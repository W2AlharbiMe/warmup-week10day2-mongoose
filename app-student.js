const mongoose = require("mongoose");
const dbName = "student-crud";
const url = `mongodb://localhost/${dbName}`;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

const done = () => db.close();

// import student model
const student = require("./models/student");

///     CRUD    ///

//>>>
// create

//<<<

// index
//>>>

//<<<

//show
//>>>

//<<<

// destroy
//>>>

//<<<

// update
//>>>

//<<<
