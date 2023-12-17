// 1.Write code to display from 1 to 100 but just even numbers.


let i = 1;
while(i <= 100){
    if(i % 2 == 0){
        console.log(i);
    }
    i = i+1;
}



// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


var num1 = parseInt(prompt("Enter First Number."));
var num2 = parseInt(prompt("Enter Second Number."));
var operator = prompt("Enter Operation Symbol.");

function result(n1, n2, op){
    switch(op){
        case("+"):
            var r = n1+n2;
            console.log("Result: " + r);
            break;
        case("-"):
            var r = n1-n2;
            console.log("Result: "+r)
            break;
        case("*"):
            var r = n1*n2;
            console.log("Result: " + r);
            break;
        case("/"):
            var r = n1/n2;
            console.log("Result: "+ r)
            break;
        default:
            console.log("Enter valid data...!");
            break;
    }
};
result(num1, num2, operator);


// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.


// var salary = parseInt(prompt("Enter Your Salary Here..."));
// function findTax(salary) {
//     switch (salary) {
//         case (500000 >= salary):
//             console.log("Tax Free. ");
//             break;
//         case ((1000000 >= salary) || (salary > 500000)):
//             console.log("Tax: " + salary * 0.1);
//             break;
//         case ((1500000 >= salary) || (salary > 1000000)):
//             console.log("Tax: " + salary * 0.2);
//             break;
//         case (salary > 1500000):
//             console.log("Tax: " + salary * 0.3);
//             break;
//         default:
//             console.log("Somthing went wrong!...");
//             break;
//     }
// }
// findTax(salary);
// console.log(typeof (salary))



// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.



var num1 = parseInt(prompt("Enter Your First  Number Here ..."));
var num2 = parseInt(prompt("Enter Your Second Number Here ..."));
var sum = 0;
while(num1 != 0 || num2 != 0){
    sum = sum + (num1 % 10) * (num2 % 10);
    num1 = parseInt(num1/10);
    num2 = parseInt(num2/10);
    

}
console.log("Sum: "+sum);
