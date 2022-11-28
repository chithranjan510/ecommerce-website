import React, { useState, useCallback, useContext } from 'react';

import loginContext from './login-context';

// context is created here
const cartContext = React.createContext({
  item: [],
  quantity: 0,
  addItem: () => {},
  removeItem: () => {},
  purchased: () => {},
  logoutCartHandler: () => {},
  loginCartHandler: () => {},
});

// useremail from local storage

export const CartContextProvider = (props) => {
  const loginCtx = useContext(loginContext);

  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }
  // console.log(userEmail);

  const [cartState, setCartState] = useState({ item: [], totalAmount: 0 });

  // Adding cart data
  const addItem = (newItem) => {
    const addingItem = async (preCartState) => {
      let updatedItem = [...preCartState.item];
      let updatedAmount = preCartState.totalAmount;
      updatedAmount = updatedAmount + newItem.price * newItem.quantity;

      const cartItemIndex = preCartState.item.findIndex(
        (item) => item.title === newItem.title
      );

      if (cartItemIndex === -1) {
        // console.log('not same');
        try {
          const res = await fetch(
            `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}`,
            {
              method: 'POST',
              body: JSON.stringify({
                title: newItem.title,
                price: newItem.price,
                imageUrl: newItem.imageUrl,
                quantity: newItem.quantity,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          const data = await res.json();
          updatedItem = [...updatedItem, data];

          setCartState({ item: updatedItem, totalAmount: updatedAmount });
          return { item: updatedItem, totalAmount: updatedAmount };
        } catch (err) {
          console.log(err.message);
        }
      } else {
        // console.log('same');
        // console.log(cartState.item[cartItemIndex]._id);
        const newQuantity = (updatedItem[cartItemIndex].quantity += 1);
        try {
          await fetch(
            `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
            {
              method: 'PUT',
              body: JSON.stringify({
                title: newItem.title,
                price: newItem.price,
                imageUrl: newItem.imageUrl,
                quantity: newQuantity,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          updatedItem[cartItemIndex].quantity = newQuantity;

          setCartState({ item: updatedItem, totalAmount: updatedAmount });
          return { item: updatedItem, totalAmount: updatedAmount };
        } catch (err) {
          console.log(err.message);
        }
      }
    };

    setCartState((preState) => {
      return addingItem(preState);
    });
  };

  // removing item from cart
  const removeItem = (title) => {
    const removingItem = async (preCartState) => {
      let updatedItem = [...preCartState.item];
      let updatedAmount = preCartState.totalAmount;
      const cartItemIndex = updatedItem.findIndex(
        (item) => item.title === title
      );

      if (updatedItem[cartItemIndex].quantity === 1) {
        try {
          await fetch(
            `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
            {
              method: 'DELETE',
            }
          );
          updatedAmount = updatedAmount - updatedItem[cartItemIndex].price;
          updatedItem = updatedItem.filter((item) => item.title !== title);

          setCartState({ item: updatedItem, totalAmount: updatedAmount });
          return { item: updatedItem, totalAmount: updatedAmount };
        } catch (err) {
          console.log(err.message);
        }
      } else {
        try {
          await fetch(
            `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}/${updatedItem[cartItemIndex]._id}`,
            {
              method: 'PUT',
              body: JSON.stringify({
                title: updatedItem[cartItemIndex].title,
                price: updatedItem[cartItemIndex].price,
                imageUrl: updatedItem[cartItemIndex].imageUrl,
                quantity: updatedItem[cartItemIndex].quantity - 1,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          updatedAmount = updatedAmount - updatedItem[cartItemIndex].price;
          updatedItem[cartItemIndex].quantity -= 1;

          setCartState({ item: updatedItem, totalAmount: updatedAmount });
          return { item: updatedItem, totalAmount: updatedAmount };
        } catch (err) {
          console.log(err.message);
        }
      }
    };

    setCartState((preCartState) => {
      return removingItem(preCartState);
    });
  };

  const purchased = () => {
    alert('Your order has been placed');

    const purchaseCompleted = async (preCartState) => {
      preCartState.item.forEach(async (item) => {
        try {
          await fetch(
            `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}/${item._id}`,
            {
              method: 'DELETE',
            }
          );
        } catch (err) {
          console.log(err.message);
        }
      });
    };

    setCartState((preCartState) => {
      purchaseCompleted(preCartState);
      return { item: [], totalAmount: 0 };
    });
  };

  // login cart handler
  const loginCartHandler = useCallback(async () => {
    if (userEmail) {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/55433c8cc8a24028900194faf63e1148/cartItem${userEmail}`
        );

        const data = await response.json();
        if (response.ok) {
          if (data.length > 0) {
            let refreshedItem = [];
            let refreshedAmount = 0;

            data.forEach((item) => {
              refreshedItem.push(item);
              refreshedAmount += item.price * item.quantity;
            });
            setCartState({ item: refreshedItem, totalAmount: refreshedAmount });
          }
        } else {
          throw data.error;
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      loginCtx.login(JSON.parse(localStorage.getItem('tokenId')));
    }
  }, [userEmail, loginCtx]);

  // logout Cart handler
  const logoutCartHandler = () => {
    setCartState({ item: [], totalAmount: 0 });
  };

  const contextValues = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    purchased: purchased,
    logoutCartHandler: logoutCartHandler,
    loginCartHandler: loginCartHandler,
  };

  return (
    <cartContext.Provider value={contextValues}>
      {props.children}
    </cartContext.Provider>
  );
};
export default cartContext;
