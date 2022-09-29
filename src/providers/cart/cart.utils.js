export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  // export const addItemToCartFromModal = (cartItems, cartItemToAdd, q) => {

  //   console.log("Cart Items: ",cartItems);
  //   console.log("Item: ",cartItemToAdd);
  //   console.log("Quantity to Add: ",q);

  //   const existingCartItem = cartItems.find(
  //     cartItem => cartItem.id === cartItemToAdd.id
  //   );
  
  //   if (existingCartItem) {
  //     return cartItems.map(cartItem =>
  //       cartItem.id === cartItemToAdd.id
  //         ? { ...cartItem, quantity: cartItem.quantity + q }
  //         : cartItem
  //     );
  //   }
  
  //   return [...cartItems, { ...cartItemToAdd, quantity: q }];
  // };

  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  export const getCartItemsCount = (cartItems) => cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
  );
  
  export const getCartTotal = cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.cartprice,
      0
    )

    export const filterItemFromCart = (cartItems, item) => cartItems.filter(
      cartItem => cartItem.id !== item.id
    );

    export const CountItem = (Item,ItemToAdd) => {
      const existingItem = Item.find(
        Item => Item.id === ItemToAdd.id
      );
    
      if (existingItem) {
        return Item.map(Item =>
          Item.id === ItemToAdd.id
            ? { ...Item, quantity: Item.quantity + 1 }
            : Item
        );
      }
    
      return [...Item, { ...ItemToAdd, quantity: 1 }];
    };