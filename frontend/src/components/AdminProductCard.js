import React, { useState } from 'react';
import { MdModeEditOutline, MdDeleteOutline } from 'react-icons/md';
import AdminEditProduct from './AdminEditProduct';
import displayLKRCurrencyy from '../helpers/displayCurrency';
import { toast } from 'react-toastify'; // For notifications

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/api/delete-product/${data._id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        fetchdata(); // Refresh the list of products after deletion
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error("Error deleting the product");
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-64 flex flex-col items-center">
      <div className="w-full h-40 flex justify-center items-center">
        <img src={data?.productImage[0]} className="mx-auto object-cover h-full rounded" alt={data?.productName} />
      </div>
      
      <div className="mt-3 w-full text-left">
        <h1 className="text-ellipsis overflow-hidden whitespace-nowrap">{data.productName}</h1>
        <p className="font-bold">{displayLKRCurrencyy(data.sellingPrice)}</p>
      </div>

      {/* Align the buttons to the right */}
      <div className="flex justify-end w-full mt-3 space-x-2">
        <div 
          className="w-fit p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer" 
          onClick={() => setEditProduct(true)}
        >
          <MdModeEditOutline />
        </div>

        {/* Delete Product Button */}
        <div 
          className="w-fit p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer" 
          onClick={handleDeleteProduct}
        >
          <MdDeleteOutline />
        </div>
      </div>

      {editProduct && <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />}
    </div>
  );
};

export default AdminProductCard;
