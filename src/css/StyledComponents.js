import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  margin-left: 0 auto;
  width: 90%;
  height: 270px;
  text-align: center;

  .slick-list {
    margin: 0 50px;
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
    right: 4vw;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

export const DivPre = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 2.5vw;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

export const MypageTitle = styled.h2`
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 10%
`
export const MypageText = styled.p`
  margin-left: 10%;
  font-size: 18px;
`
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
export const RatingBox = styled.div`
  width: 80%;
  height: 180px;
  margin-left: 10%;
  margin-bottom: 1%;
  border-bottom : 2px #d4d4d4 solid;
`
export const RatingTitle = styled.span`
  position: relative;
  margin-left: 1%;
  box-sizing: content-box;
  top: -150px;
  display: inline-flex;
  `
  export const SliderContainer = styled.div`
    height: 350px;
    margin: 0 10%;
  `