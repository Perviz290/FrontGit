
const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.aboutsecond_right_content');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
       
        tabs.forEach(tab=>{tab.classList.remove('aboutsecond_right_tab_active')});
        tab.classList.add('aboutsecond_right_tab_active');

        all_content.forEach(item => {
            item.classList.remove("active")
        });
        all_content[index].classList.add('active');

    })
})

















// let tabs = document.querySelectorAll(".tabs div");
// let contents = document.querySelectorAll(".content div");

// for (let tab of tabs) {
//     tab.addEventListener("click", function () {
//         let activeElement = document.querySelector(".active");
//         activeElement.classList.remove("active");
//         this.classList.add("active");

//         let index = this.getAttribute("data-index");
//         console.log(index);
//         for (let content of contents) {
//             if (content.getAttribute("data-index") == index) {
//                 content.classList.add("show");
//             } else {
//                 content.classList.remove("show");
//             }
//         }
//     });
// }
    