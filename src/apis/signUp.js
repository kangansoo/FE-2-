import axios from "axios";

//회원가입 api
export const signUp = async (id, pw, name, age) => {
    const result = await axios.post("http://front.cau-likelion.org/signup", {
        id,
        pw,
        name,
        age,
    });
    return result.data;
};
