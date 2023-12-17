// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


// let states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

/*let filteredArray = states.filter((state) => {
    switch (state.charAt(0)) {
        case ("a"):
            return true;
        case ("e"):
            return true;
        case ("i"):
            return true;
        case ("o"):
            return true;
        case ("u"):
            return true;
        case ("A"):
            return true;
        case ("E"):
            return true;
        case ("I"):
            return true;
        case ("O"):
            return true;
        case ("U"):
            return true;
        default:
            return false;
    }
});
console.log(filteredArray);*/


// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


/*let str = 'I love my India';
console.log(str.split(' ').reverse().join(' '));*/

// __________________________________
////  (EXPLANATION)

/*let arr = str.split(' ');
console.log(arr);
let reverseArray = arr.reverse();
console.log(reverseArray);
let reverseStr = reverseArray.join(' ');
console.log(reverseStr)*/

// ____________________________________



// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

/*let string = 'INDIA';
let stringarr = string.split('');
stringarr.splice(3,0,'O','N','E','S');
console.log(stringarr);
let stringstr = stringarr.join('')
console.log(stringstr);*/



// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


/*let string = prompt("Enter String of Length Mininum 20 Characters ");
let totalVowels = 'aeiouAEIOU';
let vowelsCount = 0;
let consonantCount = 0;
for(let temp of string){
    if(totalVowels.includes(temp)){
        vowelsCount++;
    }
    else if((temp>='a' && temp <= 'z') || (temp >= 'A' && temp <= 'Z')){
        consonantCount++;
    }
}

console.log("Vowels in String:"+vowelsCount +"\n"+"Consonant in String: "+consonantCount);*/


// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

/*let str = 'replace method is use to seprate a string';
let correctwrd = 'split';
let wrongwrd = 'replace';
function correctfn(string, wrong, correct){
    return string.replace(wrong , correct);
}

let newstr = correctfn(str , wrongwrd ,correctwrd);
console.log(newstr);*/


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

/*let inputArr = [1,2,3,9,10,7,5,4,3];
console.log(inputArr.filter((tepm)=>tepm>5));*/



// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

/*const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

let result = students.map(( scores ) => ({ 
    name, average: scores.reduce((a, b) => a + b,0) / scores.length 
}));
  console.log(result);*/


//   Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

/*function repeatedSum(num){
     while(num >= 10){
         num = num.toString().split('').map(temp).reduce((a, b)=>a + b, 0);
     }
     return num;
 }
 const result = repeatedSum(456);
 console.log(result);  */



//9) Write a function to count the number of words in a paragraph.

/*let paragraph = prompt("Enter Paragraph: ");
function countWord(p){
    let arr = p.split(' ');
    return arr.length;
}
let count = countWord(paragraph)
console.log(count);*/



// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

/*let str = 'Hello';
function reverseStr(string){
    console.log(string.split('').reverse().join(''));
}
reverseStr(str);*/


// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
