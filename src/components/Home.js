"use client";
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { BsFillLightningFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import CategoryMenu from './CategoryMenu';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
    const [activeLink, setActiveLink] = useState("/kadın");
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseOver = () => {
        setIsCategoriesHovered(true);
    };

    const handleMouseOut = () => {
        setIsCategoriesHovered(false);
    };

    return (
        <div className="min-h-screen bg-light-gray overflow-hidden ">

            {/* Navbar Div */}
            <div className="lg:bg-light-gray md:bg-responsive-bg-gray border-gray-200 rounded-t-xl w-[99.7vw] ml-0.5 mr-0.5">
                <div className="bg-white pl-20 mt-1 mr-4 hidden md:hidden lg:block">
                    <ul className="flex space-x-8 text-xs justify-end mr-28">
                        <li>
                            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">İndirim Kuponlarım</Link>
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Trendyol'da Satış Yap</Link>
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Yardım & Destek</Link>
                        </li>
                    </ul>
                </div>


                <div className="flex justify-between items-center px-2 lg:bg-light-gray md:bg-responsive-bg-gray sm:bg-responsive-bg-gray border-none mx-auto max-w-screen-xl">
                    {/* Hamburger Menü ve Yazısı */}
                    <div className="flex lg:hidden flex-col items-center">
                        <li
                            className="flex flex-col items-center cursor-pointer relative"
                            onClick={handleMouseOver} onMouseLeave={handleMouseOut}>

                            <RxHamburgerMenu size={35} />
                            <Link href="#" className="text-xs md:text-[12px] sm:text-[10px] leading-none mt-0 font-bold">menü</Link>
                            {isCategoriesHovered && <CategoryMenu />}
                        </li>
                    </div>
                    <div className="flex items-center space-x-0 pl-2 mb-4 mt-2 font-semibold font-montserrat">
                        <Link href="#" className="xl:text-5xl lg:text-5xl text-light-black cursor-pointer font-medium font-montserrat md:text-2xl sm: text-2xl">
                            trendyol
                        </Link>
                    </div>
                    <div className="relative items-center w-full md:max-w-[610px] sm:max-w-[310px] hidden lg:flex">
                        <input
                            type="text"
                            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                            className="font-source-sans bg-mediumdark-gray text-medium-grey px-5 py-[0.625rem] w-full border-2 border-transparent rounded-md focus:outline-none focus:bg-light-gray focus:shadow-xl pr-10 text-sm duration-300 placeholder:text-gray-500"
                        />
                        <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
                    </div>
                    <div className="relative items-center w-full max-w-[610px] flex justify-end pr-1.5 lg:hidden">
                        <LuUserRound className="text-black text-2xl md:text-3xl sm:text-3xl lg:text-base mb-1" />
                    </div>
                    <div className="flex items-center space-x-6 font-bold font-source-sans-pro text-xs">

                        <Link href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <LuUserRound size={18} className="group-hover:text-orange duration-500 group-hover:fill-current hidden md:hidden sm:hidden lg:block text-black" />
                            <p className="group-hover:text-orange hidden md:hidden sm:hidden lg:block text-dark-black">Giriş Yap</p>
                        </Link>

                        <Link href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <GrFavorite
                                className="group-hover:text-orange group-hover:fill-orange duration-500 
                   text-2xl md:text-3xl lg:text-base text-black"
                            />
                            <p className="group-hover:text-orange hidden md:hidden lg:block text-dark-black">Favorilerim</p>
                        </Link>

                        <Link href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <HiOutlineShoppingCart
                                className="group-hover:text-orange group-hover:fill-current duration-500 
                   text-2xl md:text-3xl lg:text-base text-black"
                            />
                            <p className="group-hover:text-orange hidden md:hidden lg:block text-dark-black">Sepetim</p>
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden w-[98vw] mx-auto mt-3 relative">
                    <CgSearch size={23} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" />
                    <input
                        type="text"
                        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                        className="font-source-sans bg-white border-medium-grey text-medium-grey px-10 pb-2 py-2 w-full border-[1px] lg:border-transparent rounded-md lg:focus:border-orange focus:outline-none focus:bg-light-gray lg:focus:shadow-xl pr-10 text-sm duration-300 placeholder:text-gray-500"
                    />
                </div>
                <hr className='lg:hidden w-full border-t-2 border-gray-200 mt-2' />
            </div>

            {/* Ana Kategoriler */}
            <div className="bg-white mx-auto max-w-screen-xl text-dark-black">
                <ul className="flex md:flex sm:flex md:space-x-10 sm:space-x-10 md:py-2.7 sm:py-3 lg:py-0 space-x-10 py-2 lg:space-x-6 lg:text-sm font-semibold font-montserrat overflow-x-auto sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-visible lg:w-full lg:flex-nowrap">
                    <li className="hidden lg:flex items-center cursor-pointer space-x-1 pl-8 relative"
                        onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                        <RxHamburgerMenu size={23} />
                        <Link href="#" className="text-xs font-bold pr-12">TÜM KATEGORİLER</Link>
                        {isCategoriesHovered && (
                            <CategoryMenu />
                        )}
                    </li>

                    {/* Diğer Kategoriler */}
                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/kadın")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:pl-12 lg:font-bold lg:hover:text-orange
                        ${activeLink === "/kadın" ? "text-orange" : ""}`}
                        >
                            Kadın
                            {activeLink === "/kadın" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[3.5vw] lg:ml-9 h-[3.5px] w-[15vw] -ml-2 md:h-[2.2px] md:w-[6.5vw] md:-ml-2  bg-orange"></span>
                            )}
                        </Link>
                    </li>

                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Erkek")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Erkek" ? "text-orange" : ""}`}
                        >
                            Erkek
                            {activeLink === "/Erkek" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[3.5vw] lg:-ml-3 h-[3.5px] w-[15vw] -ml-2 md:h-[2.2px] md:w-[6.5vw] md:-ml-2 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap lg:hidden block">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Ev&Yaşam")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Ev&Yaşam" ? "text-orange" : ""}`}
                        >
                            Ev & Yaşam
                            {activeLink === "/Ev&Yaşam" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[3.5vw] lg:-ml-3 h-[3.5px] w-[24vw] -ml-2 md:h-[2.2px] md:w-[11.5vw] md:-ml-2 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap hidden sm:block lg:hidden">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Süpermarket")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Süpermarket" ? "text-orange" : ""}`}
                        >
                            Süpermarket
                            {activeLink === "/Süpermarket" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[3.5vw] lg:-ml-3 md:h-[2.2px] md:w-[12.5vw] md:-ml-1 bg-orange"></span>
                            )}
                        </Link>
                    </li>

                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Anne&Çocuk")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Anne&Çocuk" ? "text-orange" : ""}`}
                        >
                            Anne & Çocuk
                            {activeLink === "/Anne&Çocuk" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[7vw] lg:-ml-3 h-[3.5px] w-[29vw] -ml-2 md:h-[2.2px] md:w-[13.5vw] md:-ml-2 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap lg:block hidden">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Ev&Yaşam")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Ev&Yaşam" ? "text-orange" : ""}`}
                        >
                            Ev & Yaşam
                            {activeLink === "/Ev&Yaşam" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[6vw]lg: -ml-3  bg-orange"></span>
                            )}
                        </Link>
                    </li>

                    <li className="whitespace-nowrap lg:block hidden">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Süpermarket")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Süpermarket" ? "text-orange" : ""}`}
                        >
                            Süpermarket
                            {activeLink === "/Süpermarket" && (
                                <span className="absolute left-0 bottom-[-10px] h-[2px] w-[6.5vw] -ml-3 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Kozmetik")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Kozmetik" ? "text-orange" : ""}`}
                        >
                            Kozmetik
                            {activeLink === "/Kozmetik" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[5.5vw] lg:-ml-3 h-[3.5px] w-[22vw] -ml-2 md:h-[2.2px] md:w-[9.5vw] md:-ml-2 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Ayakkabı&Çanta")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Ayakkabı&Çanta" ? "text-orange" : ""}`}
                        >
                            Ayakkabı & Çanta
                            {activeLink === "/Ayakkabı&Çanta" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[8.2vw] lg:-ml-3 h-[3.5px] w-[35vw] -ml-2 md:h-[2.2px] md:w-[16.5vw] md:-ml-2 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap lg:hidden block">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Spor&Outdoor")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Spor&Outdoor" ? "text-orange" : ""}`}
                        >
                            Spor & Outdoor
                            {activeLink === "/Spor&Outdoor" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[6vw] lg:-ml-3 h-[3.5px] w-[33vw] -ml-2 md:h-[2.2px] md:w-[14.5vw] md:-ml-1.5 bg-orange"></span>
                            )}
                        </Link>
                    </li>

                    <li className="whitespace-nowrap">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Elektronik")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Elektronik" ? "text-orange" : ""}`}
                        >
                            Elektronik
                            {activeLink === "/Elektronik" && (
                                <span className="absolute left-0 bottom-[-10px] lg:h-[2px] lg:w-[5.5vw] lg:-ml-3 h-[3.5px] w-[22vw] -ml-2 md:h-[2.2px] md:w-[10.5vw] md:-ml-1.5 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="whitespace-nowrap lg:hidden block">
                        <Link
                            href="#"
                            onClick={() => setActiveLink("/Saat&Aksesuar")}
                            className={`relative cursor-pointer font-source-sans-pro font-thin text-[17px] pl-0 duration-150 sm:text-[17px] sm:pl-0 md:text-[17px] lg:text-sm lg:font-bold lg:hover:text-orange
                        ${activeLink === "/Saat&Aksesuar" ? "text-orange" : ""}`}
                        >
                            Saat & Aksesuar
                            {activeLink === "/Saat&Aksesuar" && (
                                <span className="absolute left-0 bottom-[-10px] h-[4px] w-[32vw] -ml-1.5 md:h-[2.2px] md:w-[15.5vw] md:-ml-1.5 bg-orange"></span>
                            )}
                        </Link>
                    </li>
                    <li className="flex items-center space-x-1 group whitespace-nowrap">
                        <img src="/icons/cokSatanlar.svg" alt="Flaş Ürünler" className="w-5 h-5 text-orange-500 group-hover:text-orange hidden lg:block" />
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro group-hover:text-orange duration-150 hidden lg:block">
                            Çok Satanlar
                        </Link>
                    </li>
                    <li className="flex items-center space-x-1 group whitespace-nowrap">
                        <img src="/icons/flash.svg" alt="Flaş Ürünler" className="w-5 h-5 text-orange-500 group-hover:text-orange hidden lg:block" />
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro 
            group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-pink-600 
            group-hover:bg-clip-text group-hover:text-transparent duration-150 hidden lg:block">
                            Flaş Ürünler
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="lg:border-b lg:border-gray-1000 border-gray-50 sm:border-responsive-border-gray md:border-responsive-border-gray  sm:border-b-2 border-b-2 md:border-b-2 lg:mt-2 mt-0 md:-mt-1 sm:mt-1  w-full mx-0 px-0"></div>

            <div
                className={`min-h-[calc(97.4vh-97.4px)] overflow-hidden ${isMenuOpen || isCategoriesHovered ? 'bg-medium-grey shadow-4xl' : 'bg-white'
                    }lg:bg-light-gray bg-gradient-to-b lg:bg-none from-responsive-bg-darkgray to-white md:bg-gradient-to-b md:from-responsive-bg-darkgray md:to-white`}
            ></div>
        </div>
    );
};
export default Home;
