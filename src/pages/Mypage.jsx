import React, {useEffect, useState} from 'react'
import { getMyPage } from '../apis/mypage';
import axios from "axios";

import { Rating } from 'react-simple-star-rating'

export default function Mypage() {
  const [data, setData] = useState();
  //로딩화면 (데이터를 받아오는데 오래 걸리면 빈화면 출력되기 때문에 로딩 페이지 생성)
  const [loading, setLoading] = useState(true);

  const [isRated, setIsRated] = useState(false);
  
  const [ratingData, setRatingData] = useState();  

  useEffect(() => {
    const subsr = localStorage.getItem('subsr');
    
    const checkRatings = async () => {
      try {
        const response = await axios.get('http://localhost:30/ratings');
        const found = response.data.filter((item) => item.subsr === subsr);
        if (found.length > 0) {
        setIsRated(!!found);
        setRatingData(found);
        //console.log("길이", found.length)
        //console.log("데이터", found)
        // const vodData = await axios.get('http://localhost:30/VODdata');
        // const ratedVod = vodData.data.filter((item) => item.content_id === ratingData.content_id);
        // console.log("ratedVod", ratedVod);
        } else{
          setIsRated();
        }
      } catch (error) {
        setIsRated();
      }
    };

    checkRatings();
  }, []);

  
  //페이지 이동했을 때 api 호출
  useEffect(() =>{
    //mypage 정보 불러오기(이름, 나이 정보 호출) -> mypage.js api생성
    getMyPage().then((res)=>{
      //res를 data에 넣기
      setData(res)
      //setData를 받으면 setLoading을 false로 설정
      setLoading(false);
    });
  }, []); //의존성 배열을 공백으로 하여 한 번만 실행하도록 함
  //로딩이 true이면 로딩중이라는 글자가 띄워짐, 로딩이 false가 되면 밑의 컴포넌트 출력
  if (loading) return <div>로딩중..</div>; //애니메이션을 넣어도 됨
  //console.log("받아오는 데이터", data)

  return (
    <div>
      {/* ? = data가 undefined일 때 아무것도 출력하지 마라 (useEffect 실행 전까지는 undefined)*/}
      
      <div>회원정보</div>

      <li>셋탑박스 번호: {data[0]?.subsr}</li>

      <br />

      <div>찜목록</div>

      <br />
      <div>평점내역</div>
      <div>
      { isRated ? 
      (ratingData.map((item) => (
        <div key={item.content_id}>
          content_id: {item.content_id}
          <Rating
            size="20"
            initialValue={item.rating}
            readonly="true"
          />
        </div>
      
      ))) : (
        "평점 내역이 존재하지 않습니다."
      )}
      </div>

    </div>
  )
  
}
