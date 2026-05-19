class person {
    public name: string; // Accessible from anywhere
    private age: number; // Accessible only within the class
    protected gender: string; // Accessible within the class and its subclasses

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

class Employee extends person {
    public employeeId: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Gender: ${this.gender}`);
        //console.log(age); // Error: Property 'age' is private and only accessible within class 'person'.
        console.log(`Employee ID: ${this.employeeId}`);
    } 
}

let emp = new Employee("John Doe", 30, "Male", 12345);
emp.displayInfo();
