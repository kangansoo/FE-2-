import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('/mypage/replay', {subsr}); //("http://localhost:30/mypagereplay",{subsr})
    return result;
}