import axios from "axios";

//genre별 VOD 리스트 가져오기
export const genreList = async (genre) => {
    const result = await axios.get(`http://localhost:30/${genre}`)
    return result.data;
};