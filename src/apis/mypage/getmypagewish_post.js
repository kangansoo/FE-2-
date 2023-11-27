import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('/mypage/wish', {subsr}) //('http://localhost:30/mypagewish', {subsr})
    return result;
}