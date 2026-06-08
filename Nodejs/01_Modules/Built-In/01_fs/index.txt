//! FILE SYSTEM - FS (CORE MODULE)
// to perform CRUD on files and folders

import fs from "node:fs";
// console.log(fs);

//! ------------SYNCHRONOUS WAY-------------

//! CREATE A FILE --> fs.writeFileSync("path" , "data")
//--- if file is not present create it otherwise if file is present override the data

// fs.writeFileSync("./test1.txt", "i am test 2");
// console.log("file created");

//! READ A FILE --> fs.readFileSync("path" , "encoding")
// let data = fs.readFileSync("./test1.txt" , "utf-8");
// console.log(data);

//! UPDATE A FILE --> fs.appendFileSync("path" , "new updated data")
// fs.appendFileSync("./test1.txt", "\nUpdated");
// console.log("file updated");

//! DELETE A FILE --> fs.unlinkSync("path")
// fs.unlinkSync("./test1.txt");
// console.log("file deleted");

//! ------------------ASYNC WAY-------------------

//! CREATE A FILE :- fs.writeFile("path" , "data" , callback)
// ---> callback :- is known as error first callback

// fs.writeFile("./practice.py", "print(1)", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Created");
// });

//! READ A FILE :- fs.readFile("path" , "encoding" , callback)

// fs.readFile("./practice.py", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Read Success --> ", data);
// });

//! UPDATE A FILE :- fs.appendFile("path" , "new Data" , callback)
// fs.appendFile("./practice.py", "\nprint(2)", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Updated");
// });

//! DELETE A FILE :- fs.unlink("path" , callback)
// fs.unlink("./practice.py", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Deleted");
// });

//! TASK : CREATE AND UPDATE FILE (NOT RECOMMENDED)
//! CALLBACK HELL : to avoid this we have to use promises
// fs.writeFile("./demo.txt", "I am Demo", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Created");

//   fs.appendFile("./demo.txt", "\nHello Node", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Update 1 Done");

//     fs.appendFile("./demo.txt", "\nHello React", (err) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("Update 2 Done");
//     });
//   });
// });

//! --------------------USING PROMISE----------------

import fsp from "node:fs/promises";

//! CREATE
// let resp = fsp.writeFile("./course.txt", "Enter All Courses");

// resp.then(() => {
//   console.log("File Created");
// });

// resp.catch((err) => {
//   console.log(err);
// });

//! READ
// let resp = fsp.readFile("./course.txt", "utf-8");

// resp.then((data) => {
//   console.log("File Read Success --> ",data);
// });

// resp.catch((err) => {
//   console.log(err);
// });

//! CREATE AND UPDATE
// let resp1 = fsp.writeFile("users.txt", "All users are :-");

// resp1.then(() => {
//   console.log("File Created");

//   let resp2 = fsp.appendFile("./users.txt", "\nJohn Doe");

//   resp2.then(() => {
//     console.log("Update 1 Done");

//     let resp3 = fsp.appendFile("./users.txt", "\nJane Doe");

//     resp3.then(() => {
//       console.log("Update 2 Done");
//     });

//     resp3.catch((err) => {
//       console.log(err);
//     });
//   });

//   resp2.catch((err) => {
//     console.log(err);
//   });
// });

// resp1.catch((err) => {
//   console.log(err);
// });

//! ASYNC AND AWAIT (BEST PRACTICE)

async function fsOperations() {
  try {
    await fsp.writeFile("./employee.txt", "Enter Employees");
    console.log("File Created");
    await fsp.appendFile("./employee.txt", "\nJohn Doe");
    console.log("File Updated 1 time");
    await fsp.appendFile("./employee.txt", "\nJane Doe");
    console.log("File Updated 2 time");
  } catch (error) {
    console.log("Something went worng", error);
  }
}

fsOperations();
