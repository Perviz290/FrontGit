

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}




var yas = prompt("Enter age");
if (yas < 18) {
    alert("yasiniz 18 den asagidir");
} else {
    alert("Xos geldiniz.");
}



// 3) 1 ədəd Class və Obyekt(ad,soyad,password propertiləri və fullname metodu olacaq) hazırlanır.
//     Sonra elə bir metod yazılmalıdır ki həmin metodu çağırdıqda Obyektin daxilindən fullname dəyərini götürüb bütün hərflərini böyük
//      formada HTML'a yazdırsın

const obyekt = {
    ad: 'Perviz',
    soyad: 'Veliyev',
    password: 1234,
    fullname: function() {
        return `${this.ad} ${this.soyad}`;
    }
}

function upper() {
    document.body.innerHTML += '<br>' + obyekt.fullname().toUpperCase()
}
upper();