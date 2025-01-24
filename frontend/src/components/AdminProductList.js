// import React, { useState, useEffect } from 'react';
// import AdminProductCard from './AdminProductCard';
// import SummaryApi from '../common';


// const AdminProductList = () => {
//     const [products, setProducts] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(SummaryApi.allProduct.url);
//             const data = await response.json();
//             setProducts(data.products);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData(); // Initial fetch
//     }, []);

//     return (
//         <div>
//             {products.map((product) => (
//                 <AdminProductCard
//                     key={product._id}
//                     data={product}
//                     fetchData={fetchData} // Pass the fetchData function
//                 />
//             ))}
//         </div>
//     );
// };


// export default AdminProductList;
