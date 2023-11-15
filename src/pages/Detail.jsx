import React, {useState, useEffect} from 'react'
import { Rating } from 'react-simple-star-rating'
import {HeartOutlined, HeartFilled} from '@ant-design/icons';	

//상세페이지 동적 url 라우팅 위한 useParams 
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { wishes } from '../apis/wishes';
import imageData from "../components/imgdata";
import axios from "axios";




export default function Detail() {
    
    //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {content_id}=useParams();

    //url 파라미터로 포스터 찾기 (content_id로 연결)
    const poster=imageData.find(
        function (imageData) 
        { return imageData.content_id === content_id }
    );

    //찜하기
    const subsr= localStorage.getItem('subsr');
    const [count,setCount]=useState(0);
    const [isWished, setIsWished] = useState(0);
    const [wish, setWish] = useState(isWished);

    //rating get 요청 usestate
    const [rating, setRating] = useState();
    const [isRated, setIsRated] = useState(false);

    const handleWishButton = () => {
      if (!wish) {
        setWish(1);
      } else {
        setWish(0);
      }
    };

    useEffect(() => {
      const postwishes = async()=>{
        wishes(subsr, content_id, wish);}
      
      if (count===0) {
          setCount(count+1)
    } else {
      postwishes();
    }
    }, [subsr, content_id, wish]);



    //rating get요청
    useEffect(() => {
      const checkRatings = async () => {
        try {
          const response = await axios.get('http://localhost:30/ratings');
          const found = response.data.filter((item) => item.subsr === subsr && item.content_id === content_id);
          if (found.length > 0) {
            setIsRated(true);
            setRating(found[found.length-1].rating);
          } else{
            setIsRated(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkRatings();
    }, []);

    
    //wish get요청
    useEffect(() => {
      const checkWishes = async () => {
        try {
          const response = await axios.get('http://localhost:30/wishes');
          const found = response.data.filter((item) => item.subsr === subsr&&item.content_id === content_id);
          if (found.length > 0) {
            setIsWished(found[found.length-1].wish);
            console.log("found.length", found)
            console.log("[found.length-1].wish", found[found.length-1].wish)
            console.log("isWished", isWished)
            console.log("wish", wish)
          } else{
            console.log("elseisWished", isWished);
          }
        } catch (error) {
          console.log("error", error);
        }
      };
      checkWishes();
    }, []);
    
    
    // Catch Rating value
    const handleRating = async(rate) => {
        const rating_info={subsr:subsr, content_id:content_id, rating:rate};
        await axios.post("http://localhost:30/ratings", rating_info);
    };
    

    return (
    <div>
        <h2>{poster.label}</h2>
        <div>
            <img src={poster.url} alt={poster.alt} >
            </img><p>{poster.desc}</p>
        </div>
        { isRated ? 
              (<Rating
                size="35"
                initialValue={rating}
                onClick={handleRating}
              />
              ) : (
              <Rating
                  size="35"
                  onClick={handleRating}
                  />
              )
        }  
            <Button
                onClick={handleWishButton}>
                {wish? <HeartFilled style={{color:"red", fontSize: '30px'}}/>:<HeartOutlined style={{fontSize: '30px'}}/>}
            </Button>
    </div>
    )
}

const Button = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
      transform: scale(1.1);
    }
}
`;