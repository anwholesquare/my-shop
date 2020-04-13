const myCart = (cartItem, setCartItem) => {

  

    const removeCartItem = id => {
      setCartItem(cartItem.filter(item => item.id !== id));
    };
  
    const quantityPlus = id => {
      const items = cartItem.map((cItem) => {
        if(cItem.id === id){
          return {...cItem, quantity : parseInt(cItem.quantity) + 1};
        }else{
          return cItem;
        }
      });
      setCartItem ( items);
    };
  
    const quantityMinus = id => {
      let done = 1;
      // eslint-disable-next-line
      const items = cartItem.map((cItem) => {
        if(cItem.id === id){
          if(cItem.quantity - 1 === 0) {
              done = 0;
          }else{
          return {...cItem, quantity : parseInt(cItem.quantity) - 1};
          }
        }else{
          return cItem;
        }
      });
  
      if(done === 1){setCartItem ( items); }
      
    };
  
    const clearCart = () => {
      const res = window.confirm("Are you sure to perform the action?");
      if (res === true) {
        setCartItem([]);
      }
    };
  
    return {
      removeCartItem,
      quantityPlus,
      quantityMinus,
      clearCart
    };
  };

  export default myCart;