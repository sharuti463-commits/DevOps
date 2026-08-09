const assert = require("assert");
const { students, addStudent } = require("./studentData");

console.log("Running Student Tests...\n");

addStudent("Sharuti", "101", "CSE");

assert.strictEqual(students.length, 1);
assert.strictEqual(students[0].name, "Sharuti");
assert.strictEqual(students[0].roll, "101");
assert.strictEqual(students[0].course, "CSE");

console.log(" Test Case 1 Passed");

addStudent("Aman", "102", "IT");

assert.strictEqual(students.length, 2);

console.log(" Test Case 2 Passed");

console.log("\nAll Test Cases Passed Successfully!");

console.log("Hello from Node.js!");
console.log("Jenkins is running test.js successfully!");

let a = 10;
let b = 20;

console.log("Sum =", a + b);