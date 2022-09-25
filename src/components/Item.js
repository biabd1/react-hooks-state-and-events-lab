import React,{useState}  from "react";
import itemData from "../data/items";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  const addItem = ()=>{
    setCart((inCart)=>!inCart)
    
  }

  return (
    <li className={inCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem}>{inCart ? "Remove From Cart":"Add To Cart"}</button>
    </li>
  );
}

export default Item;