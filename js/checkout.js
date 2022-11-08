const cart = new Cart();
cart.load()

if (cart.items.length > 0){
    document.querySelector("#order_created").innerHTML=`<h2 class="order__tittle">These are the selection of skills you've requested!</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div id="graphicDesign" class="col">
        <div class="cart h-100">
          <div class="cart-body">
            <ul>
            ${cart.items.map(item=> `<li class="order-items"> ${item}
            <a data-product="${item} class="cart-remove" >
            <img data-product="${item} class="remove-icon" src="../assets/delete.png" alt="remove icon"></a></li>`)}
            </ul>
          </div>
        </div>
      </div>
    </div>`

    document.querySelector("#order_created").addEventListener("click", 
(e) => {
    if (e.target.dataset.product){
        cart.remove(e.target.dataset.product);
    }

});


}

else {
    document.querySelector ("#order_created").remove()
}