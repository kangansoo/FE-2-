import axios from "axios";

//VODdata 가져오기
export const VOD_model2 = async () => {
    const result = await axios.get("http://localhost:30/model2");
    return result.data;
};
