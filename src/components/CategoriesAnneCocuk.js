import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import categoriesData from '../data/CategoriesAnneCocuk.json'; 

const CategoriesAnneCocuk = () => {
  const categoriesFromJson = categoriesData.categoriesAnneCocuk; 
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="h-[83vh] w-[64vw] bg-white p-3 text-sm overflow-hidden">
      <div className="grid grid-cols-6 gap-4"> {/* 6 sütunlu grid düzeni */}

        {/* Bebek Kategorisi */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Bebek</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
          {categoriesFromJson[activeIndex]?.subCategories[0]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kız Çocuk Kategorisi */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Kız Çocuk</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[1]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Erkek Çocuk Kategorisi */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Erkek Çocuk</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[2]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bebek Bakım ve Oyuncak Kategorileri */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Bebek Bakım</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[3]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Oyuncak</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[4]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Beslenme & Emzirme Kategorisi */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Beslenme & Emzirme</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[5]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Taşıma & Güvenlik ve Bebek Odası Kategorileri */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Taşıma & Güvenlik</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[6]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Bebek Odası</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[7]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoriesAnneCocuk;
