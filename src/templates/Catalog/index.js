import React, { useEffect, useState } from 'react';
import ControlGrid from '../../components/ControlGrid';
import Breadcrumb from './../../components/breadcrumb';
import ShelfItem from '../../components/ShelfItem'

import { useSelector } from "react-redux";

import * as S from './styled';



export default function Catalog () {
  const data = useSelector((store) => {return store});
  const pokemonByType =  data.pokemonByType
  const breadcrumbName = data.theme.themeName
  console.log(breadcrumbName)

    return (
      <S.Catalog>
        <div className="container">
          <S.CatalogNav>
            <Breadcrumb name={breadcrumbName} />
            <ControlGrid />
          </S.CatalogNav>

          <S.Shelf>
            <>
              <ul>
                {pokemonByType.map((item, i) => (
                  <ShelfItem
                    key={i}
                    name={item.pokemon.name}>
                  </ShelfItem>
                ))}
              </ul>

            </>
          </S.Shelf>

        </div>
      </S.Catalog>
    )

}
