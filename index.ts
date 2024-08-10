import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}


class Person {
    students: Student[]=[]
    addStudent(obj: Student){
    this.students.push(obj)
    }
}

const persons = new Person()


const programStart = async(persons: Person) => {
    do{
    console.log("WELCOME!");
    const answer = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["Staff","Student","Exit"],
    })
     if (answer.select == "Staff" ){
        console.log("You approach the staff room. Please feel free to ask any question");
    }
    else if (answer.select == "Student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enters the students name you wish to engage with:"
        })
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student (ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}.Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
        } else {
            console.log(`Hello i am ${student.name}. Nice to see you again.`);
            console.log("Existing student list:");
            console.log(persons.students);
        }
    }else if (answer.select == "Exit"){
        console.log("Exiting the program....");
        process.exit()
    }
    } while (true);
}

programStart(persons);