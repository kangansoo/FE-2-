import axios from "axios";

//유효기간이 만료되어 로그인이 풀렸을 때(401에러) refresh token 불러오는 함수
export const getNewRefreshToken = async () => {
    //새로운 토큰을 받기 위해 기존 토큰 받아오기
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    //바디:리프레쉬 토큰, 헤더:엑세스 토큰을 포스트 요청
    const result = await axios.post('http://front.cau-likelion.org/refresh', 
    {
        refreshToken, //body
    },
    {
        headers : {
            Authorization: accessToken,
        }
    }
    );
    return result.data;
};