class ShoppingItems{
    checkoutVisible (e){
        e.preventDefault(); 
        if(e.target.classList.contains ('addProduct')){
            const product = e.target.parentElement.parentElement;
            this.checkList(product);

            console.log(product);

        }

    }
      
    
}