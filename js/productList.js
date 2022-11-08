const cart = new Cart();
cart.load()
cart.drawcart()
document.querySelector(".service__section").addEventListener("click", 
(e) => {
    if (e.target.dataset.product){
        cart.add(e.target.dataset.product);
    }

});

document.querySelector(".cart-body").addEventListener("click", 
(e) => {
    if (e.target.dataset.product){
        cart.remove(e.target.dataset.product);
    }

});

