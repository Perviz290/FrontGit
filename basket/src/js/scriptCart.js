let basketData = [];
(() => {
   basketData = JSON.parse(localStorage.getItem("basket"));
   rightSide();
})();

document.querySelector(".productSayi").innerHTML = `
	<div>There are <b>${basketData.totalProduct}</b> products in your cart</div>
	<button onclick="clearAll()">Clear Cart</button>
	`;

basketData.basketProducts.forEach(({ id, item }) => {
   const { category, company, img, itemCount, itemPrice, title, vote } = item;
   document.querySelector("table").innerHTML += `
		<tr>
			<td><input type="checkbox" class="item${id}" /></td>
			<td>
				<img
					src="${img}"
				/>
			</td>
			<td>
				<span>${title}</span>
				<div class="ulduzsistemi">
					<span class="ulduz">${vote.star}</span>
					<span class="ulduzDeyer">(${vote.average.toFixed(1)})</span>
				</div>
			</td>
			<td>$${itemPrice.newPrice}</td>
			<td>
				<select name="" id="">
					<option value="1">${itemCount}</option>
				</select>
			</td>
			<td>$${(itemPrice.newPrice * itemCount).toFixed(2)}</td>
			<td>
				<a href="javascript:void(0);" onclick="deleteProductOnCart(this)"><i class="fa-solid fa-trash"></i></a>
			</td>
		</tr>
	`;
});

function rightSide() {
   basketData = JSON.parse(localStorage.getItem("basket"));
   document.querySelector(".rightSide").innerHTML = "";
   document.querySelector(".rightSide").innerHTML = `
	<div>
		<div class="solsag">
			Subtotal: <span class="subtotal">$${basketData.totalPrice.toFixed(2)}</span>
		</div>
		<div>-----</div>

		<div>
			<div class="solsag">
				Shipping <span class="shipping">Free</span>
			</div>
			<div class="solsag">
				Estimate for<span class="country">United Kingdom</span>
			</div>
		</div>

		<div>
			<div class="solsag">
				Total <span class="totalprice">$${basketData.totalPrice.toFixed(2)}</span>
			</div>
		</div>
		<div>-----</div>

		<button>Proceed To Checkout</button>
	</div>
`;
}

function checkAll(table) {
   const selectAll = document.querySelector(".selectAll").checked;
   table
      .closest("table")
      .querySelectorAll("input")
      .forEach((el, index) => {
         if (selectAll) {
            el.checked = true;
         } else {
            el.checked = false;
         }
      });
}

function deleteProductOnCart(el) {
   el.closest("tr").remove();
   let elId = Number(
      el
         .closest("tr")
         .querySelector("td:first-child input")
         .className.split("item")[1]
   );

   const datasOnCart = JSON.parse(localStorage.getItem("basket"));

   const deletedProductsArrOnCart = datasOnCart.basketProducts.filter((el) => {
      return el.id !== elId;
   });

   let totalPrice = 0;
   let totalProduct = 0;
   deletedProductsArrOnCart.forEach((el) => {
      totalPrice += el.item.itemCount * el.item.itemPrice.newPrice;
      totalProduct += el.item.itemCount;
   });

   const lastProductOnCart = {
      totalPrice,
      totalProduct,
      basketProducts: deletedProductsArrOnCart,
   };

   localStorage.removeItem("basket");
   localStorage.setItem("basket", JSON.stringify(lastProductOnCart));
   rightSide();
   location.reload();
}

function clearAll() {
   localStorage.clear();
   location.reload();
}
