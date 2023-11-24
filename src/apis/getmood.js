import axios from "axios";

//mood VOD 리스트 가져오기
export const moodList = async (mood) => {
    const result = await axios.get(`http://localhost:30/main${mood}`) //('http://1.220.201.108:8080/main/${mood}')
    return result;
};