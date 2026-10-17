'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // ১. usePathname ইমপোর্ট করা হলো
import Logo from '@/assets/logo.png';
import { AppContext } from '@/context/AppContext';

const Navbar = () => {
    const { plans, saved, setPlanActive, setSaveActive } = useContext(AppContext);
    
    
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-[#0b0f17] border-b border-gray-800/60">
            <nav className="flex items-center justify-between mx-auto min-h-16 w-full max-w-[1440px] px-4">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
                        <Image src={Logo} alt="FitLog logo" width={20} height={20} className="h-6 w-6 object-contain" />
                        <h2 className="text-sm font-black uppercase tracking-wide text-white"> FITLOG</h2>
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <div className="flex items-center">
                    <ul className="flex my-auto text-center gap-2 text-xs sm:gap-4 sm:text-sm">
                        <li>
                            <Link 
                                href="/" 
                                className={`px-4 py-2 rounded-xl transition-all ${
                                    pathname === '/' 
                                        ? 'text-[#C2F10D] font-bold bg-[#121824]' 
                                        : 'text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/my-plan" 
                                onClick={() => {
                                    setPlanActive(true);
                                    setSaveActive(false);
                                }}
                                className={`px-4 py-2 rounded-xl transition-all ${
                                    pathname === '/my-plan' 
                                        ? 'text-[#C2F10D] font-bold bg-[#121824]' 
                                        : 'text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right: Counters */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link 
                        href="/my-plan" 
                        onClick={() => {
                            setPlanActive(true);
                            setSaveActive(false);
                        }}
                        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                    >
                        <span className="text-[10px] sm:text-xs text-[#a1a1aa]">Plan</span>
                        <span className="badge h-4 min-w-4 border border-[#34353c] bg-[#C2F10D] text-black px-1 text-[9px] text-[#d4d4d8]"> {plans.length}</span>
                    </Link>

                    <Link 
                        href="/my-plan" 
                        onClick={() => {
                            setPlanActive(false);
                            setSaveActive(true);
                        }}
                        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                    >
                        <span className="text-[10px] sm:text-xs text-[#a1a1aa]">Saved</span>
                        <span className="badge h-4 min-w-4 border border-[#34353c] bg-transparent px-1 text-[9px] text-[#d4d4d8]">  {saved.length} </span>
                    </Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;