import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`http://localhost:30/detail${content_id}rating`)
    return response;
}
