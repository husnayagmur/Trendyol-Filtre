import React, { useState } from 'react'
import categoriesData from '../data/CategoriesWoman.json';
import { FaAngleRight } from "react-icons/fa6";
const CategoriesWoman = () => {
    const categoriesFromJson = categoriesData.categoriesWoman;
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="h-[83vh] w-[64vw] bg-white p-3 text-sm overflow-hidden">
            <div className="grid grid-cols-6 gap-4">

                <div className="w-full ">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Giyim</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[0]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Ayakkabı & Çanta</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[1]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Aksesuar</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[2]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Çanta</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[3]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>İç Giyim</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[4]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Lüks</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[5]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Kozmetik</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[6]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h4 className="text-sm flex items-center text-orange mb-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                        <span>Spor & Outdoor</span>
                        <FaAngleRight className="ml-2 text-orange" />
                    </h4>
                    <div className="grid grid-cols-1 font-source-sans font-thin">
                        {categoriesFromJson[activeIndex]?.subCategories[7]?.items.map((item, subIdx) => (
                            <div key={subIdx} className="flex justify-between items-center text-gray-700 hover:text-orange cursor-pointer py-1 whitespace-nowrap hover:underline hover:decoration-orange-500 hover:underline-offset">
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CategoriesWoman
