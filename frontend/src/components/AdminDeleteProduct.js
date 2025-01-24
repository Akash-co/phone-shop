// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const AdminDeleteProduct = ({ productId, productName, onClose, removeProduct }) => {
//     const [isDeleting, setIsDeleting] = useState(false);

//     const handleDelete = async () => {
//         setIsDeleting(true);

//         try {
//             const response = await fetch(`http://localhost:8080/api/delete-product/${productId}`, {
//                 method: "DELETE",
//                 credentials: 'include', // Include cookies for session tracking
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to delete the product");
//             }

//             const responseData = await response.json();

//             if (responseData.success) {
//                 toast.success('Product deleted successfully');
//                 removeProduct(productId); // Immediately update the UI
//                 onClose(); // Close the modal
//             } else {
//                 if (responseData.message === 'Please Login...!') {
//                     toast.error('Session expired, please log in again');
//                     // Redirect to login page
//                     window.location.href = '/login'; // Adjust the redirect path if needed
//                 } else {
//                     toast.error(responseData.message || 'An error occurred while deleting the product');
//                 }
//             }
//         } catch (error) {
//             toast.error(error.message || 'An error occurred while deleting the product');
//         } finally {
//             setIsDeleting(false);
//         }
//     };

//     return (
//         <div className="fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow w-full max-w-sm">
//                 <h2 className="text-lg font-bold mb-4">Delete Product</h2>
//                 <p>
//                     Are you sure you want to delete the product <b>{productName}</b>?
//                 </p>
//                 <div className="flex gap-2 mt-4">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                         disabled={isDeleting}
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleDelete}
//                         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                         disabled={isDeleting}
//                     >
//                         {isDeleting ? 'Deleting...' : 'Delete'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDeleteProduct;
