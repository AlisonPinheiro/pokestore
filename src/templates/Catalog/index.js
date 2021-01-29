import React, { Component } from 'react'
import ControlGrid from '../../components/ControlGrid';
import Breadcrumb from './../../components/breadcrumb'

import * as S from './styled';

export default class Catalog extends Component {
  render() {
    return (
      <S.Catalog>
        <div className="container">
          <S.CatalogNav>
            <Breadcrumb />
            <ControlGrid />
          </S.CatalogNav>
        </div>
      </S.Catalog>
    )
  }
}
