import React from 'react';
import './CheckoutProduct.css';
import './Product.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);
    const removeFromBasket = () =>{
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="item_image" />
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>{
                       return (<p className="product__ratingStar">⭐</p>)
                    })
                    
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
