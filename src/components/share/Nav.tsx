'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo.png';
import { AppContext } from '@/context/AppContext';

const Navbar = () => {
    const { plans, saved, setPlanActive, setSaveActive } = useContext(AppContext);
    
    
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-[#0b0f17] border-b border-gray-800/60">
            <nav aria-label="Main navigation" className="relative mx-auto flex min-h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-4">

                {/* Left*/}
                <div className="flex shrink-0 items-center">
                    <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
                        <Image src={Logo} alt="FitLog logo" width={20} height={20} className="h-6 w-6 object-contain" />
                        <h2 className="text-sm font-black uppercase tracking-wide text-white"> FITLOG</h2>
                    </Link>
                </div>

                {/* Small-screen menu */}
                <details className="dropdown dropdown-end order-3 md:hidden">
                    <summary
                        aria-label="Toggle navigation menu"
                        className="btn btn-ghost btn-square min-h-10 h-10 w-10 border border-gray-700/70 text-white"
                    >
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </summary>
                    <ul className="menu dropdown-content z-[1] mt-3 w-52 rounded-2xl border border-gray-800 bg-[#0b0f17] p-2 text-sm text-white shadow-xl">
                        <li>
                            <Link
                                href="/"
                                onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                                aria-current={pathname === '/' ? 'page' : undefined}
                                className={`rounded-xl ${
                                    pathname === '/'
                                        ? 'bg-[#121824] font-bold text-[#C2F10D]'
                                        : 'text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/my-plan"
                                onClick={(event) => {
                                    event.currentTarget.closest('details')?.removeAttribute('open');
                                    setPlanActive(true);
                                    setSaveActive(false);
                                }}
                                aria-current={pathname === '/my-plan' ? 'page' : undefined}
                                className={`rounded-xl ${
                                    pathname === '/my-plan'
                                        ? 'bg-[#121824] font-bold text-[#C2F10D]'
                                        : 'text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </details>

                {/* Center */}
                <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 text-sm md:flex">
                    <li>
                        <Link
                            href="/"
                            aria-current={pathname === '/' ? 'page' : undefined}
                            className={`block rounded-xl px-4 py-2 transition-all ${
                                pathname === '/'
                                    ? 'bg-[#121824] font-bold text-[#C2F10D]'
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
                            aria-current={pathname === '/my-plan' ? 'page' : undefined}
                            className={`block rounded-xl px-4 py-2 transition-all ${
                                pathname === '/my-plan'
                                    ? 'bg-[#121824] font-bold text-[#C2F10D]'
                                    : 'text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                            }`}
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>

                {/* Right: Counters */}
                <div className="order-2 ml-auto flex shrink-0 items-center gap-2 sm:gap-6 md:gap-4">
                    <Link 
                        href="/my-plan" 
                        onClick={() => {
                            setPlanActive(true);
                            setSaveActive(false);
                        }}
                        className="flex items-center gap-1 whitespace-nowrap transition-opacity hover:opacity-80 sm:gap-1.5"
                    >
                        <span className="text-[10px] text-[#a1a1aa] sm:text-xs">Plan</span>
                        <span className="badge h-5 min-w-5 border border-[#34353c] bg-[#C2F10D] px-1 text-[10px] text-black">{plans.length}</span>
                    </Link>

                    <Link 
                        href="/my-plan" 
                        onClick={() => {
                            setPlanActive(false);
                            setSaveActive(true);
                        }}
                        className="flex items-center gap-1 whitespace-nowrap transition-opacity hover:opacity-80 sm:gap-1.5"
                    >
                        <span className="text-[10px] text-[#a1a1aa] sm:text-xs">Saved</span>
                        <span className="badge h-5 min-w-5 border border-[#34353c] bg-transparent px-1 text-[10px] text-[#d4d4d8]">{saved.length}</span>
                    </Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;