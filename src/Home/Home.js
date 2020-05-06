import React, {useState, useEffect} from 'react';
import Cart from "../Cart/Cart";
import myCart from "../Cart/myCart";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import {useSelector, useDispatch} from "react-redux";
import myConfig from "../myConfig";
const Home = () => {
 

    
    const {cartItem, productData} = useSelector (state => state);
    const dispatch = useDispatch();

    const setCartItem = (items) => {
      dispatch({type : "SET_CART_ITEMS", payload : items });
    }

    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isCarted, setIsCarted] = useState(false);
    //const [cartItem, setCartItem] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        var cdata = await fetch(myConfig[0].url).then(res => {
          return res.json();
        });
        dispatch({type : "SET_DATA", payload : cdata });
        setData(cdata);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
    
   
   
 


    useEffect(() => {
      // eslint-disable-next-line
        const results = productData.filter(cdata => {
                  if(cdata.title.toLowerCase().includes(keyword.toLowerCase()) || cdata.brand.toLowerCase().includes(keyword.toLowerCase())){
                      return cdata;
                  }});
        setData(results);
         // eslint-disable-next-line
      }, [keyword]);

    const {
        removeCartItem,
        quantityPlus,
        quantityMinus,
        clearCart} = myCart(cartItem, setCartItem);
     return(
     <>   
      {!isCarted && (
        <NavBar />
        )}
      <Cart cartItem= {[...cartItem]} removeItem={removeCartItem} quantityMinus={quantityMinus} quantityPlus={quantityPlus} clearCart={clearCart} setIsCarted={setIsCarted} isCarted={isCarted} />
      {!isCarted && (
        <ProductList data={data} setKeyword = {setKeyword} cartItem={cartItem} setCartItem= {setCartItem} />
      )}
      <Banner />
      <Footer />
      </>
     );
};

export default Home;