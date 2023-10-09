// document.querySelector("load", function (e) {});

function getItems(item) {
   item.forEach((el) => {
      el.querySelector(".elaveEt button").addEventListener(
         "click",
         function (e) {
            const countEl = this.closest(".item").firstElementChild;
            let count = Number(countEl.innerHTML);
            countEl.innerHTML = ++count;

            let id = Number(
               e.target.closest(".item").classList[1].split("item")[1]
            );

            setLS(id, count);
            addBasket();
         }
      );
   });
}

function setLS(id, count) {
   // console.log(id, count);

   const dbDatas = JSON.parse(localStorage.getItem("addProducts"));
   const dbDataObj = dbDatas.find((el) => {
      return el.id == id;
   });
   dbDataObj.item.itemCount = count;
   localStorage.removeItem("addProducts");
   localStorage.setItem("addProducts", JSON.stringify(dbDatas));
}

function addBasket() {
   const basket = document.querySelector(".cartContainer > div:first-child");
   const checkout = document.querySelector(".cartContainer > div:last-child");
   const dbDatas = JSON.parse(localStorage.getItem("addProducts"));
   const basketItems = dbDatas.filter(({ item }) => {
      return item.itemCount != 0;
   });
   basket.innerHTML = "";

   let totalProduct = 0;
   let totalPrice = 0;

   basketItems.forEach(({ id, item }) => {
      const { category, company, img, itemCount, itemPrice, title, vote } =
         item;

      totalProduct += itemCount;
      totalPrice += itemCount * itemPrice.newPrice;
      localStorage.removeItem("basket");
      localStorage.setItem(
         "basket",
         JSON.stringify({
            totalProduct,
            totalPrice,
            basketProducts: basketItems,
         })
      );

      basket.innerHTML += `
			<div data-id="${id}">
				<img src="${img}" style="width:20px" /> 
				<span>${title}</span><br><span>${itemCount} x $${itemPrice.newPrice}</span>
			</div>
		`;
   });
   checkout.innerHTML = `<div>Total Price: $${totalPrice.toFixed(
      2
   )}</div> <a href="/card.html">Cehckout</a> </div>`;
}

export { getItems };
