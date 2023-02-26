let sales: number = 123_456_789;
let course: string = "typescript";
let isPublished: boolean = true; 


//any
let level; //datatype "any", since not intialised


//array
let numbers: number[] = [1, 2, 3]; 
numbers.forEach(n => n.toExponential);


//TUPLE
let user: [number, string] = [1, "Mahi "];
user.push(1); //a loophole


//ENUM
// const sm = 1;
// const md = 2;
// const lg = 3;
const enum Size{sm=0, md, lg} //automatically applies rest of the values
let mySize: Size = Size.md;
console.log(mySize);


//functions
function calculateTax (income: number, taxYear = 2022) :number {
    if (taxYear < 2022)
     return income * 1.2;
    return income * 1.3;
    // {
    //     return income*2
    // } else {
    //     return income*1.2;
    // }
}
calculateTax(10000); //for the 2nd parameter it will take taxYear = 2022 as default value


//aliases
type Employee = {
    readonly id: number, 
    name : string
    retire: (date: Date) => void
}
//objects
let emp_1: Employee = {
    id: 1, 
    name: "initialised here",
    retire: (date: Date) =>{
        console.log(date);
    }
};
emp_1.name = "Mahi";


//union
function kgToLbs(weight: number | string): number {   //creating a union function by using single ver bar
    if(typeof weight === "number"){
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");


//intersection type
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable; //combining different types

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


//literal (exact, specific)
type Quant = 50 | 100;
let quant: Quant = 100;

type Metric = "cm" | "inch"; // another example


//nullable types
function greet(name: string | null | undefined){ //using union twice to accept null and undefined as well
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");
}
greet(undefined);


//optional chaining
type Customer = {     //a type alias
    birthday?: Date;
}
function getCustomer(id: number): Customer | null | undefined { //using union
    return id === 0 ? null: { birthday: new Date() }; // checks for null using ? otherwise returns date  
}
let customer = getCustomer(1);
//if (customer !== null && customer !== undefined) we can rewrite this logic in a better way
//optional property access operator using ?
//customer can only access its property 'birthday' if it is neiether null of undefined 
console.log(customer?.birthday?.getFullYear());

//optioanl element access operator
//assume if customer is an array
//customer?.[0]

//optional call
//let log: any = null;
//log?.("a");