//! COMMON JS WAY
// const sum = require("./utilities");
// const { multiply, printFullName } = require("./functions");

// sum(10, 20);
// multiply(5, 2);
// printFullName("John", "Doe");

//! ES MODULE WAY (RECOMMENDED)
import sum from "./utilities.js";
import { multiply, printFullName } from "./functions.js";

sum(10, 20);
multiply(5, 2);
printFullName("John", "Doe");
