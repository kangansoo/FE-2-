import React, {useEffect, useState} from 'react'
import { getMyPage } from '../apis/mypage';

export default function Mypage() {
  const [data, setData] = useState();
  //로딩화면 (데이터를 받아오는데 오래 걸리면 빈화면 출력되기 때문에 로딩 페이지 생성)
  const [loading, setLoading] = useState(true);

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
  return (
    <div>
      {/* ? = data가 undefined일 때 아무것도 출력하지 마라 (useEffect 실행 전까지는 undefined)*/}
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </div>
  )
}
