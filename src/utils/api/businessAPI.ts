import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3004',
});

export const fetchBusinessData = async () => {
    try {
        const response = await instance.get('/businesses');
        return response.data;
    } catch (error: any) { // Specify the type of error as 'any'
        throw new Error('Error fetching business data: ' + error.message);
    }
};
