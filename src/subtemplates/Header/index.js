import React from 'react'
import logo from './../../assets/logo.png'
import { RiSearchEyeLine, RiShoppingCart2Line } from 'react-icons/ri'
import * as S from './styled';


export default function Header() {

  function ToggleMinicart () {
    document.body.classList.toggle('minicart-is-open');
  };


  return (
      <div className="container">
        <S.HeaderMain>
          <h1 className="header-logo">
              <img src={logo} title="Pokemon Store" alt="Pokemon Store" />
          </h1>
          <S.HeaderSearch>
            <input placeholder="Tá procurando por algum Pokémon ?" />
            <button type="submit"><RiSearchEyeLine /></button>
          </S.HeaderSearch>
          <button className="header-minicart" onClick={() => ToggleMinicart()}>
            <RiShoppingCart2Line />
          </button>
        </S.HeaderMain>

      </div>
  )

}

