import styled from 'styled-components';

export const ShelfItem = styled.div `
  max-width: 50%;
  display:inline-block;
  padding:20px;
  text-align:center;
  transition: 0.3s;
  .grid--one &{
    max-width: 100%;
  }
  h3{
    padding-top: 10px ;
    text-transform:capitalize;
  }

  span{
    display:block;
    padding:10px 0%;
  }

  button{
    display:block;
    width: 100%;
    border-radius: 5px;
    border:1px solid green;
  }

  /* img{
    transition:0.3s;
    &:hover{
      transform: scale(1.2);
    }
  } */
`
