import axios from "axios";

//전체 VOD 카테고리 가져오기
export const genres = async () => {
    const result = await axios.get("http://localhost:30/vods");
    return result.data;
};