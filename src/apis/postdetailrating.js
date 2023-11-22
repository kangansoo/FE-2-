import axios from "axios";

export const postrating = async(content_id, subsr, rating, review, rating_date)=>{
    const result = await axios.post(`http://localhost:30/detail${content_id}rating`, {
        subsr,
        rating,
        review,
        rating_date
    })
    return result.status;
}
