//! FILE SYSTEM - FS (CORE MODULE)
// to perform CRUD on files and folders

import fs from "node:fs";
// console.log(fs);

//! ------------SYNCHRONOUS WAY-------------

//! CREATE A FILE --> fs.writeFileSync("path" , "data")
//--- if file is not present create it otherwise if file is present override the data

// fs.writeFileSync("./test1.txt", "i am test 3");
// console.log("file created");

//! READ A FILE --> fs.readFileSync("path" , "encoding")
// let data = fs.readFileSync("./test1.txt" , "utf-8");
// console.log(data);

//! UPDATE A FILE --> fs.appendFileSync("path" , "new updated data")
// fs.appendFileSync("./test1.txt", "\nUpdated");
// console.log("file updated");

//! DELETE A FILE --> fs.unlinkSync("path")
fs.unlinkSync("./test1.txt");
console.log("file deleted");
