import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.get ('http://localhost:30/mypagewish', {subsr})
    return result.data;
}