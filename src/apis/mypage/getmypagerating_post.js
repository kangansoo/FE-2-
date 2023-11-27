import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.post('/mypage/rating', {subsr}) //('http://localhost:30/mypagerating', {subsr})
    return result;
}