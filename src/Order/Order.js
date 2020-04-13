import React, {useState} from 'react';
import {
    useParams
} from "react-router-dom";


const CartItem = ({cartItem}) => {
    return (<div className="cart-item">
 
    <div className="cart-image">
      <img style={{height:130, width:130}} src={cartItem.image_url} alt="" />
    </div>
 
    <div className="cart-description">
      <span>{cartItem.title}</span>
      <span>{cartItem.brand}</span>
      <span>${cartItem.price}</span>
    </div>
 
    <div className="cart-quantity">
      <input type="text" name="name" value={cartItem.quantity} readOnly/>
        </div>
    <div className="total-price">${ parseInt(cartItem.price) * parseInt(cartItem.quantity)}</div>
  </div>);
};


const Order = () => {
    const [data, setData] = useState([]);
    const fetchData = () => fetch("http://oleek.co/data.php").then(res => res.json());
    
    (async()=>{
      const results = await fetchData();
      setData(results);
    })();


    let {ids, quantity} = useParams();
    const itemIDArray = ids.split(',');
    const itemQuantityArray = quantity.split(',');
    // eslint-disable-next-line
    let cartItem = data.filter(item => {
        var returner = undefined;
        itemIDArray.forEach((id) =>{
            if(item.id === parseInt(id)){
                returner = 1;
            }
        });
        if(returner !== undefined){
            return returner;
        }

    });
    cartItem = cartItem.map ((cItem, index) => { return {...cItem, quantity : parseInt(itemQuantityArray[index]) };});
    const total = cartItem.reduce(
		(sum, cur) => sum + cur.price * cur.quantity,
		0
    );
    return  <div className = "cart" id="carter">
    <div className="cart-title bolder">
        Order List
    </div>
    {cartItem.map( (cItem) => <CartItem cartItem= {cItem} key={cItem.id}/>)}
        <div id = "total-cart"> 
        <span>TOTAL</span> 
        <span style={{paddingRight: 35}}> ${total} </span> </div>
    </div>;
}

export default Order;