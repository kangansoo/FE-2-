import {React, useState,useEffect} from 'react' 
import Carousel from "react-multi-carousel";
//import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink} from "react-router-dom";

//각 모델 결과 요청
import { VOD_model1 } from '../apis/vod_model1';
import { VOD_model2 } from '../apis/vod_model2'
import { VOD_model3 } from '../apis/vod_model3';


export default function Main() {
    const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 500 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

 const onClickRefreshButton = (() => {
    window.location.reload();
  });
  
  //모델별 추천 결과 받을 리스트
  const [VODs1, setVODs1] = useState([]);
  const [VODs2, setVODs2] = useState([]);
  const [VODs3, setVODs3] = useState([]);


  //모델 1 결과
  useEffect(()=>{
    const getVOD1 = async () => {
      const result = await VOD_model1();
      setVODs1(result)
    };
    getVOD1();
  },[]);

  //모델 2 결과
  useEffect(()=>{
    const getVOD2 = async () => {
      const result = await VOD_model2();
      setVODs2(result)
    };
    getVOD2();
  },[]);

  //모델 3 결과
  useEffect(()=>{
    const getVOD3 = async () => {
      const result = await VOD_model3();
      setVODs3(result)
    };
    getVOD3();
  },[]);


console.log(VODs1)
    return (
      <div>
        메인페이지
        <h1>인기작</h1>
          <Carousel
          centerMode={true}
          focusOnSelect={true}
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={10000}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left"
        >
          {VODs1&&VODs1.map(image => (
            <label key={image.alt}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.url} alt={image.alt}/>
              </NavLink>
            </label>
            ))
          }
        </Carousel>
          
          <br />
          <button onClick={onClickRefreshButton}>
            새로고침
          </button>
          
        <br />
        <h1>장르별 추천</h1>
          <Carousel
          centerMode={true}
          focusOnSelect={true}
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={10000}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left"
        >
          {VODs2&&VODs2.map(image => (
            <label key={image.alt}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.url} alt={image.alt}/>
              </NavLink>
            </label>
            ))
          }
        </Carousel>
  
        <h1>감독, 배우 추천</h1>
          <Carousel
          centerMode={true}
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={10000}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-left"
        >
          {VODs3&&VODs3.map(image => (
            <label key={image.alt}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.url} alt={image.alt}/>
              </NavLink>
            </label>
            ))
          }
        </Carousel>
  
      </div>
  );
};