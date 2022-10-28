import React, { useReducer } from 'react';

// context is created here
const cartContext = React.createContext({
  item: [],
  quantity: 0,
  addItem: () => {},
  removeItem: () => {},
});

// default state
const defaultState = {
  item: [],
  totalAmount: 0
};

// reducer function
const cartReducer = (state, action) => {

  if(action.type === 'ADD') {

    let updatedCartItem = [...state.item];
    let updatedAmount = state.totalAmount + action.item.price;

    const cartItemIndex = state.item.findIndex((item) => (item.title === action.item.title));

    if(cartItemIndex === -1) {
      // console.log('not same');
      updatedCartItem = [...updatedCartItem, action.item];

      return {item: updatedCartItem, totalAmount: updatedAmount};
    }
    else {
      // console.log('same');
      updatedCartItem[cartItemIndex].quantity += 0.5;

      return {item: updatedCartItem, totalAmount: updatedAmount}
    }
  }

  if(action.type === 'REMOVE') {

    let updatedCartItem = [...state.item];

    const cartItemIndex = state.item.findIndex((item) => (item.title === action.title));

    let updatedAmount = state.totalAmount - updatedCartItem[cartItemIndex].price;

    console.log(cartItemIndex)

    if(updatedCartItem[cartItemIndex].quantity === 1) {

      updatedCartItem = updatedCartItem.filter((item) => (item.title !== action.title))

      return {item: updatedCartItem, totalAmount: updatedAmount};
    }
    else {

      updatedCartItem[cartItemIndex].quantity -= 0.5;

      return {item: updatedCartItem, totalAmount: updatedAmount}
    }
  }

  return defaultState;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchedCartState] = useReducer(cartReducer, defaultState);

  const addItem = (item) => {
    dispatchedCartState({type: 'ADD', item: item})
  }

  const removeItem = (title) => {
    dispatchedCartState({type: 'REMOVE', title: title})
  }

  const contextValues = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <cartContext.Provider value={contextValues}>
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
