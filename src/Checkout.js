import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://m.media-amazon.com/images/G/01/associates/NSA_hero._CB488764446_.png"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout__title">
                            Your shopping basket is empty
                            <p>
                                You have no items in your basket. To buy one or more items, 
                                click "Add to Basket" button under any of your favorite t-shirts
                            </p>
                        </h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket</h2>
                        {/* List out all of the Checkout Products */}
                        {basket.map(item =>{
                        return (<CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            )
                        })}
                        
                    </div>
                )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>  
            )}
                      
        </div>
    )
}

export default Checkout
