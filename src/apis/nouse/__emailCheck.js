import axios from "axios";

//이메일 중복 체크 post 요청
export const emailcheck = async (email) => {
    const result = await axios.post("http://localhost:30/emailcheck", {
        email
    });
    return result.status;
};