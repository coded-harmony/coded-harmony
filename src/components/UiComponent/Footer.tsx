import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/footer-logo.svg";
import Sms from "../../../public/images/icons/sms.svg";
import Phone from "../../../public/images/icons/solar_phone-bold.svg";
import Location from "../../../public/images/icons/location.svg";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F5F5F5] py-6">
            <div className="container text-center">
                <Image src={Logo} alt="logo" className="mb-11 mx-auto" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm pt-9 pb-12 border-y-2 border-[#E1E2E3]">
                    <div className="flex flex-col gap-3 items-center">
                        <Image src={Sms} alt="icon" />
                        <p className="text-lg font-semibold">Email</p>
                        <p>info@codedharmony.com</p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <Image src={Phone} alt="icon" />
                        <p className="text-lg font-semibold">Phone</p>
                        <p>+971 562699265</p>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <Image src={Location} alt="icon" />
                        <p className="text-lg font-semibold">Address</p>
                        <p>Sharjah Technology Park, UAE</p>
                    </div>
                </div>
                <div className="mt-3 text-lg font-semibold opacity-50">
                    &copy; CodedHarmony 2024. All Right Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
