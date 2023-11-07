import axios from "axios";

//평점 등록 api
const ratingpost = async (id,content_id,rating) => {
    const result = await axios.post("http://localhost:30/ratings", {
        id,
        content_id,
        rating
    });
    return result.data;
};

export default ratingpost;