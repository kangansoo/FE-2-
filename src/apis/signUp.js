import axios from "axios";

//회원가입 api
export const signUp = async (email, password, nickname, gender, birthYear,selectedVods) => {
    const result = await axios.post("http://localhost:30/signup", {
        email,
        password,
        nickname,
        gender,
        birthYear,
        selectedVods
    });
    return result.data;
};

