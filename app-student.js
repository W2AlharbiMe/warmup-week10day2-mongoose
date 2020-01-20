const mongoose = require("mongoose");
const dbName = "student-crud";
const url = `mongodb://localhost/${dbName}`;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// import student model
const Student = require("./models/student");

const db = mongoose.connection;

const done = () => db.close();

///     CRUD    ///

//>>>
// create
const create = (data = { firstName, lastName, grade, age, city }) => {
  Student.create(data)
    .then(student => console.log(student))
    .then(done)
    .catch(err => console.log(err));
};
// create({
//   firstName: "Abdullah",
//   lastName: "Alharbi",
//   grade: 100,
//   age: 21,
//   city: "Riyadh"
// });
// create({
//   firstName: "Ahmed",
//   lastName: "D",
//   grade: 100,
//   age: 19,
//   city: "Riyadh"
// });
//<<<

// index
const index = () => {
  Student.find()
    .then(students => console.log(students))
    .then(done)
    .catch(console.log);
};
index();
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
