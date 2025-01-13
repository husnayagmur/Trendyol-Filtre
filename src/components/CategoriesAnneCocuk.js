import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import categoriesData from '../data/CategoriesAnneCocuk.json';
import Link from 'next/link';
const CategoriesAnneCocuk = () => {
  const categoriesFromJson = categoriesData.categoriesAnneCocuk;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-[83vh] w-[64vw] bg-white p-3 text-sm overflow-hidden">
      <div className="grid grid-cols-6 gap-4">
        {/* Sütunlar */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            {/* group link'i kontrol et, varsa linkle sar */}
            {categoriesFromJson[activeIndex]?.subCategories[0]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[0]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[0]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[0]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[0]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>



        {/* Diğer sütunlar */}
        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[1]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[1]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[1]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[1]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[1]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
            {/* group link'i kontrol et, varsa linkle sar */}
            {categoriesFromJson[activeIndex]?.subCategories[2]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[2]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[2]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[2]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[2]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[3]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[3]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[3]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[3]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[3]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[4]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[4]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[4]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[4]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[4]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[5]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[5]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[5]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[5]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[5]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[6]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[6]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[6]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[6]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[6]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
          <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
           {/* group link'i kontrol et, varsa linkle sar */}
           {categoriesFromJson[activeIndex]?.subCategories[7]?.group && categoriesFromJson[activeIndex]?.subCategories[0]?.link ? (
              <Link href={categoriesFromJson[activeIndex]?.subCategories[7]?.link} className="flex items-center">
                <span>{categoriesFromJson[activeIndex]?.subCategories[7]?.group}</span>
              </Link>
            ) : (
              <span>{categoriesFromJson[activeIndex]?.subCategories[7]?.group}</span>
            )}
            <FaAngleRight className="ml-2 text-orange" />
          </h4>
          <div className="grid grid-cols-1 font-source-sans font-thin">
            {categoriesFromJson[activeIndex]?.subCategories[7]?.items.map((item, subIdx) => (
              <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                {item.link ? (
                  <Link href={item.link} className="block truncate max-w-[150px]">{item.name}</Link>
                ) : (
                  <span className="block truncate max-w-[150px]">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoriesAnneCocuk
