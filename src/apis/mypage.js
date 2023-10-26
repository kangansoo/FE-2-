import axios from 'axios';
import { getAuthAxios } from "./authAxios";


//마이페이지 정보 불러오는 함수
export const getMyPage = async () => {
    //local storage에서 access 토큰 가져오기
    const access=localStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    //authAxios에 baseurl을 설정해줬기 때문에 '/mypage'만 붙이면 됨
    const result = await authAxios.get('/mypage');
    return result.data;


};

