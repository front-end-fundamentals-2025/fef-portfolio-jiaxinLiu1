const changebackground1 = document.getElementById("change-background1");
const changebackground2 = document.getElementById("change-background2");
const changebackground3 = document.getElementById("change-background3");
const changebackground4 = document.getElementById("change-background4");
const changebackground5 = document.getElementById("change-background5");

const bodyElement = document.body;

changebackground1.addEventListener("click", function (event) {
  bodyElement.style.backgroundImage = "url('b.jpeg')";
});

changebackground2.addEventListener("click", function (event) {
  bodyElement.style.backgroundImage = "url('background2.jpeg')";
});

changebackground3.addEventListener("click", function (event) {
  bodyElement.style.backgroundImage = "url('background3.jpeg')";
});

changebackground4.addEventListener("click", function (event) {
  bodyElement.style.backgroundImage = "url('background4.jpeg')";
});

changebackground5.addEventListener("click", function (event) {
  bodyElement.style.backgroundImage = "url('background5.jpeg')";
});
