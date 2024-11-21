import { useState } from "react";
import Image from "next/image";
import Logo from '../../../public/images/logo.svg';
import Whatsapp from '../../../public/images/icons/whatsapp-logo.svg';
import Telephone from '../../../public/images/icons/telephone.svg';
import Hamburger from '../../../public/images/icons/hamburger.svg'; 

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main className="container">
            {/* Main Header */}
            <div className="py-2 flex items-center justify-between max-lg:p-4">
                <Image src={Logo} alt={'Image'} className="w-auto" />

                {/* Desktop Menu */}
                <ul className={`flex items-center gap-6 ${menuOpen ? 'block' : 'hidden'} md:flex lg:items-center`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                </ul>

                <ul className="flex items-center gap-6 max-md:hidden">
                    <li><a href="#" className="btn-style !h-10"><Image src={Telephone} alt="icon"/>Call Us</a></li>
                    <li><a href="#" className=""><Image src={Whatsapp} alt="icon"/></a></li>
                </ul>

                {/* Hamburger Menu for mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src={Hamburger} alt="Hamburger Menu" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="lg:hidden bg-white w-full h-full z-10 fixed left-0 top-0 p-6">
                    {/* Close Button */}
                    <button onClick={toggleMenu} className="absolute right-6 top-6 focus:outline-none">
                        X
                    </button>
                    <ul className='flex flex-col items-center gap-6 mt-12'>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">On Sale</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#" className="btn-style !px-9 !py-3">Sign Up</a></li>
                    </ul>
                </div>
            )}
        </main>
    );
}
