class Cart {
    items = []
    add (product){
        this.items = [...this.items, product]
        this.drawcart()
        this.save()
    }

    remove(product){
        this.items = this.items.filter (items =>{
            if (items == product) {
                console.log(items + " es igual a " + product + ", entonces lo saco")
            } else {
                console.log(items + " es distinto a " + product + " product, entonces lo dejo")
            }
            return items != product
        })
        this.drawcart() 
        this.save()
    }

    drawcart (){
       const carthtml=  `<div class="cart-body">
       <ul class="list">
       ${
        this.items.map(item=>` <li value="1" class="order-items"> ${item}
        <a data-product="${item}" class="cart-remove">
        <img data-product="${item}" class="cart-remove" 
        src="../assets/delete.png" alt="remove icon"></a></li>`)
       }
         
       </ul>
     </div>`
     document.querySelector("#graphicDesign .cart-body").innerHTML=carthtml

     document.querySelectorAll(".counter").forEach(element => {
        element.innerHTML= this.items.length
     });
    }

    load (){
        this.items= JSON.parse(localStorage.getItem("checkout")) ?? []
    
    }


    save (){
        const cartString=JSON.stringify (this.items)
        localStorage.setItem("checkout", cartString)
    }

}



