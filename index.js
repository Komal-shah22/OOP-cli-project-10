#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.italic.underline.blue(`\n<<<<<<===============WELCOME============>>>>>>\n`));
        const ans = await inquirer.prompt([
            {
                type: 'list',
                message: chalk.bold.italic.green("whom would you like to interact with?"),
                name: "select",
                choices: ['Staf', 'Student', 'Exit'],
            }
        ]);
        if (ans.select === 'Staf') {
            console.log(chalk.bold.italic.cyan(`You approach the staff room. Please free to ask any question`));
        }
        if (ans.select === 'Student') {
            const ans = await inquirer.prompt([
                {
                    name: 'student',
                    type: 'input',
                    message: chalk.bold.italic.green("Enter the student's name you wish to engage with : ")
                }
            ]);
            const stu = persons.students.find(val => val.name == ans.student);
            if (!stu) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.italic.magenta(`hello i am ${name.name}, Nice to meet you!\n`));
                console.log(chalk.bold.italic.magenta(`New student added\n`));
                console.log(chalk.bold.italic.bgWhite.blue(`<<============Current student list=============>> \n`));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.italic.magenta(`Hello i am ${Student.name} Nice to see You again!\n`));
                console.log(chalk.bold.italic.bgWhite.blue(`<<============Existing student list==========>>\n`));
                console.log(persons.students);
            }
        }
        else if (ans.select === 'Exit') {
            console.log(chalk.bold.italic.red(`\t\t\t....Exiting the program....`));
            process.exit();
        }
    } while (true);
};
programStart(persons);
