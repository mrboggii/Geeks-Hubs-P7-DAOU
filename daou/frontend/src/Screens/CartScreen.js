import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();


    useEffect(() =>{
        if(productId){
           dispatch(addToCart(productId, qty));
        }
    }, []); 

    return <div className="cart">
        <div className="cart-list"></div>
        <ul className="class-list-container">
            <li>
                <h3>
                    Carrito de Compra
                </h3>
                <div>
                    Precio
                </div>
            </li>
            {
                cartItems.length === 0 ? 
                <div>
                    El Carrito está vacio.
                </div> 
                :
                cartItems.map( item =>
                    <li> 
                    <div className="cart.image">
                        <img src={item.image} alt="product" />
                        </div>
                        <div className="cart-name">
                            <div>
                                <Link to={"/product/" + item.product} > 
                                 {item.name}
                                </Link>
                            </div>
                            <div>
                            Cantidad: 
                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                                </select>
                            </div>
                        </div>
                        <div>
                            {item.price}
                        </div>
                    
                    </li>
                    )
            }
        </ul>
        <div className="cart-action"></div>
    </div>
}

export default CartScreen;