import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import categoriesData from '../data/CategoriesEvMobilya.json';

const CategoriesEvMobilya = () => {
  const categoriesFromJson = categoriesData.categoriesEvMobilya;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-[83vh] w-[64vw] bg-white p-3 text-sm overflow-hidden">
      <div className="grid grid-cols-6 gap-4">

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Sofra & Mutfak</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[0]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Ev Gereçleri</span>
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

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Ev Tekstili</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[2]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Ev Dekorasyon</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[3]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Aydınlatma</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[4]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Mobilya</span>
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

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Hobi</span>
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
            <span>Spor & Outdoor</span>
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

        {/* Kitap ve Kırtasiye Kategorileri */}
        <div className="w-full whitespace-nowrap">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Kitap</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[8]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Kırtasiye</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[9]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Otomobil & Motosiklet</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[10]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            <span>Yapı Market</span>
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[11]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                <span className="block truncate max-w-[150px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CategoriesEvMobilya
