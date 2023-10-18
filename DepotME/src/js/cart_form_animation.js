let cart_dropdown_button = document.getElementById("cart_dropdown_header");
let cart_dropdown_form = document.getElementById("cart_right_dropdown_form");
let cart_right_dropdown = document.getElementById("cart_right_dropdown");

let isCartDropdownOpen = false;
cart_dropdown_button.addEventListener("click", (e) => {

    let height = cart_dropdown_form.scrollHeight;
    
    
    if(!isCartDropdownOpen){
        isCartDropdownOpen = true;
        cart_dropdown_form.style.height = `${height}px `;
        cart_dropdown_form.classList.add('active')
        cart_dropdown_form.style.opacity = 1;

    }else{
        isCartDropdownOpen = false;
        cart_dropdown_form.style.height = "0px";
        cart_dropdown_form.classList.remove('active');
        cart_dropdown_form.style.opacity = 0;
    }
})


