import { useState } from "react";

//무조건 use로 시작해야 함, 이 안에서 여러가지 훅 사용 가능
export const useForm = () => {
    //id나 pw, name, age 등을 value로 추상화해서 함수 만들기
    //Home.jsx에서 id, pw 받는 로직 그대로
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };
    //필요한 value와 onChange 값만 리턴 받기
    return [value, onChange];
};