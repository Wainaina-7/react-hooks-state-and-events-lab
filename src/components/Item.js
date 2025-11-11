import React, { useState } from "react";

function Item({ name, category }) {
  // ✅ Step 1: Create state for whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // ✅ Step 2: Toggle function to add/remove from cart
  function handleAddToCart() {
    setIsInCart((prevInCart) => !prevInCart);
  }

  // ✅ Step 3: Change className and button text based on state
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
