#! usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer_1.default.prompt([
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
    condition = addTask.addMore;
    console.log(todoList);
}
