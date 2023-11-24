import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.get ('http://localhost:30/mypagerating', {subsr}) //('http://1.220.201.108:8080/mypage/rating', {subsr})
    return result;
}