import React from 'react';
import Link from 'next/link';
import BannarLogo from '@/assets/banner.png'
import Image from 'next/image';

const BannarPage = () => {
    return (
        <section className="container mx-auto  pt-9">
            <div className="hero min-h-[400px] rounded-xl border border-black bg-black">
                <div className="hero-content w-full flex max-w-none justify-between px-6 py-10 sm:px-10">

                    <div className="max-w-lg">

                        <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#ccff00]"> Workout Library</p>
                        <h1 className="mb-4 text-3xl font-black uppercase leading-[0.98] text-white sm:text-4xl lg:text-5xl">
                        Train with intent. Log every set.</h1>
                        <p className="mb-6 max-w-md text-xs text-gray-400 sm:text-sm">
                        FitLog is a dark, no-nonsense gym companion:pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                        <Link href="/workouts" className="btn  bg-[#ccff00] px-5 text-[10px] font-bold text-black hover:bg-[#b8e600]"> BROWSE WORKOUTS</Link>

                    </div>
                    <Image src={BannarLogo} alt="FitLog logo" className="h-80 w-80 object-contain" />
                    
                </div>
            </div>
        </section>
    );
};

export default BannarPage;