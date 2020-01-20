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
const show = id => {
  Student.findById(id)
    .then(student => console.log(student))
    .then(done)
    .catch(console.log);
};
// show("5e2550f93f296c301d1d57a1");
//>>>

//<<<

// destroy
const destroy = id => {
  // first way
  // Student.findById(id)
  // .then(student => student.remove())
  // .then(() => console.log('removed studen'))
  // second way
  Student.findByIdAndDelete(id)
    .then(student => console.log(student))
    .then(done)
    .catch(err => console.log(err));
};
// destroy("5e2550f93f296c301d1d57a1");
//>>>

//<<<

// update
//>>>

//<<<
