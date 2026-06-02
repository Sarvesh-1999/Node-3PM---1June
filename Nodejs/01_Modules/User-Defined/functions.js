function multiply(n1, n2) {
  console.log(n1 * n2);
}

function printFullName(fname, lname) {
  console.log(`${fname} ${lname}`);
}

//! COMMON JS WAY
// module.exports = {multiply , printFullName}

//! ES MODULE WAY (RECOMMENDED)
export { multiply, printFullName };
