import styled from 'styled-components';

export const MiniCartMain = styled.aside`
  position:fixed;
  z-index:6;
  top:0;
  right:0;
  width: 80%;
  height: 100%;
  background: white;
  transform:translateX(200%);
  transition: 0.3s;
  padding: 30px 20px;
  .minicart-is-open &{
    transform: translateX(0)
  }



`
export const Overlay = styled.div`
  position:fixed;
  z-index:-1;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: black;
  opacity:0;
  pointer-events:none;
  visibility:hidden;
  transition: 0.3s;
  .minicart-is-open & {
    opacity:0.5;
    z-index:5;
    pointer-events: initial;
    visibility: visible;
  }

`
export const MiniCartBody = styled.div`
  position:relative;
  width:100%;
  height:100%;
  padding-bottom: 100px;
  > h3 {
    text-transform: uppercase;
    text-align:center;
    font-size: 24px;
  }
  .title--empty{
    position:absolute;
    left:50%;
    top:45%;
    transform:translate(-50%,-50%);
    width:100%;
    padding:0 20px;
    font-size: 20px;
    text-align:center;
  }
`

export const MinicartItems = styled.ul `
  height:100%;
  overflow-y:auto;
  li{
    position:relative;
    display:flex;
    align-items:center;
    padding: 30px 0;
    border-bottom: 1px solid #cecece;
    transition:0.3s;
    img{
      max-width: 70px;
      margin-right: 20px;
    }

    .product-info{
    }

    .btn-close{
      position:absolute;
      top:0;
      bottom:0;
      right:20px;
    }
  }

`
export const MiniCartFooter = styled.div `
  position: absolute;
  left:0;
  bottom:0;
  width:100%;
  height: 100px;
`
export const ButtonClose = styled.button`
  position:absolute;
  right: 0;
  top: 0;
  z-index:2;

`
export const TotalItems = styled.div `
  display:flex;
  justify-content: space-between;
`
