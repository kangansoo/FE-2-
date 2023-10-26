import axios from "axios";
import { getNewRefreshToken } from "./refresh";

//try catch로 매번 401을 처리하기 어렵기 때문에 한 번에 처리하는 함수 생성
//토큰을 받아와서 사용
//헤더에 토큰 적재
export const getAuthAxios = (token) => {
    const authAxios = axios.create({
        baseURL: 'http://front.cau-likelion.org',
        headers: {
            Authorization: token, //엑세스 토큰
        },
    });
    
    //요청이 실패했을 때
    authAxios.interceptors.response.use( //토큰이 만료되지 않았을 때
        (res)=> res,
        async (error) => { //토큰이 만료되었을 때
            //401 에러
            if (error.response.status===401) { 
                //토큰이 만료된 경우
                //토큰을 새로 받아오기
                const {accessToken, refreshToken} = await getNewRefreshToken();
                //에러의 config의 header에 토큰을 새로 넣기
                error.config.header.Authorization=accessToken;
                //토큰을 새로 받았으니 localstrage 내의 토큰을 새로 저장
                localStorage.setItem('access',accessToken);
                localStorage.setItem('refresh',refreshToken);
                //실패한 에러 config의 url과 데이터 내 리스폰스의 데이터 리턴
                return (await axios.get(error.config.url, error.config)).data;
            }
        }
    );
    return authAxios;
};