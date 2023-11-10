import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'

//상세페이지 동적 url 라우팅 위한 useParams 
import { useParams } from 'react-router-dom';

import imageData from "../components/imgdata";
import axios from "axios";



export default function Detail() {
    const [rating, setRating] = useState(0)
    console.log(rating);

    //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {content_id}=useParams();

    //url 파라미터로 포스터 찾기 (content_id로 연결)
    const poster=imageData.find(
        function (imageData) 
        { return imageData.content_id === content_id }
    );
    
    
    // Catch Rating value
    const handleRating = async(rate) => {
        if (typeof(rate)==="number"){
        const email= localStorage.getItem('email');

        setRating(rate);
        

        const rating_info={email:email,content_id:content_id,rating:rating};
        await axios.post("http://localhost:30/ratings", rating_info);
      }};
    
    


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

        </div>
    )
}
