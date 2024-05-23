import React from "react"
import products from '../products'


console.log(products)

export default function Main() {

    let mapped = products.map(function(item) {


        return(

            <div className='product' key={item.id}>

                <p>{item.name}</p>
            </div>
        )
          

    })

    return(
    <>
    <main>
        <div className='wrapper'>
            <div class='products-list'>

                {mapped}
                </div>
            
             
        </div>
        </main>
    </>
    )
}