import React from 'react'
import { styled } from 'styled-components';
import {Wrapper, Title, Form, Inputs, Input} from "../components/Common";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apis/login';

// 로그인 화면

const Home = () => {
    //로그인 입력 받기
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    //login.js에서 post 요청한 데이터 가져오기
    const onClick = async() => {
        //로그인 api
        const result = await login(id, pw);
        console.log(result); //localstorage에 token 잘 들어감
        //구조분해할당으로 data.data에서 accessToken, refreshToken을 꺼냄
        const {accessToken, refreshToken} = result;
        //localstorage에 저장 setItem(key, value)
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
        //마이페이지로 이동
        navigate("/mypage");
    };

  return (
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="아이디" value={id} onChange={onChangeId}/>
                <Input placeholder="비밀번호" type="password" value={pw} onChange={onChangePw}/>
            </Inputs>
            <Button onClick={onClick}>Login</Button>
        </Form>
        <CustomLink to='/signup'>회원가입하기</CustomLink>
    </Wrapper>
  )
}



export default Home;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 10px;

`;

//링크 css 수정
const CustomLink = styled(Link)`
    margin-top: 20px;
    color: black;
    text-decoration: none;
    &:visitied {
        color: black;
        text-decoration: none;
    }
`;