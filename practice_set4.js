//ques1)..What will the following code print in javascript 
console.log("har\'".length);
//output=>4

//ques2)..Explain the includes,startWith,end with function of a string
let ch = "hello world"
let word ="hello"
console.log(`the word "${word}" ${ch.includes(word)? "is" : "is not"} present in the string`);
 
ch2= "saturday"
console.log(ch2.startsWith("sat"));
console.log(ch2.endsWith("ay"));


//ques3)..program to convert a given script in to lowercase

let str = "HELLO WORLD";
console.log(str.toLowerCase());

//ques4)..extract the amount out of the string

let str2 = "the price is $200.00";
console.log(str2.slice("the price is ".length));


//ques5)..try to change 4th character of a given string

let str3 = "hello";
str3[3]='x';
console.log(str3); //output=>hello

