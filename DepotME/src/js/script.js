var Swipes = new Swiper(".swiper-container", {
   loop: true,
   autoplay: {
      delay: 1500,
      disableOnInteraction: false,
   },
   direction: "vertical",
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },
});

document
   .querySelector(".rightside .pages:last-child a")
   .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#hamburgermenu").style.display = "block";
   });

document.querySelector(".closeBtn").addEventListener("click", function (e) {
   e.preventDefault();
   document.querySelector("#hamburgermenu").style.display = "none";
});
