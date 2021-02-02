import React, { useEffect, useState } from "react";
import BuyButton from "../BuyButton"
import { generateRandomPrice } from "../../helper/generateRandomPrice";

import * as S from './styled';

export default function ShelfItem (props) {
  const { name, id } = props;
  const [price, setPrice] = useState();
  const imgSrc = `https://img.pokemondb.net/artwork/${name}.jpg`
  useEffect(() => {
    setPrice(generateRandomPrice());
  }, []);

    return (
      <S.ShelfItem className="ShelfItem">

        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <span>{price}</span>
        <BuyButton name={name} price={price} quantity={1} productId={id} />
      </S.ShelfItem>
    );
};
