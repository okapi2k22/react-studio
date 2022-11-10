import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryList } from "./components/BakeryList";
import { CartList } from "./components/CartList";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);



  const handleAddToCart = (item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.item.name === item.name);

    if(existingCartItem) {
      setCartItems(cartItems.map(cartItem => cartItem.item.name === item.name ? {item: existingCartItem.item, quantity: existingCartItem.quantity + 1, total: existingCartItem.item.price * (existingCartItem.quantity + 1)} : cartItem));
    } else {
      setCartItems([...cartItems, {item: item, quantity: 1, total: item.price * 1}]);
    }
  }

  useEffect(()=> {
    setTotal(cartItems.reduce((sum, cartItem) => sum + cartItem.total, 0));
  }, [cartItems])

  return (
    <div className="App">
      <BakeryList data={bakeryData} onAddToCart={handleAddToCart}></BakeryList>

      <CartList data={cartItems} total={total}/>
    </div>
  );
}

export default App;
