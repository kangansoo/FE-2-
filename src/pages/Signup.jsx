import React,{useState} from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common';
import { useForm } from '../hooks/useForm';
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';
import imageData from '../components/imgdata';


export default function Signup() {
  //Home.jsx 처럼 useState와 onChange를 쓰기에는 코드가 길어지기 때문에 커스텀 훅을 사용(useForm.js 생성)
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [nickname, onChangeName] = useForm();

  const navigate = useNavigate();

//signUp api 호출
  const onClick = async () => {
    await signUp(id, pw, nickname,gender,age);
    navigate('/');
  };

  const [gender,onChangeGender]= useState('0');
  const onClickGender = (e) => {
    onChangeGender(e.target.value);
  };

  const [age,onChangeAge]= useState('0');
  const onClickAge = (e) => {
    onChangeAge(e.target.value);
  };
  
  const [selectedVods, setSelectedVods] = useState([]);
  const handlePosterClick = (name) => {
      if (selectedVods.includes(name)) {
        setSelectedVods(selectedVods.filter((e) => e !== name));
      } else {
        setSelectedVods([...selectedVods, name]);
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

      {/* 나이 라디오 그룹 */}
      <div>
        <label>
        <input type='radio' value='0' checked={age==='0'} onChange={onClickAge}>
        </input>20-24</label>
        <label>
        <input type='radio' value='1' checked={age==='1'} onChange={onClickAge}>
        </input>25-29</label>
        <label>
        <input type='radio' value='2' checked={age==='2'} onChange={onClickAge}>
        </input>30-34</label>
        <label>
        <input type='radio' value='3' checked={age==='3'} onChange={onClickAge}>
        </input>35-39</label>
        <label>
        <input type='radio' value='4' checked={age==='4'} onChange={onClickAge}>
        </input>40-44</label>
        <label>
        <input type='radio' value='5' checked={age==='5'} onChange={onClickAge}>
        </input>45-49</label>
        <label>
        <input type='radio' value='6' checked={age==='6'} onChange={onClickAge}>
        </input>50-54</label>
        <label>
        <input type='radio' value='7' checked={age==='7'} onChange={onClickAge}>
        </input>55-59</label>
        <label>
        <input type='radio' value='8' checked={age==='8'} onChange={onClickAge}>
        </input>60-64</label>
        <label>
        <input type='radio' value='9' checked={age==='9'} onChange={onClickAge}>
        </input>65-69</label>
        <label>
        <input type='radio' value='10' checked={age==='10'} onChange={onClickAge}>
        </input>그 외</label>
      </div>


      {/* VOD 체크박스 */}
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
