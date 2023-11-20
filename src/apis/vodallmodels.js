import axios from "axios";

//VODdata 가져오기
export const allVods = async () => {
    const result = await axios.get("http://localhost:30/models");
    return result.data;
};