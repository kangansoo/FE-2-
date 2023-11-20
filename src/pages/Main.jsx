import {React, useState,useEffect} from 'react' 
import Carousel from "react-multi-carousel";
//import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink} from "react-router-dom";

//처음 추천 결과 요청
import { allVods } from '../apis/vodallmodels';

//각 모델 새로고침 결과 요청
import { VOD_model1 } from '../apis/vodmodel1';
import { VOD_model2 } from '../apis/vodmodel2'
import { VOD_model3 } from '../apis/vodmodel3';


export default function Main() {
    const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 500 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  //모델별 결과 받을 리스트
  const [VODs1, setVODs1] = useState([]);
  const [VODs2, setVODs2] = useState([]);
  const [VODs3, setVODs3] = useState([]);

  //초기 결과 받을 리스트
  
// 전체 모델 결과
useEffect(()=>{
  const getAllVODs = async () => {
    const result = await allVods();
    setVODs1(result["model1"]);
    setVODs2(result["model2"]);
    setVODs3(result["model3"]);
  };
  getAllVODs();
  
},[]);


  //모델 1 새로고침 결과
  const getVOD1 = async () => {
    const result = await VOD_model1();
    setVODs1(result)
  };


  //모델 2 새로고침 결과
    const getVOD2 = async () => {
      const result = await VOD_model2();
      setVODs2(result)
    };

  //모델 3 새로고침 결과
    const getVOD3 = async () => {
      const result = await VOD_model3();
      setVODs3(result)
    };


    return (
      <div>
        <h1>인기작</h1>
        <button onClick={getVOD1}>새로고침</button>
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
              <img src={image.posterurl} alt={image.alt}/>
              </NavLink>
              
              {image.mood.map(mood=>(
                <label key={mood}>
                <NavLink to={"/mood/"+mood}>
                #{mood}</NavLink>
                </label>
              ))}
            </label>
            ))
          }
        </Carousel>
        <br /><br />
        <h1>장르별 추천</h1>
        <button onClick={getVOD2}>새로고침</button>
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
              <img src={image.posterurl} alt={image.alt}/>
              </NavLink>
              
              {image.mood.map(mood=>(
                <label key={mood}>
                <NavLink to={"/mood/"+mood}>
                #{mood}</NavLink>
                </label>
              ))}
            </label>
            ))
          }
        </Carousel>
          <br/><br />
        <h1>감독, 배우 추천</h1>
        <button onClick={getVOD3}>새로고침</button>
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
              <img src={image.posterurl} alt={image.alt}/>
              </NavLink>
              
              {image.mood.map(mood=>(
                <label key={mood}>
                <NavLink to={"/mood/"+mood}>
                  #{mood}</NavLink>
                  </label>
              ))}
            </label>
            ))
          }
        </Carousel>
  
      </div>
  );
};