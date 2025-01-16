import Image from 'next/image';
import categoriesData from '../data/CategoriesAnneCocuk.json';
import { GoHeart } from "react-icons/go";
import { BsFillBoxFill } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";


const Urunler = () => {
    const products = categoriesData.categoriesAnneCocuk[0].subCategories[0].items[0].images;
console.log('husnayagmur')
    return (
        <div className="p-4">
            <div className="grid sm:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-2 font-source-sans-pro">
                {products.map((product, index) => {
                    const [firstWord, ...restWords] = product.alt.split(' ');
                    const isSpecialProduct = [1, 3, 4].includes(index + 1);
                    const isFavoriteProduct = [1, 2, 6, 7, 8].includes(index + 1);
                    const isPhotosProduct = [1, 3, 4, 6,].includes(index + 1);
                    const isShippingFree = [1, 2, 4, 3, 8].includes(index + 1);
                    const isFastDelivery = [1, 2, 4, 9, 7,].includes(index + 1);
                    const isCoupon = [1, 3, 4, 5, 6, 7].includes(index + 1);
                    return (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg overflow-hidden text-center lg:w-[232px] lg:h-[480px] md:w-[402px] md:h-[580px] w-[180px] h-[580px] mx-auto"
                        >
                            <div className="relative w-full h-[280px]">
                                <div className="w-full h-full">
                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />

                                    <div className="absolute top-2 right-2 border rounded-full w-10 h-10 flex justify-center items-center bg-white shadow-xl hover:text-orange-500">
                                        <GoHeart size={22} className="text-black text-xl font-thin hover:text-orange" />
                                    </div>
                                    <div className="absolute mt-2 left-1 flex flex-col items-center space-y-1">
                                        {isFastDelivery && (
                                            <div className="flex items-center w-[80px] justify-center p-1 bg-green-500 text-white rounded-md text-xs">
                                                <LiaShippingFastSolid size={25} className="text-white ml-1 mr-1" />
                                                <div className="flex flex-col font-bold ml-1 text-left text-[10px] pr-1">
                                                    <span className="leading-none">{product.fastDelivery}</span>
                                                </div>
                                            </div>
                                        )}

                                        {isShippingFree && (
                                            <div className="flex items-center w-[80px] justify-center p-1 bg-medium-dark-grey text-white rounded-md text-xs">
                                                <BsFillBoxFill size={25} className="text-white ml-1 mr-1" />
                                                <div className="flex flex-col font-bold ml-1 text-left text-[10px] pr-1">
                                                    <span className="leading-none">{product.shippingFree}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className="text-left p-2 ">
                                <h3 className="text-sm font-thin mb-2">
                                    <span className="font-bold text-dark-black">{firstWord}</span>{' '}
                                    {restWords.join(' ')}
                                </h3>

                                <div className="flex items-center text-xs mb-1 font-bold gap-0.5">
                                    {isFavoriteProduct && (
                                        <>
                                            <Image
                                                src="/images/orange-heart.jpg" 
                                                alt="Kalp ikonu"
                                                width={13}
                                                height={13} 
                                                className=""
                                            />
                                            <p className="text-orange">{product.fav}</p>
                                            <p className="text-dark-grey">favoriledi!</p>
                                        </>
                                    )}
                                </div>
                                <div className='flex items-center mt-4'>
                                    {isSpecialProduct ? (
                                        <>
                                            <p className="text-[13px] text-dark-grey mr-1">{product.star}</p>
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStarHalfStroke size={11} className='text-star-orange' />
                                            {isPhotosProduct && (
                                                <>
                                                    <p className="text-[13px] text-dark-grey mr-1">{product.numberOfPhotos}</p>
                                                    <Image
                                                        src="/images/kamera.jpg" 
                                                        alt="Kamera ikonu"
                                                        width={15} 
                                                        height={15} 
                                                        className="" 
                                                    />
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-[13px] text-dark-grey mr-1">{product.star}</p>
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            <FaStar size={12} className='text-star-orange' />
                                            {isPhotosProduct && (
                                                <>
                                                    <p className="text-[13px] text-dark-grey mr-1">{product.numberOfPhotos}</p>
                                                    <Image
                                                        src="/images/kamera.jpg" 
                                                        alt="Kamera ikonu"
                                                        width={15} 
                                                        height={15} 
                                                        className="" 
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>

                                <p className="text-sm  font-bold text-orange">{product.price} TL</p>
                                <div className="flex mt-5 space-x-2">
                                    {isCoupon && (
                                        <div className="flex items-center bg-pink-50 w-24 p-0 rounded-md">
                                            <img
                                                src="/icons/campaign-coupon-icon.svg"
                                                alt="campaign-coupon"
                                                className="text-pink-700 mr-1"
                                            />
                                            <p className="text-[10px] font-thin">{product.coupon} TL Kupon</p>
                                        </div>
                                    )}

                                    <div className="flex items-center bg-light-orange w-24 p-0 rounded-md">
                                        <img
                                            src="/icons/campaign-product-promotion-icon.svg"
                                            alt="campaign-coupon"
                                            className="text-yellow-700 mr-1"
                                        />
                                        <p className="text-[10px] font-thin">{product.campaignProduct}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Urunler;
