import axios from "axios";

//wish 여부 가져오기
export const VOD_model1 = async () => {
    const result = await axios.get("http://localhost:30/ratings");
    const found = response.data.filter((item) => item.subsr === subsr && item.content_id === content_id);
    
};
