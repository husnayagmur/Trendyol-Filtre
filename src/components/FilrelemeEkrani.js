"use client";
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { BsFillLightningFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import CategoryMenu from './CategoryMenu';
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineStorefront } from "react-icons/md";
import Urunler from './Urunler';
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import Image from 'next/image';
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { GoChevronLeft } from "react-icons/go";
import { LuFilter } from "react-icons/lu";
const FilrelemeEkrani = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
    const [openCategories, setOpenCategories] = useState({});
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Önerilen");
    const [isFixed, setIsFixed] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const options = [
        "Önerilen",
        "En düşük fiyat",
        "En yüksek fiyat",
        "En çok satan",
        "En favoriler",
        "En yeniler",
        "En çok değerlendirilen",
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const categories = [
        {
            id: 1,
            title: "İlgili Kategoriler",
            content: ["Bebek Takımı"]
        },
        {
            id: 2,
            title: 'Marka',
            content: ['LC Waikiki', 'Civil,', 'Altınbaş', 'Defacto', 'Skygo', 'ADABEBEK', 'BabyBird', 'Koton', 'Mavi', 'Pierre Cardin', 'GAP', 'Miniworld', 'Babydonat'],
        },
        {
            id: 3,
            title: 'Beden',
            content: ['XS', 'Yeni Doğan', '0-3 Ay', '3-6 Ay', '6-9 Ay', '9-12 Ay', '12-15 Ay', '15-18 Ay', '18-24 Ay', '2-3 Yaş', '4-5 Yaş', '6-7 Yaş', '7-8 Yaş', '9-10 Yaş', '11-12 Yaş', 'Standart']
        },
        {
            id: 4,
            title: "Avantajlı Ürünler",
            content: [
                "Süper Avantajlı Ürün", "Çok Avantajlı Ürün", "Avantajlı Ürün"
            ]
        },
        {
            id: 5,
            title: "Cinsiyet",
            content: ["Kadın", "Erkek", "Çocuk"]
        },
        {
            id: 6,
            title: "Fiyat",
            content: ["0TL - 200TL", "200 - 350", "350 - 500", "500 - 800", "800 - 1500", "1500 - 60000"]
        },
        { id: 7, title: "Renk", content: ["Pembe", "Ekru", "Siyah", "Sarı", "Yeşil", "Mavi", "Turuncu"] },
        { id: 8, title: "Çocuk Cinsiyeti", content: ["Kız Çocuk", "Erkek Çocuk", "Kız Bebek", "Kız Bebek"] },
        { id: 9, title: "Materyal", content: ['Akrilik', 'Kadife', 'Keten', 'Likra', 'Pamuk Polyester', 'Pamuklu', 'Polar', 'Polyester', 'Viskon', 'Yünlü',] },
        { id: 10, title: "Paket İçeriği", content: ["2'li", "3'lü", "4'lü", "5'li", "6'lı", "Tekli",] },
        { id: 11, title: "Kol Boyu", content: ["Askılı", "Kısa", "Kolsuz", "Tek Kol", "Uzun",] },
        { id: 12, title: "Kumaş Tipi", content: ["Belirtilmemiş", "Dantel", "Denim", "Dokuma", "Örme", "Triko",] },
        { id: 13, title: "Ortam", content: ["Business", "Casual", "Casual/Günlük", "Daily", "Gündüz/Gece", "Günlük", "Homewear", "Lounge/Home", "Party", "Prom", "Şık/Gece", "Sportswear", "Stylish/Night", "Young",] },
        { id: 14, title: "Kol Tipi", content: ["Askılı", "Ay Kol", "Balon Kol", "Büzgülü/Fırfırlı Kol", "Düşük Kol", "Kısa Kol", "Kolsuz", "Reglan Kol", "Standart Kol", "T Kol", "Takma Kol", "Düşük Kol", "Tek Kol", "Uzun Kol",] },
        { id: 15, title: "Desen", content: ["Ajurlu", "Animal", "Armitürlü", "Baskılı", "Çiçekli", "Çini", "Çizgili", "Ekose/Kareli", "Geometrik", "Kabartma", "Lisanslı", "Puantiyeli", "Renk Bloklu", "Renkli", "Saç Örgü", "Simli", "Slogan", "Soyut", "Tropikal", "Yılbaşı",] },
        { id: 16, title: "Fiyat Geçmişi", content: ["Son 7 Gün", "Son 14 Gün", "Son 30 Gün"] },
        { id: 17, title: "Kalıp", content: ["3/4 Boy", "7/8 Boy", "A-Line", "Anvelop", "Asimetrik", "Balon", "Beli Lastikli", "Belirtilmemiş", "Bol", "Büyük Beden", "Çan", "Ceket", "Confort", "Crop", "Dad", "Dar", "Denim", "Desteksiz",] },
        { id: 18, title: "Paça Tipi", content: ["Açık Paça", "Bol Paça", "Boru Paça", "Çıt Çıt Kapama Paça", "Dar Paça", "Double Paça", "Düz Paça", "Geniş Paça", "İspanyol Paça", "Jogger", "Kısa Paça", "Lastikli Paça", "Lastiksiz Paça", "Manşetli Paça", "Paçasız", "Regular",] },
        { id: 19, title: "Boy", content: ["15 ML", "150", "162", "68", "7/8 Boy", "Belirtilmemiş", "Diz Boyu", "Kapri", "Kısa", "Midi", "Mini"] },
        { id: 20, title: "Sürdürülebilirlik Detayı", content: ["Evet", "Hayır", "Organik", "Recycle", "Recycle+Organik"] },
        { id: 21, title: "Satıcı Tipi", content: ["Onaylanmış Satıcı", "Başarılı Satıcı",] },
        { id: 22, title: "Yaka Tipi", content: ["Bebe Yaka", "Bisiklet Yaka", "Bomber Yaka", "Ceket Yaka", "Dik Yaka", "Gömlek Yaka", "Kapüşonlu", "Kare Yaka", "Kruvaze", "Polo Yaka", "V Yaka"] },
        { id: 23, title: "Koleksiyon", content: [] },
        { id: 24, title: "Fenomenlerin Seçtikleri", content: [] },
        { id: 25, title: "Kampanyalı Ürünler", content: [] },
        { id: 26, title: "Hediye Paketi", content: [] },
        { id: 27, title: "Birlikte Al Kazan", content: [] },
        { id: 28, title: "Ürün Puanı", content: [] },
        { id: 29, title: "Fotoğraflı Yorumlar", content: [] },
        { id: 30, title: "Videolu Ürünler", content: [] },
        { id: 31, title: "Kurumsal Faturaya Uygun", content: [] },
        { id: 32, title: "Kuponlu Ürünler", content: [] },
        { id: 33, title: "Çok Al Az Öde", content: [] }
    ];

    const toggleCategory = (id) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleCheckboxChange = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((selected) => selected !== item)
                : [...prevSelected, item]
        );
    };
    const handleMouseOver = () => {
        setIsCategoriesHovered(true);
    };

    const handleMouseOut = () => {
        setIsCategoriesHovered(false);
    };
    const [showNavbar, setShowNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0); 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setShowNavbar(false);
            }

            else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]); 
    return (
        <div className="lg:min-h-screen bg-light-gray overflow-hidden  ">

            {/* Navbar Div */}
            <div className="bg-light-gray border-gray-200 rounded-t-xl w-[99.7vw] ml-0.5 mr-0.5">
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

                {/* Üst Menü */}
                <div className="flex justify-between items-center px-2 bg-light-gray border-none mx-auto max-w-screen-xl">
                    <div className="flex lg:hidden flex-col items-center">
                        <li
                            className="flex flex-col items-center cursor-pointer relative"
                            onMouseEnter={handleMouseOver}
                            onMouseLeave={handleMouseOut}
                        >
                            <RxHamburgerMenu size={30} />
                            <Link href="#" className="text-xs md:text-[12px] leading-none mt-0 font-bold">menü</Link>
                            {isCategoriesHovered && <CategoryMenu />}
                        </li>
                    </div>

                    <div className="flex items-center space-x-0 pl-2 mb-4 mt-2 font-semibold font-montserrat">
                        <Link href="#" className="xl:text-5xl lg:text-5xl text-light-black cursor-pointer font-medium font-montserrat md:text-2xl sm: text-2xl">
                            trendyol
                        </Link>
                    </div>

                    {/* Arama Çubuğu */}
                    <div className="relative flex items-center w-full max-w-[610px] hidden lg:flex">
                        <input
                            type="text"
                            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                            className=" font-source-sans bg-mediumdark-gray text-medium-grey px-5 py-[0.625rem] w-full border-2 border-transparent rounded-md focus:border-orange focus:outline-none focus:bg-light-gray focus:shadow-xl pr-10 text-sm duration-300 placeholder:text-gray-500"
                        />
                        <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
                    </div>
                    <div className="relative items-center w-full max-w-[610px] flex justify-end pr-2 lg:hidden">
                        <CgSearch size={27} className="text-black" />
                    </div>

                    <div className="flex items-center space-x-6 font-bold font-source-sans-pro text-dark-black text-xs">

                        <Link href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <LuUserRound size={18} className="group-hover:text-orange duration-500 group-hover:fill-current hidden md:hidden lg:block" />
                            <p className="group-hover:text-orange hidden md:hidden lg:block">Giriş Yap</p>
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
            </div>

            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: showNavbar ? 0 : "-100%" }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 right-0 bg-light-gray z-50 hidden lg:block"
            >
                <div className="flex justify-between items-center p-2 bg-light-gray border-none mx-auto max-w-screen-xl mt-5">
                    <div className="flex items-center space-x-4 pl-6 font-semibold font-montserrat">
                        <a href="#" className="text-5xl text-light-black cursor-pointer font-medium font-montserrat">
                            trendyol
                        </a>
                    </div>

                    {/* Arama Çubuğu */}
                    <div className="relative flex items-center w-full max-w-[610px]">
                        <input
                            type="text"
                            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                            className="font-source-sans bg-mediumdark-gray text-medium-grey px-5 py-[0.625rem] w-full border-2 border-transparent rounded-md focus:border-orange focus:outline-none focus:bg-light-gray focus:shadow-xl pr-10 text-sm duration-300 placeholder:text-gray-500"
                        />
                    </div>

                    <div className="flex items-center space-x-6 font-bold font-source-sans-pro text-dark-black text-xs">
                        <a href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <LuUserRound size={18} className="group-hover:text-orange duration-500 group-hover:fill-current" />
                            <p className="group-hover:text-orange">Giriş Yap</p>
                        </a>
                        <a href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <GrFavorite size={18} className="group-hover:text-orange group-hover:fill-orange duration-500" />
                            <p className="group-hover:text-orange">Favorilerim</p>
                        </a>
                        <a href="#" className="flex items-center space-x-1 group cursor-pointer">
                            <HiOutlineShoppingCart size={20} className="group-hover:text-orange group-hover:fill-current duration-500" />
                            <p className="group-hover:text-orange">Sepetim</p>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Ana Kategoriler */}
            <div className="bg-white mx-auto max-w-screen-xl text-dark-black hidden md:hidden lg:block">
                <ul className="flex space-x-6 text-sm font-semibold font-montserrat">
                    <li
                        className="flex items-center cursor-pointer space-x-1 pl-10 relative "
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                    >
                        <RxHamburgerMenu size={23} />
                        <Link href="#" className="text-xs font-bold pr-12">TÜM KATEGORİLER</Link>
                        {isCategoriesHovered && (
                            <CategoryMenu className='fixed' />
                        )}
                    </li>

                    {/* Diğer Kategoriler */}
                    <li>
                        <Link href="/kadın" className="cursor-pointer font-bold font-source-sans-pro pl-12 hover:text-orange duration-150">Kadın</Link>
                    </li>
                    <li>
                        <Link href="/erkek" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Erkek</Link>
                    </li>
                    <li>
                        <Link href="/anne & cocuk" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Anne & Çocuk</Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Ev & Yaşam</Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Süpermarket</Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Kozmetik</Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Ayakkabı & Çanta</Link>
                    </li>
                    <li>
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Elektronik</Link>
                    </li>
                    <li className="flex items-center space-x-1 group">
                        <img
                            src="/icons/cokSatanlar.svg"
                            alt="Flaş Ürünler"
                            className="w-5 h-5 text-orange-500 group-hover:text-orange"
                        />
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro group-hover:text-orange duration-150">
                            Çok Satanlar
                        </Link>
                    </li>

                    <li className="flex items-center space-x-1 group">
                        <img
                            src="/icons/flash.svg"
                            alt="Flaş Ürünler"
                            className="w-5 h-5 text-orange-500 group-hover:text-orange"
                        />
                        <Link href="#" className="cursor-pointer font-bold font-source-sans-pro 
            group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-pink-600 
            group-hover:bg-clip-text group-hover:text-transparent duration-150">
                            Flaş Ürünler
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="border-b border-gray-1000 mt-2 w-full mx-0 px-0"></div>

            <div
                className={`flex items-center px-4 py-2 w-full space-x-2 text-sm mt-1 font-source-sans text-dark-grey ${isMenuOpen || isCategoriesHovered ? 'bg-medium-grey shadow-4xl' : 'bg-white'
                    }`}
            >
                <p className={`cursor-pointer hover:underline hover:underline-offset-1 ${isMenuOpen || isCategoriesHovered ? 'bg-medium-grey shadow-4xl' : 'bg-white'} lg:ml-36 ml:0 lg:text-dark-grey text-medium-grey lg:font-medium`}>Trendyol</p>
                <FaChevronRight size={10} className="lg:text-orange  text-medium-grey" />
                <p className="cursor-pointer hover:underline hover:underline-offset-1 lg:font-medium lg:text-dark-black  text-medium-grey">Giyim</p>
                <FaChevronRight size={10} className="lg:text-orange text-medium-grey" />
                <p className="cursor-pointer hover:underline hover:underline-offset-1 lg:font-medium lg:text-dark-black  text-medium-grey">Bebek Giyim</p>
                <FaChevronRight size={10} className="lg:text-orange text-medium-grey " />
                <p className=" cursor-pointer hover:underline hover:underline-offset-1 lg:font-medium lg:text-dark-black text-medium-grey">Bebek Takımı</p>
            </div>

            <div className={`flex ${isMenuOpen || isCategoriesHovered ? 'bg-medium-grey shadow-4xl' : 'bg-white'}`}>
                <div
                    className={`${isFixed
                        ? "fixed top-20 left-40 bg-white"
                        : "absolute top-40 left-40"
                        } w-[13rem] max-h-[95vh] overflow-y-auto`}
                >
                    <ul className="space-y-0 text-dark-grey font-bold font-source-sans-pro text-sm hidden lg:block">
                        {categories.map((category, idx) => (
                            <li key={category.id} className="transition-colors duration-200">
                                {([33, 32, 31, 30, 29, 27, 26, 25, 24].includes(category.id)) ? (
                                    <div className="flex items-center space-x-1 py-3 px-0 overflow-y-auto">
                                        <input
                                            type="checkbox"
                                            id={`category-${category.id}`}
                                            className="w-4 h-4 text-orange-500 border-gray-50 rounded focus:ring-orange "
                                            checked={selectedItems.includes(category.title)}
                                            onChange={() => handleCheckboxChange(category.title)}
                                        />
                                        <label
                                            htmlFor={`category-${category.id}`}
                                            className="text-sm text-dark-grey hover:text-orange cursor-pointer font-bold flex items-center"
                                        >
                                            {category.title}
                                            {category.id === 24 && (
                                                <Image
                                                    src="/images/kamera.jpg"
                                                    alt="Kamera ikonu"
                                                    width={17}
                                                    height={17}
                                                    className="ml-2" 
                                                />
                                            )}
                                        </label>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className={`flex items-center justify-between py-3 px-6.5 bg-white cursor-pointer hover:bg-light-medium-grey`}
                                            onClick={() => toggleCategory(category.id)}
                                        >
                                            <span>{category.title}</span>
                                            {category.id === 21 && (
                                                <div
                                                    className="ml-2 relative" 
                                                    onMouseEnter={() => setTooltipVisible(true)}
                                                    onMouseLeave={() => setTooltipVisible(false)}
                                                >
                                                    <span className="underline text-medium-grey text-[12px] cursor-pointer hover:text-orange">
                                                        Satıcı Tipi Nedir?
                                                    </span>
                                                    {tooltipVisible && (
                                                        <div className="absolute left-0 bottom-full mb-2 bg-white text-black rounded-lg p-3 shadow-lg w-72 z-20 overflow-visible"> 
                                                            <div className="mb-3">
                                                                <div className="flex items-center text-blue-500 font-bold text-sm">
                                                                    <MdCheckCircle size={20} className="mr-2" />
                                                                    Onaylanmış Satıcı 
                                                                </div>
                                                                <p className="text-xs text-gray-700 mb-5">
                                                                    Türkiye’de veya uluslararası olarak yüksek bilinirliğe sahip markaların resmi satıcılarına "Onaylanmış Satıcı" rozeti verilir.
                                                                </p>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="flex items-center text-orange font-bold text-sm">
                                                                    <MdStars size={20} className="mr-2" /> 
                                                                    Başarılı Satıcı 
                                                                </div>
                                                                <p className="text-xs text-gray-700 mb-5">
                                                                    Trendyol’daki son 6 ay performansıyla yüksek müşteri memnuniyeti sağlayan, kaliteli ve güvenilir hizmet veren satıcılara "Başarılı Satıcı" rozeti verilir.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center text-red-500 font-bold text-sm">
                                                                    <MdCheckCircle size={20} className="mr-2" /> 
                                                                    Yetkili Satıcı
                                                                </div>
                                                                <p className="text-xs text-gray-700 mb-5">
                                                                    Onaylanmış markaların resmi satıcılarının satışa sunduğu, ilgili markanın ürünlerine "Yetkili Satıcı" rozeti verilir.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            <span>
                                                {openCategories[category.id] ? (
                                                    <FiChevronUp size={20} className="text-medium-grey hover:text-orange" />
                                                ) : (
                                                    <FiChevronDown size={20} className="text-medium-grey hover:text-orange" />
                                                )}
                                            </span>
                                        </div>

                                        {openCategories[category.id] && (
                                            <ul
                                                className="pl-6 space-y-0 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#c5c5c5] scrollbar-track-white scrollbar-rounded-xl"
                                                style={{
                                                    scrollbarWidth: 'thin',
                                                    scrollbarColor: '#8b8b8b #fefefe',
                                                }}
                                            >
                                                {Array.isArray(category.content) &&
                                                    category.content.map((item, idx) => (
                                                        <li key={idx} className="flex items-center space-x-1">
                                                            {category.id !== 1 && (
                                                                <input
                                                                    type="checkbox"
                                                                    id={`content-${category.id}-${idx}`}
                                                                    className="w-4 h-4 text-orange-500 border-gray-50 rounded focus:ring-orange"
                                                                    checked={selectedItems.includes(item)}
                                                                    onChange={() => handleCheckboxChange(item)}
                                                                />
                                                            )}
                                                            <label
                                                                htmlFor={`content-${category.id}-${idx}`}
                                                                className={`text-sm font-thin cursor-pointer ${category.id === 1 ? 'text-orange font-bold mb-2' : 'text-gray-700'}`}
                                                            >
                                                                {item}
                                                            </label>
                                                        </li>
                                                    ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                                <hr className="ml-0.5 border-gray-200" />
                            </li>
                        ))}
                    </ul>
                </div>


                <div className={`lg:mt-4 lg:mb-2 lg:ml-[370px]`}>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="flex flex-col lg:hidden items-start mt-0">
                            <div className="flex items-center justify-start mt-2 w-full">
                                <GoChevronLeft size={35} className="mr-2" />
                                <div className="flex flex-col justify-center text-center w-full">
                                    <p className="text-dark-black text-base font-normal mb-0">
                                        Bebek Takımı
                                    </p>
                                    <p className="text-sm text-medium-grey mt-0 mb-0">
                                        10 Ürün Listeleniyor
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="hidden lg:block text-dark-black text-lg font-bold font-source-sans-pro">
                            “Bebek Takımı” araması için 10 sonuç listeleniyor
                        </p>

                        <div className={`flex flex-center ${isMenuOpen || isCategoriesHovered ? 'bg-medium-grey shadow-4xl' : 'bg-white'
                            }`}>
                            <div className="relative lg:ml-[360px] ml-[0px] lg:flex-row flex">
                                <div
                                    className="border border-1 flex items-center justify-center lg:font-normal font-semibold lg:justify-between rounded-lg hover:border-orange cursor-pointer lg:w-[17vw] w-[50vw] px-4 py-2 lg:text-sm text-md text-dark-grey"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <HiMiniArrowsUpDown size={24} className="lg:hidden mr-2 text-orange" />
                                    <span>{selectedOption}</span>
                                    <HiMiniArrowsUpDown size={24} className="hidden lg:block text-orange" />
                                </div>
                                <div
                                    className="lg:hidden border border-1 flex items-center justify-center lg:font-normal font-semibold lg:justify-between rounded-lg hover:border-orange cursor-pointer lg:w-[17vw] w-[50vw]  px-4 py-2 lg:text-sm text-md text-dark-grey"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <LuFilter size={24} className="lg:hidden mr-2 text-orange" />
                                    <p>Filtrele</p><p className='text-orange ml-1'>(1)</p>
                                    <LuFilter size={24} className="hidden lg:block text-orange" />
                                </div>
                                {isOpen && (
                                    <ul className="absolute left-0 top-full mt-1 w-[250px] border border-gray-200 rounded-md bg-white shadow-lg z-50 text-xs">
                                        {options.map((option, index) => (
                                            <li
                                                key={index}
                                                className={`px-4 py-2 text-sm cursor-pointer ${selectedOption === option ? "bg-gray-200 hover:text-orange hover:font-bold" : "hover:bg-gray-100  hover:font-semibold hover:text-orange"
                                                    }`}
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={`lg:flex space-x-2 mt-5 hidden`}>
                        <div>
                            <button className='rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm font-thin text-dark-black flex items-center space-x-2 bg-gradient-to-r from-peach to-orange-pink hover:border hover:border-darkpeach'>
                                <img src="/icons/flash.svg" alt="Flaş Ürünler" className="w-5 h-5 text-orange-500" />
                                <span>Flaş Ürünler</span>
                            </button>
                        </div>
                        <button className='rounded-3xl border border-white bg-yellow-50 font-source-sans-pro px-5 py-1.5 text-sm font-thin text-dark-black flex items-center space-x-2 hover:bg-orange-100 hover:border-orange-500 hover:border hover:border-yellow-400 '>
                            <AiFillStar size={20} className='text-yellow-400 mr-2' /> Yüksek Puanlı Ürünler
                        </button>
                        <button className='rounded-3xl border border-white bg-blue-50 font-source-sans-pro px-5 py-1.5 text-sm font-thin text-dark-black flex items-center space-x-2 hover:bg-orange-100 hover:border-orange-500 hover:border hover:border-blue-800 '>
                            <MdOutlineStorefront size={20} className='text-dark-blue mr-2' /> Yüksek Puanlı Satıcılar
                        </button>
                        <button className='rounded-3xl border border-white bg-light-medium-grey font-source-sans-pro px-4 py-1.5 text-sm font-thin text-dark-black flex items-center space-x-2 hover:border hover:border-gray-400'>
                            <BsFillBoxFill size={17} className='text-gray-500 mr-2' />Kargo Bedava
                        </button>
                        <button className='rounded-3xl border border-white font-source-sans-pro  px-4 py-1.5 text-sm font-thin text-dark-black flex items-center space-x-2 bg-green-50 hover:border hover:border-green-500'>
                            <LiaShippingFastSolid size={20} className='text-green-500 items-start mr-2' /> Hızlı Teslimat
                        </button>
                    </div>

                    <hr className="w-[64vw] m-4 border-gray-200" />
                    <div>
                        <div>
                            <Urunler />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default FilrelemeEkrani;