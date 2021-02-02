import React from 'react';
import { useDispatch } from "react-redux";
import * as S from './styled';

export default function BuyButton (props) {
  const dispatch = useDispatch();

  function addProductToCart (name, price, quantity, productId) {
    dispatch({
      type: "ADD_CART_PRODUCT",
      payload: { name, price, quantity, productId },
    });
    dispatch({
      type: "SET_CART_IS_EMPTY",
      payload: false,
    });

  };

  return (
    <S.BuyButton onClick={() => addProductToCart(props.name, props.price, props.quantity, props.productId)}>
      Comprar
    </S.BuyButton>
  );

}
