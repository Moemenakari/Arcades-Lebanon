
import React from 'react';

import { products } from '../data/products'; 


const SellMachines = () => {
    
 
  return ( 
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Buy Arcade Machines 🕹️
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"> 
          Browse our selection of high-quality arcade machines available for purchase.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => ( 
            //maapp hata naaml list
            <div 
              key={product.id}  
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition duration-300 relative" >
           
              {product.isNew && ( // shrit aal button ino new product

                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">

                </span>
              )}
              {/*  call mn file products  */}
              <img 
                src={product.image} 
                alt={product.name}   
                className="w-full h-56 object-cover"/>
              
              <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-3xl font-extrabold text-red-600 mb-4">
                  $ {product.price.toLocaleString()}      </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">  {product.description}                 </p>

              <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>Category:
                 <span className="font-semibold">{product.category}</span> 
              </span>
             <span>Power: <span className="font-semibold">{product.power}</span></span>
            </div>
            
         </div>
        </div>
  ))}
        </div>
       </div>
    </div>
 ); 
};
export default SellMachines; 