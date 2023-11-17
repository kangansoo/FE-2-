import axios from 'axios';

export const getReview = async() => {
    const subsr = localStorage.getItem('subsr');

    const result = await axios.get("http://localhost:30/reviews", {params:{subsr: subsr}});
    return result.data;
}