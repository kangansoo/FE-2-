import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`/detail/${content_id}/wish`,{ //(`http://localhost:30/detail${content_id}wish`, 
        subsr,
        wish
    });
    return result;
}
