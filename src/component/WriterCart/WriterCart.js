import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import'./WriterCart.css'

const WriterCart = (props) => {
    const{name,img,books,born,occupation,nationality,education,price}=props.writer
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="writer-cart-container">
            <div className="writer-cart">
                <img src={img} alt="" />
                <div className="product-info">
                    <h2>{name}</h2>
                    <p><small>Born: {born}</small></p>
                    <p><small>Occupation: {occupation}</small></p>
                    <p>Nationality: {nationality}</p>
                    <p>Education: {education}</p>
                    <p>Books:{books}</p>
                    <p className="price">Price:${price}</p>
                    <div>
                        <button onClick={()=>props.handleAddToCart(props.writer)} >{cartIcon} add to cart</button>
                    </div>
                
                </div>
            </div>

        </div>
    );
};

export default WriterCart;