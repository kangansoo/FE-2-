import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`http://localhost:30/detail${content_id}wish`, {
        subsr,
        content_id,
        wish
    });
    return result.status;
}
