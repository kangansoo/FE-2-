import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.get("http://localhost:30/main",{subsr}); //('http://1.220.201.108:8080/main', {subsr})
    return result;
};