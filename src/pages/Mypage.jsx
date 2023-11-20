import React, {useEffect, useState} from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import {getReplay} from '../apis/mypage_replay';
import DelConfirmAlert from '../components/DelConfirmAlert'

export default function Mypage() {
  const subsr = localStorage.getItem('subsr');

  const [isWished, setIsWished] = useState(false);
  const [wishData, setWishData] = useState();

  const [isRated, setIsRated] = useState(false);
  const [ratingData, setRatingData] = useState();

  const [replayData, setReplayData] = useState();
  console.log('replayData', replayData);
  //const [reviewData, setReviewData] = useState();
  
  //replay GET
  useEffect(()=> {
    const getreplay = async () => {
      const result = await getReplay();
      setReplayData(result);
    };
    getreplay();
  }, []);
  
  //위시 GET
  useEffect(() => {
    const checkWishes = async () => {
      try {
        const response = await axios.get('http://localhost:30/wishes');
        const found = response.data.filter((item) => item.subsr === subsr);
        if (found.length > 0) {
          setIsWished(true);
          setWishData(found);
        } else{
          setIsWished();
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkWishes();
  }, []);

  //평점 GET
  useEffect(() => {
    const checkRatings = async () => {
      try {
        const response = await axios.get('http://localhost:30/ratings');
        const found = response.data.filter((item) => item.subsr === subsr);
        if (found.length > 0) {
        setIsRated(true);
        setRatingData(found);
        } else{
          setIsRated();
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkRatings();
  }, []);

  return (
    <div>
      {/* ? = data가 undefined일 때 아무것도 출력하지 마라 (useEffect 실행 전까지는 undefined)*/}
      
      <h2>회원정보</h2>

      <li>
        셋탑박스 번호 : {subsr}
      </li>

      <br />
      <h2>시청중인 컨텐츠</h2>
      <div>
        { replayData&&replayData.length > 0 ?
        (replayData.map((item, index) =>(
          <label key={index}>
            <NavLink to={"/detail/"+item.content_id}>
              <img 
              src={item.posterurl}
              alt={item.alt}
              />
              {item.title}
            </NavLink>
          </label>
        ))):(
          '시청 중인 컨텐츠가 없습니다.'
        )}
      </div>

      <br />
      <h2>찜목록</h2>
      <div>
      { isWished ? 
      (wishData.map((item, index) => (
        <label key={index}>
          <NavLink to={"/detail/"+item.content_id}>
              <img 
              src={item.posterurl}
              alt={item.alt}
              />
              {item.title}
          </NavLink>
        </label>
      ))) : (
        "찜 내역이 존재하지 않습니다."
      )}
      </div>
      <br />

      <h2>리뷰목록</h2>
      <div>
      { isRated ? 
      (ratingData.map((item, index) => (
        <div key={index}>
          <NavLink to={"/detail/"+item.content_id}>
          <img 
              src={item.posterurl}
              alt={item.alt} width="50px" 
              />
          {item.title}
          <Rating
            size="20"
            initialValue={item.rating}
            readonly="true"
          />{item.rating_date}{item.review}

          {/* 평점 데이터에서 subsr과 content_id로 다시 리뷰 데이터 가져와서 매핑 
           <text>리뷰: {reviewData.filter((reviewitem) => reviewitem.subsr === item.subsr
          &&reviewitem.content_id === item.content_id)
          .map((item2, index)=>(
            <label key={index}>{item2.review}</label>
          ))}</text>*/}
          
        </NavLink>
          <DelConfirmAlert />
          <hr />
        </div>
      
      ))) : (
        "평점 내역이 존재하지 않습니다."
      )}
      </div>
    </div>
  )
  
}
