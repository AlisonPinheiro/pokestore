import React, { useState, useSelector, useEffect } from 'react'
import { connect } from 'react-redux';

import * as S from './styled';

const Purchase = (props) => {
  console.log(props)
  const productList = props.productNotice
  const [notice, setNotice] = useState([])

  useEffect(() => {
    setNotice(productList)
    const timer = setTimeout(() => {
      console.log('passei')
      setNotice([])
    }, 5000);
    return () => {
      clearTimeout(timer)
    }
  }, [productList])



  return (
    <>
    {notice.length === 0 ? '' :
      <S.PurchaseNoticeContainer>
        {notice.map(item =>
            <div className="notice-item" key={item.id}>
              <img src={`https://img.pokemondb.net/artwork/${item.name}.jpg`} />
              <p><strong>{item.name} </strong>foi adicionado ao seu carrinho</p>
            </div>
          )}
      </S.PurchaseNoticeContainer>
      }
    </>
  )

}


const mapStateToProps = (state) => {
  return  {
    productNotice: state.productNotice,
  }
}

export const PurchaseNotice = connect(mapStateToProps)(Purchase);
