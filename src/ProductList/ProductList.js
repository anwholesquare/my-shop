import React from 'react';

const Product = ({id, title, brand, price, image_url, brief, description, addToCart}) => {
    const modalID = "desc" + id;
    return (
        <div id={id} className="product">
            <img className="productImage" src = {image_url} onClick={() => document.getElementById(modalID).style.display = 'block'}  alt = {title}/>
            <div className="simple-modal" id={modalID} style={{display: "none"}} tabIndex="0">
        <div className="simple-modal__content">
            <header>
                <h4 className="bolder">{title}</h4>
                <span onClick={() => document.getElementById(modalID).style.display = 'none'}>x</span>
            </header>
            <div className="modal-main">
            <img className="productImagedesc" src = {image_url}  alt = {title}/>
            <p className = "title bolder"> {title} </p>
            <p className = "brand"> {brand} </p>
            <p className = "brand"> ${price} </p>
            <br />
            <h5 className="title bolder">Description</h5>
            <p> {description}</p>
            </div>
        </div>
    </div>
            <div className = "productText">
                <p className = "title bolder"> {title} </p>
                <p className = "brand"> {brand} </p>
                <p className = "brief"> {brief} </p>
            </div>
            <div className = "cartText">
                <span className = "price">  ${price}  </span>
                <button className = "addCartButton bolder" onClick={(e)=> {addToCart(id);}}> Add to Cart</button>
            </div>
        </div>
    );
};

const ProductList = ({data, setKeyword , cartItem, setCartItem}) => {

    const addToCart = (id) => {
        const item =  data.find(product => product.id === id);
        const itemFound = cartItem.findIndex ((cartData) => cartData.id === item.id)
         if (itemFound === -1) {
           setCartItem( [ ...cartItem, {...item, quantity : 1}] );
         }else{
           setCartItem ( cartItem.map ((cItem) => {
             if(cItem.id === id){
               return {...cItem, quantity : parseInt(cItem.quantity) + 1};
             }else{
               return cItem;
             }
           }));
         }
       }


    const searchHandler = (e) =>{
        setKeyword(e.target.value);
    }

    return (<div id="productser" className = "products"> 
    <h1 className="bolder"> Our Products </h1>
    <div id="searcher">
    <input type="text" onChange={searchHandler} placeholder="Search Our products"/>
    <button type="submit"><i className="fa fa-search"></i></button>
    </div>
    {data.map(cproduct =>
         (<Product {...cproduct} key={cproduct.id} addToCart={addToCart}/> 
         ))}
    </div>);    
};

export default ProductList;