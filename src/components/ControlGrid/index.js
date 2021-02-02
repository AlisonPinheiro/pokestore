import React from 'react'
import { RiLayoutColumnLine } from "react-icons/ri";
import { BiSquare } from "react-icons/bi";

import * as S from './styled';

export default function ControlGrid() {
  function addGridOne (){
    document.body.classList.add('grid--one');
  }

  function addGridTwo (){
    document.body.classList.remove('grid--one');
  }
  return (
    <S.Control>
      <small> visualização:</small>
      <button className="control--one" onClick={() => addGridOne()}>
        <BiSquare />
      </button>
      <button className="control--two active" onClick={() => addGridTwo()}>
        <RiLayoutColumnLine />
      </button>
    </S.Control>
  )

}
