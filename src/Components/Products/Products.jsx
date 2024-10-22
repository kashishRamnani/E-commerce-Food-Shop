import React from 'react';
import productImage1 from '/src/assets/23_Lemon_images/images/products/product-1.jpg';
import productImage2 from '/src/assets/23_Lemon_images/images/products/product-2.jpg'; 
import productImage3 from '/src/assets/23_Lemon_images/images/products/product-3.jpg';
import productImage4 from '/src/assets/23_Lemon_images/images/products/product-4.jpg';

const Products = () => {
  const productList = [
    { id: 1, name: 'Papaya', price: '$99.99', image: productImage1 },
    { id: 2, name: 'Orange', price: '$79.99', image: productImage2 },
    { id: 3, name: 'Apple', price: '$99.99', image: productImage3 },
    { id: 4, name: 'Chukandar', price: '$79.99', image: productImage4 },
    
  ];

  return (
    <div className='product'>
      <div className='container py-5'>
        <div className='row py-5'>
          <div className='col-lg-5 m-auto text-center'>
            <h1>What's Trending</h1>
            <h6 style={{ color: 'red' }}>Be Healthy Organic Food</h6>
          </div>
        </div>

        <div className='row'>
          {productList.map((product) => (
            <div key={product.id} className='col-lg-3 col-md-6 col-sm-12 text-center'>
              <div className='card border-0 bg-light mb-2'>
                <div className='card-body'>
                  <img src={product.image} className='img-fluid' alt={product.name} />
                </div>
              </div>
              <h6>{product.name}</h6>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className='col-lg-6 text-center m-auto'>
                 <button className='btn1'>Click For More</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
