import axios from "axios";

//VODdata 가져오기
export const VOD_model2 = async (subsr) => {
    const result = await axios.get("http://localhost:30/mainreload2",{subsr}); //post
    return result.data;
};
