import axios from "axios"; //token 생기면 삭제
//token X import { getAuthAxios } from "./authAxios";


//마이페이지 정보 불러오는 함수
export const getMyPage = async () => {
    //local storage에서 access 토큰 가져오기
    //token X const access=localStorage.getItem("access");
    //token X const authAxios = getAuthAxios(access);

    //authAxios에 baseurl을 설정해줬기 때문에 '/mypage'만 붙이면 됨
    //token X const result = await authAxios.get('/mypage');
    //return result.data;


    //토큰없이 구현 위한 코드
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const result = await axios.get('http://localhost:30/signup',{params:{email:email,password:password}}); //token 생기면 삭제
    return result.data
};

