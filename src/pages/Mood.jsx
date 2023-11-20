import React from 'react'

import { useParams } from 'react-router-dom';


export default function Detail() {
    
    //url 파라미터("localhost:3000/mood/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {mood}=useParams();

    return (
        <text>{mood} VOD 목록 </text>
    );

}