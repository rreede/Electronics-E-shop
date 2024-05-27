import React from "react"
import products from '../products'
import Filter from './Filter'


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

            <div className='container'>
            <Filter />
            <div className='products-list'>

                {mapped}
                </div>
                </div>
            
             
        </div>
        </main>
    </>
    )
}