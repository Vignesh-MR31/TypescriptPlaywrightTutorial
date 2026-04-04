//super() - used to invoke constructor of parent class
//super - used to invoke methods of parent class

class Parent{
    num:number=10;

    constructor(){
        console.log("Parent class constructor called");
    }

    displayNum():void {
        console.log(`Number from Parent class: ${this.num}`);
    }
}

class Child extends Parent{
    num:number=20;
    
    constructor(){
        super(); //calling the constructor of the parent class
        console.log("Child class constructor called");
    }

    showNum():void {
        console.log(`Number from Child class: ${this.num}`);
    }

    displayNum():void {
        super.displayNum(); //calling the displayNum method of the parent class using super keyword
        console.log(`Number from Child class: ${this.num}`);
    }
}

let childObj = new Child();
childObj.showNum(); //Output: Number from Child class: 20
childObj.displayNum(); //Output: Number from Child class: 20