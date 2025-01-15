import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { MdClose } from "react-icons/md";


import CategoriesWoman from './CategoriesWoman';
import categoriesDataWoman from '../data/CategoriesWoman.json';

import CategoriesMan from './CategoriesMan';
import categoriesDataMan from '../data/CategoriesMan.json';

import CategoriesAnneCocuk from './CategoriesAnneCocuk';
import categoriesDataAnneCocuk from '../data/CategoriesAnneCocuk.json';

import CategoriesKozmetik from './CategoriesKozmetik';
import categoriesDataKozmetik from '../data/CategoriesKozmetik.json';

import CategoriesEvMobilya from './CategoriesEvMobilya';
import categoriesDataEvMobilya from '../data/CategoriesEvMobilya.json';

import CategoriesAyakkabiCanta from './CategoriesAyakkabiCanta';
import categoriesDataAyakkabiCanta from '../data/CategoriesAyakkabiCanta.json';

import CategoriesSupermarket from './CategoriesSupermarket';
import categoriesDataSupermarket from '../data/CategoriesSupermarket.json';

import CategoriesElektronik from './CategoriesElektronik';
import categoriesDataElektronik from '../data/CategoriesElektronik.json';

import CategoriesSporOutdoor from './CategoriesSporOutdoor';
import categoriesDataSporOutdoor from '../data/CategoriesSporOutdoor.json';


const categories = [
    { name: "Kadın", icon: "/icons/kadin.svg" },
    { name: "Erkek", icon: "/icons/Erkek.svg" },
    { name: "Anne & Çocuk", icon: "/icons/Anne_Cocuk.svg" },
    { name: "Ev & Yaşam", icon: "/icons/Ev_Mobilya.svg" },
    { name: "Süpermarket", icon: "/icons/Supermarket.svg" },
    { name: "Kozmetik", icon: "/icons/Kozmetik.svg" },
    { name: "Ayakkabı & Çanta", icon: "/icons/Ayakkabi_Canta.svg" },
    { name: "Elektronik", icon: "/icons/Elektronik.svg" },
    { name: "Spor & Outdoor", icon: "/icons/Spor_Outdoor.svg" },
];

const CategoryMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const getCategoryComponent = () => {
        switch (activeIndex) {
            case 0:
                return <CategoriesWoman categories={categoriesDataWoman.categoriesWoman} />;
            case 1:
                return <CategoriesMan categories={categoriesDataMan.categoriesMan} />;
            case 2:
                return <CategoriesAnneCocuk categories={categoriesDataAnneCocuk.categoriesAnneCocuk} />;
            case 3:
                return <CategoriesEvMobilya categories={categoriesDataEvMobilya.categoriesEvMobilya} />;
            case 4:
                return <CategoriesSupermarket categories={categoriesDataSupermarket.categoriesSupermarket} />;
            case 5:
                return <CategoriesKozmetik categories={categoriesDataKozmetik.categoriesKozmetik} />;
            case 6:
                return <CategoriesAyakkabiCanta categories={categoriesDataAyakkabiCanta.categoriesAyakkabiCanta} />;
            case 7:
                return <CategoriesElektronik categories={categoriesDataElektronik.categoriesElektronik} />;
            case 8:
                return <CategoriesSporOutdoor categories={categoriesDataSporOutdoor.categoriesSporOutdoor} />;
            default:
                return null;
        }
    };

    return (
        <div className="absolute top-6 left-9 font-bold font-source-sans-pro bg-Lgray mt-2 border-t border-mediumdark-gray rounded-b-md flex z-10">
            {/* Kategori Listesi */}
            <div className="h-[84vh] w-[15vw] bg-Lgray">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`flex items-center px-2 py-3 cursor-pointer group transition-colors duration-300 
                        ${activeIndex === index ? 'bg-white text-orange' : 'bg-Lgray group-hover:bg-white'}`}
                    >
                        <div className="flex items-center space-x-3 w-[190px] group">
                            <Image
                                src={category.icon}
                                alt={category.name}
                                width={24}
                                height={24}
                                className="duration-300"
                            />
                            <span className={`text-sm font-bold ${activeIndex === index ? 'text-orange' : 'text-gray-800'} group-hover:text-orange`}>
                                {category.name}
                            </span>
                        </div>
                        <FaChevronRight className={`text-gray-800 ${activeIndex === index ? 'text-orange' : ''} group-hover:text-orange`} />
                    </div>
                ))}
            </div>

            {/* getCategoryComponent sadece lg ve daha büyük ekranlarda olacak */}
            <div className="hidden lg:block">
                {getCategoryComponent()}
            </div>

            {/* Tablet ve telefon görünümünde sadece kategori ismi ve ikon */}
            <div className="lg:hidden fixed justify-between top-0 left-0 w-[80vw] h-full bg-light-gray">
                <div className="flex items-center px-4 py-3 text-2xl font-bold  justify-between w-full bg-responsive-bg-Lightgray">
                    trendyol
                    <MdClose size={30} className="ml-auto text-gray-600 " />
                </div>
                <hr className="w-full border-t-0.5 border-medium-gray" />
                <div className="hidden md:block px-4 py-3 text-xl font-semibold text-gray-800">
                    Flaş Ürünler
                </div>
                <hr className="w-full border-t-0.5 border-medium-gray mb-4" />
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`flex items-center px-4 py-2 cursor-pointer group transition-colors duration-300 
                        ${activeIndex === index ? 'bg-white ' : 'bg-light-gray '}`}
                    >
                         <div className="flex items-center space-x-4 w-full">
                <Image
                    src={category.icon}
                    alt={category.name}
                    width={32}  
                    height={32} 
                    className="duration-300"
                />
                            <span className={`text-xl font-thin ${activeIndex === index ? 'text-black' : 'text-gray-800'} `}>
                                {category.name}
                                <hr className="w-[65vw] border-t-2 border-medium-gray mt-2" />
                            </span>
                        </div>
                        <FaChevronRight className={`text-medium-grey ${activeIndex === index ? 'text-medium-grey' : 'text-medium-grey'}`} />

                    </div>
                ))}
            </div>
        </div>

    );
}




export default CategoryMenu;
