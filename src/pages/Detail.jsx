import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'

//상세페이지 동적 url 라우팅 위한 useParams 
import { useParams } from 'react-router-dom';

import imageData from "../components/imgdata";

import ratingpost from "../apis/rating"



export default function Detail() {
    const [rating, setRating] = useState(0)

    //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {content_id}=useParams();

    //url 파라미터로 포스터 찾기 (content_id로 연결)
    const poster=imageData.find(
        function (imageData) 
        { return imageData.content_id === content_id }
    )
    
    const id=localStorage.getItem('id');

    // Catch Rating value

    const handleRating = (rate) => {
        setRating(rate)
      };

    const sendRating = async (id,content_id,rating) => {
        await ratingpost();
      };
  
  
    return (
    <div>
        <h2>{poster.label}</h2>
        <div>
            <img src={poster.url} alt={poster.alt} >
            </img>
        </div>
        
            <Rating
                size="35"
                onClick={()=>{
                    handleRating();
                    sendRating(id,content_id,rating);
                    }}/>

        </div>
    )
}
