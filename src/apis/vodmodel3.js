import axios from "axios";

//VODdata 가져오기
export const VOD_model3 = async (subsr) => {
    const result = await axios.get(`http://localhost:30/mainreload3${subsr}`);
    return result.data;
};
