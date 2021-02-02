import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import { BiXCircle, BiX } from "react-icons/bi";

import * as S from './styled';

const MinicartComponent = (props) => {
  const dispatch = useDispatch();

  const ProductList = useSelector((state) => {return state.cartProducts});
  const cartEmpty = useSelector((state) => {return state.cartIsEmpty});
  const [totalPrice, setTotalPrice] = useState([])

  useEffect(() => {
    const calculateTotal = () => {
      let result = 0;
      ProductList.map((product) => {
        let value = product.price.replace(/[^0-9,]/g, "");
        value = value.replace(",", ".");
        value = parseFloat(value);

        return (result = value + result);
      });

      setTotalPrice(result.toFixed(2).toString().replace(".", ","));
    };

    calculateTotal();
  }, [ProductList])

  function CloseMinicart () {
    document.body.classList.toggle('minicart-is-open');
  }

  function removeProduct (productId){
    dispatch({
      type: "REMOVE_CART_PRODUCT",
      payload: { productId },
    });
  }


  return(
    <>
      <S.MiniCartMain>
        <S.MiniCartBody>
          <h3> Minicart </h3>
          {cartEmpty ?
              <h5 className="title--empty">Seu carrinho está vazio, adicione algum produto !</h5>
            :
              <>
                <S.MinicartItems>
                  {ProductList.map(product =>(
                    <li key={product.id}>
                      <img src={`https://img.pokemondb.net/artwork/${product.name}.jpg`} />
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <span>{product.price}</span>
                      </div>
                      <button className="btn-close" onClick={()=> removeProduct(product.productId)}><BiXCircle /></button>
                    </li>
                  ))}
                </S.MinicartItems>
                <S.MiniCartFooter >
                  <S.TotalItems>
                    <span> total do pedido:</span>
                    <span>R${totalPrice}</span>
                  </S.TotalItems>
                  <button>Fechar Compra</button>
                </S.MiniCartFooter>
              </>
          }

          <S.ButtonClose onClick={() => CloseMinicart()}>
            <BiX size={'2rem'} />
          </S.ButtonClose>

        </S.MiniCartBody>

      </S.MiniCartMain>
      <S.Overlay className="minicart-overlay" onClick={() => CloseMinicart()} />
    </>
  )
}

const mapStateToProps = (state) => {
  return  {
    cartProducts: state.cartProducts,
    cartIsEmpty: state.cartIsEmpty
  }
}

export const MiniCart = connect(mapStateToProps)(MinicartComponent);
