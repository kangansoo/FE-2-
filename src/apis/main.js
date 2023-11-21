import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.get("http://localhost:30/main",{subsr});//post
    return result.data;
};