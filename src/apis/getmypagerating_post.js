import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.get ('http://localhost:30/mypagerating', {subsr})
    return result;
}