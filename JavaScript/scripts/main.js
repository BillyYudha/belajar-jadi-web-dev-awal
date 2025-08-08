const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Isikan namamu....");
    localStorage.setItem("billy", myName);
    myHeading.textContent = `Learning is really fun, ${myName}`;
}   

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName =localStorage.getItem("name");
    myHeading.textContent = `learning is really fun, ${storedName}`;
}

myButton.addEventListener("click",() =>{
    setUserName();
})

