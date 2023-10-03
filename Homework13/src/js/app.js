let loading = document.querySelector(".preloading");
let inputElement = document.querySelector(".input #customInput");

setTimeout(() => {
    loading.style.display = "none";
}, 5000);

inputElement.addEventListener("keydown", function (e) {
    if (e.key === " " && inputElement.value.length >= 0) {
        inputElement.value = inputElement.value.slice(0, -1);
        e.preventDefault();
    } else if (e.key === "Backspace") {
        inputElement.value += " ";
        e.preventDefault();
    }
});
