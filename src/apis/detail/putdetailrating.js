import axios from "axios";

export const putrating = async(content_id, subsr, rating, review, rating_date)=> {
    const result=await axios.put(`/detail/${content_id}/rating`, //(`http://localhost:30/detail${content_id}rating/1`, 
    {
        subsr: subsr,
        rating: rating,
        review: review,
        rating_date: rating_date
    })
    return result;
}