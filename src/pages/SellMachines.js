// src/pages/SellMachines.js

import React from 'react';
// استيراد مصفوفة المنتجات من ملف البيانات
import { products } from '../data/products';

// مكون صفحة بيع الأجهزة
const SellMachines = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        {/* عنوان الصفحة */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Machines for Sale 💰
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Browse our selection of high-quality arcade machines available for purchase. Bring the fun home!
        </p>

        {/* شبكة المنتجات (Product Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* المرور على كل منتج وعرضه كبطاقة */}
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-[1.02] transition duration-300 relative"
            >
              
              {/* شارة المنتج الجديد */}
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  NEW
                </span>
              )}

              {/* صورة المنتج */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-56 object-cover"
              />
              
              <div className="p-6">
                {/* اسم المنتج */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                
                {/* السعر */}
                <p className="text-3xl font-extrabold text-red-600 mb-4">
                  ${product.price.toLocaleString()}
                </p>
                
                {/* الوصف */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* تفاصيل إضافية */}
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Category: <span className="font-semibold">{product.category}</span></span>
                  <span>Power: <span className="font-semibold">{product.power}</span></span>
                </div>

                {/* زر الشراء */}
                <button 
                  className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-md uppercase"
                  onClick={() => alert(`Buying ${product.name} for $${product.price.toLocaleString()}`)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellMachines;
