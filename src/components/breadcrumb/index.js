import React, { Component } from 'react'

import * as S from './styled';

export default class Breadcrumb extends Component {
  render() {
    return (
      <S.Breadcrumb>
          <ul>
            <li>Home</li>
            <li>Grama</li>
          </ul>
      </S.Breadcrumb>
    )
  }
}
