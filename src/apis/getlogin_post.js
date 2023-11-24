import axios from 'axios';

//로그인 함수
export const login = async (subsr) => {
    const result = await axios.get('http://localhost:30/login', {subsr}); //('http://1.220.201.108:8080/login', {subsr});
    return result;
}

