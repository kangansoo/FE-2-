import axios from "axios";

export const putrating = async(content_id, subsr, rating, review, rating_date)=> {
    await axios.put(`http://localhost:30/detail${content_id}rating/1`,
    {
        subsr: subsr,
        rating: rating,
        review: review,
        rating_date: rating_date
    })
    
}