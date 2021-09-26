import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import WriterCart from '../WriterCart/WriterCart';
import'./Writer.css'

const Writer = () => {
    const [writers,setWriter]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./writers.JSON')
        .then(res=>res.json())
        .then(data=>setWriter(data))
    },[])

    const handleAddToCart=writer=>{
        if(!cart.includes(writer)){
            const newCart=[...cart,writer];
            setCart(newCart)
        }
    }
    return (
        <div className="writer-container">
            <div className="cart">
                {
                    writers.map(writer=><WriterCart
                    key={writer.key}
                    writer={writer}
                    handleAddToCart={handleAddToCart}
                    ></WriterCart>)
                }      
            </div>
            <div>
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Writer;