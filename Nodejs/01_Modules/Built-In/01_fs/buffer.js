import fs from "node:fs";

// fs.readFile("./index.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Unable to read file", err);
//   }
//   console.log("File read successfully");
//   console.log(data);
// });

//! STREAMS AND BUFFER

//! BUFFER - A temporary space in a memory
//! STREAMS - continuesly reading and writing the data in chunks

//! DEFAULT BUFFER SIZE
// Normal Files ---> 64kb
// Large Files video ya audio ---> 16kb

//! STREAMS ARE OF 4 TYPES

//! 1) Writable Streams - to write data in chunks
// fs.createWriteStream("path")

//! 2) Readable Streams - to read data in chunks
// fs.createReadStream("path" , "encoding")

//! 3) Duplex Streams - to write and read data in chunks (IMPORTANT)
// src.pipe(destination)

// let src = fs.createReadStream("./index.js")
// let destination = fs.createWriteStream("index.txt")
// src.pipe(destination)

//! HOW CHUNKS WORKS
let src = fs.createReadStream("./course.txt", {
  encoding: "utf-8",
  highWaterMark: 1, // <--- size of chunk in byte
});

// 1 byte = 8 bits ====> 1 alphabet 8 bits

src.on("data", (chunck) => {
  console.log(chunck, `length is ${chunck.length}`);
});

//! 4) Transform Streams - to write,read and update data in chunks
