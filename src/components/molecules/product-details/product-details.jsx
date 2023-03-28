import React from 'react'
import { useParams } from 'react-router-dom';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { useQuery } from '@tanstack/react-query';
import fetchProduct from '../../../assets/js/fetchProduct';


const ProductDetails = () => {
    const { productId } = useParams();
    /*const results = useQuery(["details", productId], fetchProduct);   

    if (results.isLoading) {
        return <div>Loading...</div>
    }*/

    //const product = results.data.products;
    //console.log(product)

  return (
    <div>
        <h1>{productId}</h1>
    </div>
  )
};



export default ProductDetails;