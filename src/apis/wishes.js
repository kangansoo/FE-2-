import axios from "axios";

export const wishes = async(email, content_id, wish) => {
    const result = await axios.post("http://localhost:30/wishes", {
        email,
        content_id,
        wish
    });
    return result.data;
}
