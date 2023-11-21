import axios from "axios";

//VODdata 가져오기
export const VOD_model3 = async (subsr) => {
    const result = await axios.get(`http://localhost:30/main${subsr}reload3`);
    return result.data;
};
