/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

interface MainProps {
}

const Main: React.FC<MainProps> = ({ }) => {

    const main = useTranslations('main')

    return (
        <main className="bg-[url(/web/home.svg)] h-screen z-10 bg-center bg-no-repeat bg-cover flex-col pt-11 justify-center md:flex-row md:justify-between gap-10 px-5 md:pt-0 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 w-screen flex items-center" id='home'>
            <div className='flex flex-col gap-4 w-full xl:w-1/2 sm:gap-5 lg:gap-7 text-center md:text-left px-3 md:px-0 items-center md:items-start'>
                <h1 className='text-white text-3xl lg:text-5xl xl:text-6xl md:text-4xl font-light lg:font-extralight'>{main('h1')}  </h1>
                <h2 className='text-slate-50 leading-6 md:leading-8 text-sm md:text-base'>{main('h2')}</h2>
                <Link to='contact' smooth={true} duration={2000} href='#services'
                    className='bg-white cursor-pointer mt-2 md:mt-5 xl:px-7 text-blue-600 hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 border border-white hover:text-white  py-2 px-5 text-sm rounded-3xl shadow-sm'>
                    {main('button')}</Link>
            </div>
            <Image src={'/web/hero.webp'} alt='Hero' width={400} priority height={400} className='bg-white w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 2xl:w-[25rem] 2xl:h-[25rem] rounded-full shadow-xl' />
        </main>
    );
};

export default Main;
