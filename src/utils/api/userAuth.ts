// import axios from 'axios';

// import {  RegisterFormData } from "../formValidations/user/register"

// import {  LoginFormData } from "../formValidations/user/login"

// const API_BASE_URL = process.env.API_BASE_URL; // Use the environment variable

 
// export const loginUser = async (userData: LoginFormData) => {
//     try {
//         console.log(userData, '11111111111111111111111111111');
//         const response = await axios.post(`${API_BASE_URL}login/`, userData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log(response.data, 'Login response'); 
//         return response.data;
//     } catch (error) {
//         console.error('Error logging in:', error);
//         throw error; 
//     }
// };

// export const registerUser = async (userData: RegisterFormData) => {
//     try {
//         console.log(userData, '11111111111111111111111111111');
//         const response = await axios.post(`${API_BASE_URL}/registration`, userData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log(response.data, 'Registration response'); // Handle the response as needed
//         return response.data;
//     } catch (error) {
//         console.error('Error registering user:', error);
//         throw error;
//     }
// };
