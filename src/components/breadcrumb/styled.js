import styled from 'styled-components';

export const Breadcrumb = styled.div `
  ul{
    li {
      display: inline-block;
      &::after{
        content '-';
        display:inline-block;
        margin: 0 5px;
      }
      &:last-of-type{
        &::after{
          display:none;
        }
      }
    }
  }

`
