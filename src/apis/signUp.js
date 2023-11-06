import axios from "axios";

//회원가입 api
export const signUp = async (id, pw, nickname, gender, birthYear) => {
    const result = await axios.post("http://localhost:30/signup", {
        id,
        pw,
        nickname,
        gender,
        birthYear
    });
    return result.data;
};
