#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new Person();
const programStart = async (Persons) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Aap Kis SE Baat Karein Ge...?",
            name: "select",
            choices: ["Khud Se: Self", "student"],
        });
        if (ans.select == "Khud Se: Self") {
            console.log("Hello Main Khud Se Baat Kar Raha Hoon");
            console.log("Main Theak Hoon.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Aap Ko Kis Student Se Baat Karni Hai?",
                name: "student",
            });
            const student = Persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                Persons.addStudent(name);
                console.log(`Hello i am ${name.name} or Main Theak Hoon.`);
                console.log(Persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name} or Main Theak Hoon...............`);
                console.log(Persons.students);
            }
        }
    } while (true);
};
programStart(Persons);
