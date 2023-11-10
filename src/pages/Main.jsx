import {React} from 'react' //,useEffect,useState
import Carousel from "react-multi-carousel";
import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink} from "react-router-dom";

// import axios from 'axios';

export default function Main() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // const [data1, setData1] = useState();

  // const setData = async () => {
  //   const data = await axios.get("http://localhost:30/VODdata");
  //   setData1(data.data)
  // };
  // setData()

  // useEffect(()=>{
  //   axios
  //     .all([axios.get("http://localhost:30/VODdata")])
  //     .then(
  //       axios.spread((res1)=>{
  //         setData1(res1.data);
  //         console.log(data1)
  //       })
  //     )
      
  // });


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
          {imageData.map(image => (
            <label key={image.alt}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.url} alt={image.alt}/>
              </NavLink>
            </label>
            ))
          }
        </Carousel>
  
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
          {imageData.map(image => (
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
          {imageData.map(image => (
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