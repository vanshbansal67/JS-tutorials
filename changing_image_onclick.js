const myImage = document.querySelector("img");
myImage.style.width = "100%";
myImage.style.height = "100%";
myImage.style.objectFit = "cover";
myImage.style.objectPosition = "center";
myImage.onclick = () => {
  mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo1.png") {
    myImage.setAttribute("src", "images/photo2.jpg");
  } else {
    myImage.setAttribute("src", "images/photo1.png");
  }
};
