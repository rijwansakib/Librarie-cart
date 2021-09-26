import React  from 'react';
import'./Cart.css'

const Cart = (props) => {
     const {cart}=props;
      
     let total=0;
     total=cart.reduce((previous,writer)=>previous+writer.price,0)
      
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Total Writers Books Select:{props.cart.length}</h4>
            <h4>total:${total.toFixed(2)}</h4>
             {
                 cart.map(name=><p>{name.name}</p>)
             }
            <div>
                <button>Buy Now</button>
            </div>
            
        </div>
    );
};

export default Cart;