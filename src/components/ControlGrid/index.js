import React, { Component } from 'react'
import { RiLayoutColumnLine } from "react-icons/ri";
import { BiSquare } from "react-icons/bi";

import * as S from './styled';

export default class ControlGrid extends Component {
  render() {
    return (
      <S.Control>
        <small> visualização:</small>
        <button className="control--one">
          <BiSquare />
        </button>
        <button className="control--two active">
          <RiLayoutColumnLine />
        </button>
      </S.Control>
    )
  }
}
