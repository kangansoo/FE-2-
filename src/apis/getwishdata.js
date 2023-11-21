import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const response = await axios.get(`http://localhost:30/detail${content_id}mywish`,{subsr})
    return response.data;
}

