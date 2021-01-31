import React from 'react'

import * as S from './styled';

export default function Breadcrumb(name) {
  return (
    <S.Breadcrumb>
        <ul>
          <li>Home</li>
          <li>{name.name ?  name.name : ''}</li>
        </ul>
    </S.Breadcrumb>
  )
};
