import React,{useEffect, useState} from 'react'

import { useParams } from 'react-router-dom';
import { genreList } from '../apis/genre';
import { NavLink } from 'react-router-dom';

export default function Mood() {
    
     //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {genre}=useParams();

    const [genreVods,setGenreVods]=useState();

    //각 genre 별 검색 목록 불러오기
    useEffect(()=>{
    const getgenreList = async()=>{
            const result =await genreList(genre);    
            setGenreVods(result)}
            getgenreList()
    },);


    return (
        <div>
        <h3>{genre} VOD 목록 </h3>
         {genreVods&&genreVods.map(image => (
            <label key={image.alt}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.posterurl} alt={image.alt}/>
              </NavLink></label>))} 
              </div> 
    );

}