/*
1.Class
2.Read only properties
3.Static variables and methods
    * Static variables are shared among all instances of the class and can be accessed without creating an instance of the class. 
    * They are defined using the static keyword and can be accessed using the class name.
    * Static methods are also defined using the static keyword and can be called without creating an instance of the class.
4.Optional properties
*/

class Student{
    //properties
    readonly studentId:number; //read only property - can only be assigned once inside the constructor and cannot be modified afterwards
    studentName:string;
    studentAge:number;
    studentEmail?:string;
    static schoolName:string = "ABC School"; //static variable - shared among all instances of the class

    //constructor
    constructor(id:number, name:string, age:number, email?:string){
        this.studentId = id;
        this.studentName = name;
        this.studentAge = age;
        this.studentEmail = email; //optional property - can be assigned a value or left undefined
    }

    displayStudentInfo = ():void =>{
        console.log(`Student ID is ${this.studentId}`); //accessing the read only property
        console.log(`Student Name is ${this.studentName}`);
        console.log(`Student Age is ${this.studentAge}`);
        console.log(`Student Email is ${this.studentEmail ? this.studentEmail : "N/A"}`); //using a ternary operator to check if the optional property has a value or not
        console.log(`School Name is ${Student.schoolName}`); //accessing the static variable using the class name
    }

    static changeSchoolName = (newSchoolName:string):void =>{
        Student.schoolName = newSchoolName; //modifying the static variable using the class name
    }
}

let student1 = new Student(1, "Vignesh", 25);
student1.displayStudentInfo(); //Output: Student ID is 1, Student Name is Vignesh, Student Age is 25, Student Email is N/A

let student2 = new Student(2, "Vicky", 22, "vicky@example.com");
student2.displayStudentInfo(); //Output: Student ID is 2, Student Name is Vicky, Student Age is 22, Student Email is vicky@example.com

Student.changeSchoolName("XYZ School"); //modifying the static variable using the class name
student1.displayStudentInfo(); //Output: Student ID is 1, Student Name is Vignesh, Student Age is 25, Student Email is N/A, School Name is XYZ School
student2.displayStudentInfo(); //Output: Student ID is 2, Student Name is Vicky, Student Age is 22, Student Email is vicky@example.com, School Name is XYZ School

