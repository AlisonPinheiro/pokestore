import styled from 'styled-components';


export const PurchaseNoticeContainer = styled.div`
  position:fixed;
  z-index:8;
  width: 100px;
  padding: 10px 5px;
  top:70px;
  right:0;
  background:white;
  -webkit-box-shadow: 0px 11px 14px -4px #878787;
  box-shadow: 0px 11px 14px -4px #878787;
  &:after{
    content:'';
    border-bottom: 10px solid white;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    width: 0;
    height: 0;
    margin: 30px auto;
    position: absolute;
    top: -60px;
    left: 65%;
    transform: translateX(-50%);
    box-shadow: 0px 11px 14px -4px #878787;
  }
  .notice-item{
    text-align:center;
    p{
      font-size:11px;
      margin-top: 10px;

    }
    img{
      max-width:40px;
      margin:0 auto;
    }
  }
`
