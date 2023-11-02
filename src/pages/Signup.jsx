import React,{useState} from 'react';
import { Input, Inputs, Title, Wrapper } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';
import imageData from '../components/imgdata';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment/moment";


export default function Signup() {
  //Home.jsx 처럼 useState와 onChange를 쓰기에는 코드가 길어지기 때문에 커스텀 훅을 사용(useForm.js 생성)
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [nickname, onChangeName] = useForm();
  //생년월일 캘린더 - 다른 값의 변경 때마다 콘솔에 찍힘... 수정 필요
  const [startDate, setStartDate] = useState(new Date());
  const birthYear = moment(startDate).format("YYYY");
  

  const navigate = useNavigate();

//signUp api 호출
  const onClick = async () => {
    await signUp(id, pw, nickname, gender, birthYear);
    navigate('/');
  };

  const [gender,onChangeGender]= useState('0');
  const onClickGender = (e) => {
    onChangeGender(e.target.value);
  };

  //얘도 다른 값의 변경 시 콘솔에 찍힘..
  const [selectedVods, setSelectedVods] = useState([]);
  const handlePosterClick = (e) => {

      if (selectedVods.includes(e)) {
        setSelectedVods(selectedVods.filter((E) => E !== e));
      } else {
        setSelectedVods([...selectedVods, e]);
      }    
      
  };
  

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId}/>
        <Input placeholder="비밀번호" type="password" value={pw} onChange={onChangePw}/>
        <Input placeholder="닉네임" value={nickname} onChange={onChangeName}/>
      </Inputs>


      {/* 성별 라디오 그룹 */}
      
      <div>
        <label>
        <input type='radio' value='0' checked={gender==='0'} onChange={onClickGender}>
        </input>남</label>
        <label>
        <input type='radio' value='1' checked={gender==='1'} onChange={onClickGender}>
        </input>여</label>
      </div>

      {/* 생년월일 선택 캘린더*/}
      <div>
      <span>생년월일</span>
      <DatePicker
			  selected={startDate}
			  onChange={(date) => setStartDate(date)}
			  dateFormat="yyyy-mm-dd"
			/>
      </div>


      {/* VOD 선택 */}
      <h1>영화선택</h1>
      <div>
        {imageData.map((item, idx) => (
            <label key={idx}>
                <img
                src={item.url}
                name={item.label}
                alt=""
                onClick={() => handlePosterClick(item.label)}
                style={{ border: selectedVods.includes(item.label) ? '2px solid red' : '2px solid transparent' }}
                />
            </label>
        ))}
    </div>


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
