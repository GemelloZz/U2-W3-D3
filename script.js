const key = "notepad-memory";

const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const resetButton = document.getElementById("reset");

const textArea = document.getElementById("notepad");
saveButton.addEventListener("click", function () {
  localStorage.setItem(key, textArea.value);

  const firstAlert = document.getElementsByClassName("alert")[0];
  firstAlert.classList.remove("d-none");

  textArea.value = "";
  setTimeout(() => {
    firstAlert.classList.add("d-none");
  }, 2000);
});
loadButton.addEventListener("click", function () {
  const savedContent = localStorage.getItem(key);

  if (!savedContent) {
    const fourthAlert = document.getElementsByClassName("alert")[3];
    fourthAlert.classList.remove("d-none");
    setTimeout(() => {
      fourthAlert.classList.add("d-none");
    }, 2000);
  } else {
    textArea.value = savedContent;
    const secondAlert = document.getElementsByClassName("alert")[1];
    secondAlert.classList.remove("d-none");
    setTimeout(() => {
      secondAlert.classList.add("d-none");
    }, 2000);
  }
});
resetButton.addEventListener("click", function () {
  textArea.value = "";

  localStorage.removeItem(key);

  const thirdAlert = document.getElementsByClassName("alert")[2];
  thirdAlert.classList.remove("d-none");
  setTimeout(() => {
    thirdAlert.classList.add("d-none");
  }, 2000);
});

localStorage.setItem("object", { name: "Stefano" });

localStorage.setItem("object-correct", JSON.stringify({ name: "Stefano" }));

const originalObject = JSON.parse(localStorage.getItem("object-correct"));
console.log(originalObject);

const arrayOfObjects = [
  {
    name: "Pedro",
    species: "dog",
  },
  {
    name: "Pascal",
    species: "cat",
  },
  {
    name: "Jamie",
    species: "Lannister",
  },
];

localStorage.setItem("GoT", JSON.stringify(arrayOfObjects));

const arrayAsAString = localStorage.getItem("GoT");
const arrayAgain = JSON.parse(arrayAsAString);
console.log(arrayAgain[1]);

if (sessionStorage.getItem("timer")) {
  timer = parseInt(sessionStorage.getItem("timer"));
} else {
  timer = 0;
}

function counter() {
  timer++;
  document.getElementById("timer").textContent = timer;
  sessionStorage.setItem("timer", timer);
}

setInterval(counter, 1000);
