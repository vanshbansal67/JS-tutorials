const btn = document.querySelector("button");
const txt = document.querySelector("p");
btn.addEventListener("click", updateButton);

function updateButton() {
  if (btn.textContent === "start machine") {
    btn.textContent = "stop machine";
    txt.textContent = "The machine has started";
  } else {
    btn.textContent = "start machine";
    txt.textContent = "The machine is stopped";
  }
}
