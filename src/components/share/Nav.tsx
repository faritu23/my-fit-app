import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className='bg-black '>
            <div className='flex justify-between container mx-auto my-3 p-4'>
                <div className='flex items-center gap-2'>
                    <Image src={Logo} className='h-[40px] w-[40px] ' alt='fit app logo' />
                    <h2>Fitlog</h2>
                </div>
                <ul className='flex justify-between gap-2'>
                    <li><Link  href="/workouts" >Workouts</Link></li>
                    <li><Link href="/my-plan" >My Plan</Link></li>
                </ul>

                <div className='flex items-center gap-2'>
                    <button>plan</button>
                    <button>save</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;