import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js'

export const CartContext = createContext(
    {
        items: [],
        addItemtoCart: () => { }, //dummy function
        updatedItemQuantity: () => { },
    }
);

function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            items: updatedItems, // if its a more complex state spread ...state and then update the values that are only required
        };
    }
    if (action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };

    }

}

export default function CartContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer,
        {
            items: [],
        });




    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM', // it can be anything, any name,any value
            payload: id,
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM', // it can be anything, any name,any value
            payload: {
                productId,
                amount,
            },
        })
    }

    const ctxValue = {
        items: shoppingCartState.items, //value from the state to read
        addItemtoCart: handleAddItemToCart, // function to update the context
        updatedItemQuantity: handleUpdateCartItemQuantity,// function to update context
    }

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )
}
