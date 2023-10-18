
console.log("kklhkj")
let tabs = document.querySelectorAll(".btn-container a");
let contents = document.querySelectorAll(".tab-container .tab-panel");
console.log(tabs)
for (let tab of tabs) {
    tab.addEventListener("click", function () {
      console.log("salam")
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