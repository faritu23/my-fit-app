import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div>
            {/* Left*/}
                <footer className='mt-16 bg-[#0b0f17] py-16 '>
                    <div className=" flex justify-between container mx-auto">
                        <Link href="/workouts" className="flex items-center gap-2" aria-label="FitLog home">
                            <Image src={Logo} alt="FitLog logo" width={24} height={24} className="h-6 w-6 object-contain" />
                            <h2 className="text-sm font-black uppercase tracking-wide text-white"> FITLOG</h2>
                        </Link>
                        <div className='text-[10px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</div>

                    </div>

                </footer>
        </div>
    );
};

export default Footer;


