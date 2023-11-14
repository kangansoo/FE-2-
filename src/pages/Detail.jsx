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
    const [wish, setWish] = useState();
    const email= localStorage.getItem('email');
    const [count,setCount]=useState(0);


    const handleWishButton = () => {
      if (!wish) {
        setWish(true);
      } else {
        setWish(false);
      }
    };


    useEffect(() => {
      const postwishes = async()=>{
        wishes(email, content_id, wish);}
      
      if (count===0) {
          setCount(count+1)
    } else {
      postwishes();
    }
    }, [email, content_id, wish,count]);


    // Catch Rating value
    const handleRating = async(rate) => {

        const rating_info={email:email, content_id:content_id, rating:rate};
        await axios.post("http://localhost:30/ratings", rating_info);
      
    };
    

    return (
    <div>
        <h2>{poster.label}</h2>
        <div>
            <img src={poster.url} alt={poster.alt} >
            </img><p>{poster.desc}</p>
        </div>
        
            <Rating
                size="35"
                onClick={handleRating}
            />
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