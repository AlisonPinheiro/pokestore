import { createStore } from "redux";

const INITIAL_STATE = {
  theme: {},
  pokemonByType: [],
  pokemonFilteredBySearch: [],
  cartIsEmpty: true,
  cartProducts: JSON.parse(localStorage.getItem("Products")) || [],
  productNotice: [],

};

function course(state = INITIAL_STATE, action) {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_POKEMON_DATA_BY_TYPE":
      return {
        ...state,
        pokemonByType: action.payload,
      };
    case "SET_POKEMON_FILTERED_BY_SEARCH":
      return {
        ...state,
        pokemonFilteredBySearch: action.payload,
      };
    case "SET_CART_EMPTY":
      return {
        ...state,
        cartProducts: [],
      };
    case "ADD_CART_PRODUCT":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
        productNotice: [action.payload],
        cartIsEmpty: false
      };

    case "REMOVE_CART_PRODUCT":
      const productId = action.payload.productId;
      const productIndex = state.cartProducts.findIndex((product)=>{
        return product.productId === productId
      })

      const newList = state.cartProducts;
      newList.splice(productIndex, 1)
      const cartEmpty = newList.length === 0 ? true : false;
      return {
        ...state,
        cartIsEmpty: cartEmpty,
        cartProducts: [...state.cartProducts]
      }

    default:
      return state;
  }
}

const store = createStore(
  course,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
