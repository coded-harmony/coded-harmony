import React from "react";
import Image from "next/image";
import MainImg from '../../../public/images/main-img.png';
import ImgOne from '../../../public/images/why-us-img1.png';
import ImgTwo from '../../../public/images/why-us-img2.png';

const WhyUs: React.FC = () => {
    return (
        <div className="container !mb-[150px]">
            <h2 className="text-center mb-11">Why Us?</h2>
            <div className="flex max-md:flex-col items-center justify-center gap-28 max-lg:grid max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1">
                <div className="relative w-fit mx-auto">
                    <div className="w-[264px] h-[371px] rounded-full overflow-hidden mx-auto">
                        <Image src={MainImg} alt="img" />
                    </div>
                    <div className="w-[160px] h-[224px] rounded-full overflow-hidden absolute top-0 -left-[80px] max-sm:-left-14">
                        <Image src={ImgOne} alt="img" />
                    </div>
                    <div className="w-[160px] h-[224px] rounded-full overflow-hidden absolute bottom-0 -right-[80px] max-sm:-right-14">
                        <Image src={ImgTwo} alt="img" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 text-center md:text-left max-lg:gap-4 max-sm:gap-2">
                    <div className="w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">7+</h2>
                            <p className="opacity-50 font-semibold">Years of Experience</p>
                        </div>
                    </div>
                    <div className="mt-10 w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">30+</h2>
                            <p className="opacity-50 font-semibold">Team Members</p>
                        </div>
                    </div>
                    <div className="w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">80</h2>
                            <p className="opacity-50 font-semibold">Happy Clients</p>
                        </div>
                    </div>
                    <div className="w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">270k+</h2>
                            <p className="opacity-50 font-semibold">Projects Done</p>
                        </div>
                    </div>
                    <div className="mt-10 w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">25k</h2>
                            <p className="opacity-50 font-semibold">Hours Worked</p>
                        </div>
                    </div>
                    <div className="w-auto h-[175px] max-sm:h-[140px] flex items-center justify-center py-10 px-14 text-center border border-[#E5E5E5]">
                        <div className="space-y-2">
                            <h2 className="font-bold">24/7</h2>
                            <p className="opacity-50 font-semibold">Support Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
