import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  margin-left: 0%;
  width: 90%;
  height: 270px;
  text-align: center;

  .slick-list {
    margin: 0 40px;
    overflow: hidden;
    height: 270px;
    text-align: center;
  }

  .slick-arrow {
    display: block;
    z-index: 10;
    width: 24px;
    height: 24px;
    align-self: stretch;
  }

  .slick-arrow:hover {
    height: 30px;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;


export const Div = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 1vw;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

export const DivPre = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: -0.5vw;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

export const ImgLabel = styled.label`
    width: 176; 
    height: 244; 
    border-radius: 5px; 
    overflow: hidden;
    border: 1px #d4d4d4 solid;
    flexDirection: column;
    justifyContent: flex-start;
    alignItems: flex-start;
    display: inline-flex;
    cursor: pointer;
`
export const Poster = styled.img`
    alignSelf: stretch;
    flex: 1 1 0;
`


