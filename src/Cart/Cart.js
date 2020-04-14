import React from 'react';
import plus from './plus.svg';
import minus from './minus.svg';
import { HashLink as Link } from 'react-router-hash-link';

const CartItem = ({cartItem, removeItem,quantityMinus, quantityPlus}) => {
    return (<div className="cart-item">
    <div className="cart-buttons">
      <span className="delete-btna" onClick={() => removeItem(cartItem.id)}><i className= "fa fa-close fa-lg"> </i></span>
      <span className="like-btna"><i className= "fa fa-chrome fa-lg"> </i></span>
    </div>
 
    <div className="cart-image">
      <img style={{height:130, width:130}} src={cartItem.image_url} alt="" />
    </div>
 
    <div className="cart-description">
      <span>{cartItem.title}</span>
      <span>{cartItem.brand}</span>
      <span>${cartItem.price}</span>
    </div>
 
    <div className="cart-quantity">
      <button onClick={() => quantityPlus(cartItem.id)} className="plus-btna" type="button" name="button">
        <img src={plus} alt="" />
      </button>
      <input type="text" name="name" value={cartItem.quantity} readOnly/>
      <button onClick={() => quantityMinus(cartItem.id)} className="minus-btna" type="button" name="button">
        <img src={minus} alt="" />
      </button>
        </div>
    <div className="total-price">${ parseInt(cartItem.price) * parseInt(cartItem.quantity)}</div>
  </div>);
};
const Cart = ({cartItem, removeItem, quantityMinus, quantityPlus, clearCart, setIsCarted, isCarted}) => {  
    
    const total = cartItem.reduce(
		(sum, cur) => sum + cur.price * cur.quantity,
		0
    );
    const ids =  cartItem.map((item) => item.id);
    const quantities = cartItem.map((item) => item.quantity);
    
        return (
        <>
        {cartItem.length > 0 && (
        <div onClick={() => setIsCarted(!isCarted)} className = "hiddenCart bolder"> 
        <span className = "showCartButton" >
            {isCarted && (
            <i className="fa fa-cart-plus fa-2x"></i>
            )}
            {!isCarted && (
            <i className="fa fa-cart-arrow-down fa-2x"></i>
            )}
        </span>
        
        {isCarted && ( <Link to="#productser" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> <span className = "acolor bolder"> Go Back </span></Link> )}
        {!isCarted && ( <Link to="#carter" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}> <span className = "acolor bolder"> Tap To Purchase </span> </Link> )}
       
        <span className = "cartNumber">  {cartItem.length} </span> </div>
        )}
        {isCarted && (
        <div className = "cart" id="carter">
        <div className="cart-title bolder">
            Shopping Cart
        </div>
        {cartItem.map( (cItem) => <CartItem cartItem= {cItem} removeItem={removeItem} quantityMinus={quantityMinus} quantityPlus={quantityPlus}   key={cItem.id}/>)}
        <div id = "total-cart"> 
        <span>TOTAL</span> 
        <span style={{paddingRight: 35}}> ${total} </span> </div>
        <div id = "last-cart"> 
        <span onClick={(e) =>{clearCart(); setIsCarted(false);}} id="cancel-cart"> Clear Cart </span>
        <span onClick={() => { 
                const encryptorID = btoa(ids);
                const encryptorQuan = btoa(quantities);
                console.log(atob(encryptorID));
                console.log(atob(encryptorQuan));
                const res = window.confirm("OrderLink :" + window.location.href + "order/" + encryptorID + "/" + encryptorQuan);
                if (res === true) {
                    //setCartItem([]);
                }
                }} id="checkout-cart"> Checkout </span>
        </div>
        </div>)} </>);

    
};

export default Cart;