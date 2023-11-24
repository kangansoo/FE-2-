import axios from "axios";

//닉네임 중복 체크 post 요청
export const nicknamecheck = async (nickname) => {
    const result = await axios.post("http://localhost:30/nicknamecheck", {
        nickname
    });
    return result.status;
};