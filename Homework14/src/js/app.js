let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let sliderImg = document.getElementById("sliderImg");
let sliderContainer = document.querySelector(".slider-container");

let taskInput = document.getElementById("task");
let addTaskButton = document.getElementById("add-task");
let taskList = document.getElementById("task-list");

let images = [
  "src/img/BMW-MY24-i4-M50-DP-FMA-Mobile.avif",
  "src/img/bmw-m-dex-stage-index-01.jpg.asset.1693838088859.jpg",
  "src/img/P90492179_highRes_bmw-i7-xdrive60-m-sp (1).jpg",
];

let currentIndex = 0;

function SlideImage() {
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  sliderImg.src = images[currentIndex];
}

prevBtn.addEventListener("click", function () {
  currentIndex--;
  SlideImage();
});

nextBtn.addEventListener("click", function () {
  currentIndex++;
  SlideImage();
});

let tabs = document.querySelectorAll(".tabs div");
let contents = document.querySelectorAll(".content div");

for (let tab of tabs) {
  tab.addEventListener("click", function () {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    this.classList.add("active");

    let index = this.getAttribute("data-index");
    console.log(index);
    for (let content of contents) {
      if (content.getAttribute("data-index") == index) {
        content.classList.add("show");
      } else {
        content.classList.remove("show");
      }
    }
  });
}

addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";

    let deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });
  }
});

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});
