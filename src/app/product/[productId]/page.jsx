import React from 'react';

const DynamicProductPage = async({params,searchParams}) => {
    const {productId} = await params;
    return (
        <div>
            {productId}  Single Product Page 
        </div>
    );
};

export default DynamicProductPage;