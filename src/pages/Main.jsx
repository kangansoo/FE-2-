import {React, useState,useEffect} from 'react' 
import Carousel from "react-multi-carousel";
//import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink} from "react-router-dom";
import { Loading } from '../components/Loading';

//처음 추천 결과 요청
import { allVods } from '../apis/main';

//각 모델 새로고침 결과 요청
import { VOD_model1 } from '../apis/reload1';
import { VOD_model2 } from '../apis/reload2';
import { VOD_model3 } from '../apis/reload3';


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

  //subsr 변수
  const subsr=localStorage.getItem('subsr')

  //로딩 페이지 변수
  const [loading, setLoading] = useState(true);
  
// 전체 모델 결과
useEffect(()=>{
  const getAllVODs = async () => {
    setLoading(true);
    const result = await allVods(subsr);
    setVODs1(result["description_data"]);
    setVODs2(result["genre_data"]);
    setVODs3(result["personal_data"]);
    setLoading(false);
  };
  getAllVODs();
},[]);

  //모델 1 새로고침 결과
  const getVOD1 = async () => {
    const result = await VOD_model1(subsr);
    setVODs1(result)
    console.log(result)
    console.log(VODs1)
  };


  //모델 2 새로고침 결과
    const getVOD2 = async () => {
      const result = await VOD_model2(subsr);
      setVODs2(result)
    };

  //모델 3 새로고침 결과
    const getVOD3 = async () => {
      const result = await VOD_model3(subsr);
      setVODs3(result)
    };


    return (
      <div>
        {loading ? <Loading /> :null}<div>
        <h1>인기작</h1>
        <button onClick={getVOD1}>새로고침</button>
          <Carousel
          centerMode={true}
          focusOnSelect={true}
          swipeable={false}
          draggable={true}
          showDots={false}
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
          {VODs1&&VODs1.map((image,index) => (
            <label key={index}> 
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.posterurl} alt={index}/>
              </NavLink>
              
              {image.mood.map((mood,index)=>(
                <label key={index}>
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
          showDots={false}
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
          {VODs2&&VODs2.map((image,index) => (
            <label key={index}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.posterurl} alt={index}/>
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
          showDots={false}
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
          {VODs3&&VODs3.map((image,index) => (
            <label key={index}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.posterurl} alt={index}/>
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
        </Carousel></div>}
  
      </div>
  );
};