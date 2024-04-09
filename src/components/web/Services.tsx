/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos'
interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({ }) => {

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, [])

    const t = useTranslations('services')

    return (
        <section id='services' className='py-10 lg:py-20 flex items-center flex-col gap-10 lg:gap-16 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44'>
            <h1 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light lg:font-extralight pb-8 mb-8 border-b 2xl:hidden'>{t('offer')}</h1>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between items-center 2xl:items-end xl:gap-20 w-full'>
                <Image src={'/web/services/service.webp'} alt='Our Services' width={700} height={700} className=' 2xl:order-2 w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[46rem] 2xl:h-[46rem]' />
                <div  className='flex gap-10 flex-col items-center justify-center 2xl:items-start 2xl:w-2/5'>
                    <h1 data-aos="fade-right" className='text-gray-700 text-3xl md:text-4xl lg:text-5xl xl:text-6xl hidden 2xl:block font-light lg:font-extralight pb-8 border-b'>{t('offer')}</h1>

                    <div data-aos="fade-up" className='hover:shadow-md flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service1.webp'} alt='Service 1' width={144} height={144} />
                        <div className='text-gray-600 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-gray-700 lg:text-2xl mt-auto'>{t('1.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('1.p')}</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='hover:shadow-md flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service2.webp'} alt='Service 2' width={144} height={144} />
                        <div className='text-gray-600 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-gray-700 lg:text-2xl mt-auto'>{t('2.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('2.p')}</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='hover:shadow-md flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service3.webp'} alt='Service 3' width={144} height={144} />
                        <div className='text-gray-600 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-gray-700 lg:text-2xl mt-auto'>{t('3.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('3.p')}</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Services;
