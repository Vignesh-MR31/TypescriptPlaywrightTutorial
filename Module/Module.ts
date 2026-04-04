export let appName:string = "Module";

export let testFunction = ():void => {
    console.log("This is a test function in the Module.");
}

export class TestClass {

    static getInfo(name: string, age: number): string {
        return `Name: ${name}, Age: ${age}`;
    }

    testMethod = () => {
        console.log("This is a test method in the TestClass.");
    }
}