import React from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  //Home.jsx 처럼 useState와 onChange를 쓰기에는 코드가 길어지기 때문에 커스텀 훅을 사용(useForm.js 생성)
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();
  const navigate = useNavigate();
  //signUp api 호출
  const onClick = async () => {
    await signUp(id, pw, name, age);
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId}/>
        <Input placeholder="비밀번호" type="password" value={pw} onChange={onChangePw}/>
        <Input placeholder="이름" value={name} onChange={onChangeName}/>
        <Input placeholder="나이" value={age} onChange={onChangeAge}/>
      </Inputs>
      {/* Sign Up 했을 때 api 처리를 하기 위해 signUp.js 생성 */}
      <Button onClick={onClick}>Sign Up</Button>
    </Wrapper>
  )
}

const Button = styled.button`
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 20px;
`;
