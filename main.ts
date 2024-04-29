#! usr/bin/env node
import inquirer from "inquirer";
let todoList = [];

let condition = true;

while (condition)
{
let addTask = await inquirer.prompt([
  {
    name: "todo",
    message: "What you want to add in your todolist?",
    type: "input",
  },
  {
    name: "addMore",
    message: "Do you want to add more in your todolist?",
    type: "confirm",
    default: "false",
  },
]);
todoList.push(addTask.todoList);
condition = addTask.addMore
console.log(todoList);}