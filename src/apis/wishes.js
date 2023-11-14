import axios from "axios";

export const wishes = async(subsr, content_id, wish) => {
    const result = await axios.post("http://localhost:30/wishes", {
        subsr,
        content_id,
        wish
    });
    return result.data;
}
