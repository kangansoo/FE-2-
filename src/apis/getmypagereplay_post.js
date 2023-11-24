
import axios from 'axios';

export const getReplay = async() => {
    const subsr = localStorage.getItem('subsr');

    const result = await axios.get("http://localhost:30/mypagereplay",{subsr}); //('http://1.220.201.108:8080/mypage/replay', {subsr})
    const response = result.data.filter((item)=>item.subsr === subsr);
    return response;
}