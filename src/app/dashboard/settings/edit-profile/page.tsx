// 'use client'

// import React, { useState } from 'react';

// const EditProfilePage = () => {
//     const [formData, setFormData] = useState({
//         newPassword: '',
//         confirmPassword: '',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.newPassword === formData.confirmPassword) {
//             // Proceed with updating password logic
//             console.log('Passwords match. Proceeding with update.');
//             // You can add your logic here to handle password update
//         } else {
//             console.log('Passwords do not match. Please try again.');
//             // You can add your logic here to inform the user that passwords do not match
//         }
//     };

//     const handleDelete = () => {
//         // Handle delete profile logic here
//         console.log('Deleting profile...');
//     };

//     return (
//         <>
//             <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Edit Password</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-600">New Password:</label>
//                         <input
//                             type="password"
//                             name="newPassword"
//                             value={formData.newPassword}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-600">Confirm Password:</label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             className="w-full border rounded-md p-2"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
//                     >
//                         Save Password
//                     </button>
//                 </form>
//             </div>

//             <div className="bg-gray-300 max-w-2xl mx-auto mt-8 p-8 flex justify-center">
//                 <button
//                     onClick={handleDelete}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                 >
//                     Delete Account
//                 </button>
//             </div>
//         </>
//     );
// };

// export default EditProfilePage;
