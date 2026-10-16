import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

const Navbar = () => {
    // Change these values according to your app state
    const planCount = 0;
    const savedCount = 0;

    // Change this to match the current page
    const activePage = '/workouts';

    return (
        <header className="sticky bg-[#0b0f17]">
            <nav className="flex mx-auto min-h-14 w-full max-w-[1440px] ">

                {/* Left: Logo */}
                <div className="navbar-start flex">
                    <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
                        <Image src={Logo} alt="FitLog logo" width={24} height={24} className="h-6 w-6 object-contain" />
                        <h2 className="text-sm font-black uppercase tracking-wide text-white"> FITLOG</h2>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="navbar-center flex-none">
                    <ul className="menu menu-horizontal items-center gap-1 p-0 text-[10px] sm:gap-2 sm:text-xs">
                        <li>
                            <Link href="/" aria-current={
                                    activePage === '/workouts' ? 'page' : undefined
                                }
                                className={`min-h-0 rounded-full px-3 py-1.5 ${
                                    activePage === '/workouts'
                                        ? 'bg-[#1b2410] font-bold text-[#ccff00] hover:bg-[#1b2410]'
                                        : 'bg-transparent text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link  href="/my-plan" aria-current={
                                    activePage === '/my-plan' ? 'page' : undefined
                                }
                                className={`min-h-0 rounded-full px-3 py-1.5 ${
                                    activePage === '/my-plan'
                                        ? 'bg-[#1b2410] font-bold text-[#ccff00] hover:bg-[#1b2410]'
                                        : 'bg-transparent text-[#a1a1aa] hover:bg-[#191a20] hover:text-white'
                                }`}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right: Status Counters */}
                <div className="navbar-end flex-1 gap-3 sm:gap-5">
                    <div className="flex items-center gap-1.5">
                        <button className="text-[10px] text-[#a1a1aa] sm:text-xs"> Plan </button>
                        <span className="badge h-4 min-w-4 border-none bg-[#ccff00] px-1 text-[9px] font-bold text-black"> {planCount}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button className="text-[10px] text-[#a1a1aa] sm:text-xs"> Saved </button>
                        <span className="badge h-4 min-w-4 border border-[#34353c] bg-transparent px-1 text-[9px] text-[#d4d4d8]"> {savedCount}
                        </span>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;
