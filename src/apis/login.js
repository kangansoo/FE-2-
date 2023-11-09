import axios from 'axios';

//로그인 함수
export const login = async (email, password) => {
    //post 요청
    // axios. post(URL, {body})
    const result = await axios.post('http://front.cau-likelion.org', {email, password});

    //data 구조 = {"status", "message", "data : {accessToken, refreshToken}"}
    return result.data.data;
}

