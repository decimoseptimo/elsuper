import React, {useReducer} from "react";
import {getLocalState, setLocalState} from './localState';

export const CartContext = React.createContext()

export const CartProvider = props => {
  //todo: load from localStorage

  return <CartContext.Provider value={useReducer(cartReducer, [])}>
    {props.children}
  </CartContext.Provider>
}

//Reducer
const cartReducer = (state, action) => {
  // console.log(action)
  switch(action.type) {
    case 'ADD_CART_ITEM':
      if(itemExists(state, action.id)) return state;
      return [...state, {
        id: action.id,
        title: action.title,
        price: action.price,
        unit: action.unit,
        slug: action.slug,
        images: action.images,
        count: action.count,
      }];
    case 'REMOVE_CART_ITEM':
      return state.filter(i=>{
        return i.id !== action.id;
      });
    case 'UPDATE_CART_ITEM':
      return state.map(i=>{
        if(i.id === action.id){
          // console.log('!!')
          // console.log(action.count)
          return {...i, count: action.count}
        }
        return i;
      });
    default: return state;
  }
}

export const itemExists = (state, id) => {
  let index = state.findIndex(i=>(i.id === id))
  if(index>=0) return true;
  return false;
}

export const findIndex = (state, id) => {
  return state.findIndex(i=>(i.id === id))
}