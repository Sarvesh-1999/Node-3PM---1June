//! PREREQUISITES OF NODE JS
//!--- OBJECTS IN JS
// let user = {
//   name: "Henry",
//   age: 20,
//   company: "HCL",
// };
// console.log(user.name);
// console.log(user);

// let arr = [10, 20, 30];
// console.log(arr);
// console.log(arr[2]);

//!---- OBJECT DESTRUCTURING
let obj = {
  fullname: { fname: "John", lname: "Doe" },
  age: 25,
  company: "TCS",
  designation: "Developer",
  salary: 45000,
  skills: {
    frontend: ["HTML", "CSS", "JS", "REACT"],
    backend: ["NODE", "EXPRESS", "MONGO", "SQL"],
  },
};

let {
  fullname: { fname, lname },
  age,
  company,
  designation,
  salary,
  skills: {
    frontend: [f1, f2, f3, f4],
    backend: [b1, b2, b3, b4],
  },
} = obj;

let sentence = `${fname} ${lname} whose age is ${age} working at ${company} as ${designation} at a package of Rs.${salary} per month having skills like ${f4}, ${b1} and ${b2} etc...`;

// console.log(sentence);

//! FUNCTIONS (ARROW FUNC) AND RETURNS
// const a1 = () => {
//   console.log("Arrow func 1");
// };
// a1();

// const a2 = () => "Hii";
// console.log(a2());

// const a3 = () => {
//   return "Byee";
// };
// console.log(a3());

//! PROMISIS
// fetch("https://dummyjson.com/todos")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data.todos);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getTodos() {
//   try {
//     let resp = await fetch("https://dummyjson.com/todos");
//     let data = await resp.json();
//     console.log(data.todos);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getTodos()

// forEach((ele ,idx, arr)=>{}), map(), filter() and find()
//! REST AND SPREAD --> ...

//! REST ==> PACKING
//! SPREAD ==> UNPACKING

let arr = [10, 20, 30];
console.log(arr);

console.log("spread -> unpack ", ...arr); // spread => 10 20 30

let [a1, ...a2] = arr;
console.log("rest -> pack ", a2); // rest => [20,30]

let obj1 = {
  name: "John",
};
let obj2 = {
  ...obj1,
  age: 20,
};
console.log(obj2);
