import React,{useState} from 'react';
import { Input, Inputs, Title, Wrapper } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
//import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';
import imageData from '../components/imgdata';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment/moment";
//import { emailcheck } from '../apis/emailCheck';
//import { nicknamecheck } from '../apis/nicknameCheck';
import { ko } from "date-fns/esm/locale";


export default function Signup() {
  //Home.jsx 처럼 useState와 onChange를 쓰기에는 코드가 길어지기 때문에 커스텀 훅을 사용(useForm.js 생성)
  const [email, onChangeId] = useForm();
  const [password, onChangePw] = useForm();
  const [nickname, onChangeName] = useForm();

  //생년월일 캘린더 - 다른 값의 변경 때마다 콘솔에 찍힘... 수정 필요
  const [startDate, setStartDate] = useState(new Date());
  const birthYear = moment(startDate).format("YYYY");

  const [gender,onChangeGender]= useState('0');

  const [selectedVods, setSelectedVods] = useState([]);

  const [emailCheck, setEmailCheck] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);

  const navigate = useNavigate();

  

//signUp api 호출
//회원가입 유효성 검사
  const onClick = async () => {
    if (!emailCheck){
      alert("이메일 중복확인을 해주세요");
    }else if(
      !nicknameCheck){alert("닉네임 중복확인을 해주세요")
    }else if(
      selectedVods.length<3){alert("정확한 추천을 위해 3개 이상의 VOD를 선택해주세요")
    }else{
      const status = await signUp(email, password, nickname, gender, birthYear,selectedVods);
      if(status === 201){alert("회원가입을 축하드립니다!")}
      

    navigate('/');
    }
    
  };

  const clickEmailCheck = async () => {
    const status=await emailcheck(email);

    //백에서 받은 코드로 사용 여부 안내
    if(status===201){
      
      if (email.includes("@")){
        setEmailCheck(true);
        alert("사용 가능한 이메일입니다.");
      }else{
        alert("올바른 이메일 형식을 입력해주세요.")
      }
      
      
    }else{
      alert("사용 불가능한이메일입니다.");
      setEmailCheck();
    }
  };
  
  const clickNicknameCheck = async () => {
    const status=await nicknamecheck(nickname);
    
    //백에서 받은 코드로 사용 여부 안내
    if(status===201){
      alert("사용 가능한 닉네임입니다.");
      setNicknameCheck(true);
      
    }else{alert("사용 불가능한 닉네임입니다.");
    setNicknameCheck();
    }
  };
  
  

  const onClickGender = (e) => {
    onChangeGender(e.target.value)
  };

  //얘도 다른 값의 변경 시 콘솔에 찍힘..
  
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
        <span>아이디</span>
        <Input placeholder="example@gmail.com" type="email" value={email} onChange={onChangeId}/>
        <button onClick={clickEmailCheck}>중복확인</button>
        <span>비밀번호</span>
        <Input placeholder="8자 이상 입력해주세요" type="password" value={password} onChange={onChangePw}/>
        <Input placeholder="닉네임" type="text" value={nickname} onChange={onChangeName}/>
        <button onClick={clickNicknameCheck}>중복확인</button></Inputs>


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
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber= {123}
        showMonthDropdown
        locale={ko}
			  selected={startDate}
        maxDate={new Date()}
			  onChange={(date) => setStartDate(date)}
			  dateFormat="yyyy-MM-dd"
        
          
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
                onClick={() => handlePosterClick(item.content_id)}
                
                style={{ border: selectedVods.includes(item.content_id) ? '2px solid red' : '2px solid transparent' }}
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
  }
`;
