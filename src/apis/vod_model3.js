import axios from "axios";

//VODdata 가져오기
export const VOD_model3 = async () => {
    const result = await axios.get("http://localhost:30/VODdata");
    return result.data;
};
