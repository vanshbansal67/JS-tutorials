//ques 1)..Write a program to print the marks of a student in an object using for loop
// let marks = {
//     harry : 98,
//     rohan : 70,
//     aakash :7 
// }
// for(let i =0;i<object.keys(marks).length;i++){
//     console.log(marks[object.keys(marks)[i]]);
// }



//ques 2)..problem 1 using for in loop
// for(let i in marks){
//     console.log("the marks of " + i + " are " + marks[i]);
// }

// ques 3)..Write a program to print "try again" until the user enters the correct number
// let num = 4
// let i=0;
// while(i!=num){
//     i=prompt("enter a number ; ");
// }
// console.log("you entered a correct no.");


// ques 4)..Write a function to find mean of 5 numbers
let meean =(a1,b)=>{
    let sum=0;
    let avg;
    for(let i=0;i<b;i++){
        sum+=a1[i];
        avg=sum/b;
    }
    return avg;
}

let a1 = [3,5,2,7,334,6];
// let a1 = Array.from(a);
let b= a1.length;
meean(a1,b);