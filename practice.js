// alert("hello world!");
// let a = document.querySelector("p");

// console.log(a);
// a.textContent = "DOMString";
// console.log(p);

// const content = element.innerHTML;

// document.querySelector("html").addEventListener("click", function () {
//   alert("ytre");
// });

// document.querySelector("html").addEventListener("click", () => {
//   alert("hgfd");
// });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
  SetUserName();
};

function SetUserName() {
  const MyName = prompt("please enter your name ;");
  localStorage.setItem("name", MyName);
  myHeading.textContent = MyName;
}

if (!localStorage.getItem("name")) {
  SetUserName();
} else {
  const savedName = localStorage.getItem("name");
  myHeading.textContent = savedName;
}

// const today = new Date();
// const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
// endYear.setFullYear(today.getFullYear()); // Set year to this year
// const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// daysLeft = Math.round(daysLeft); // Returns days left in the year

// function JSClock() {
//   const time = new Date();
//   const hour = time.getHours();
//   const minute = time.getMinutes();
//   const second = time.getSeconds();
//   let temp = String(hour % 12);
//   if (temp === "0") {
//     temp = "12";
//   }
//   temp += (minute < 10 ? ":0" : ":") + minute;
//   temp += (second < 10 ? ":0" : ":") + second;
//   temp += hour >= 12 ? " P.M." : " A.M.";
//   return temp;
// }
