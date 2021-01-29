import styled from 'styled-components';

export const Control = styled.div`
  display:flex;
  align-items:center;
  small{
    font-size: 10px;
    padding-bottom:5px;
    margin-right:5px;
  }
  button{
    width: 25px;
    min-height: 25px;
    opacity:0.4;
    transition:0.3s;
    &.active{
      opacity:1;
    }
    &:first-of-type{
      margin-right:2px;

    }

    &:last-of-type{
      margin-left:2px;
    }
  }


`
