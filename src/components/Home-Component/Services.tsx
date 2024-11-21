import Image from "next/image";
import { title } from "process";
import Web from "../../../public/images/web-development.png";
import mobile from "../../../public/images/mobile-dev.png";
import branding from "../../../public/images/logo-branding.png";
import digital from "../../../public/images/digital-mark.png";

interface highlight {
    img: string;
    title: string;
    text: string;
}

const Stats: highlight[] = [
    {
        img: Web,
        title: 'Web Development',
        text: 'Our team combines cutting-edge technology with responsive design to create custom websites that drive growth, attract visitors, and seamlessly adapt to any device.',
    },
    {
        img: mobile,
        title: 'Mobile App Development',
        text: 'From concept to launch, we develop user-friendly mobile applications that engage your customers and drive business results.',
    },
    {
        img: branding,
        title: 'Logo & Branding Service',
        text: 'We create memorable logos and cohesive brand identities that resonate with your target audience and differentiate your business.',
    },
    {
        img: digital,
        title: 'Digital Marketing Service',
        text: 'Boost your online presence with our tailored digital marketing strategies, designed to increase engagement and drive conversions.',
    },
]


export default function Services() {
    return (
        <div className="pt-10 mb-[150px]">
            <div className="container text-center">
                <h2 className="mb-11"> Trust-Building Stats & Quick Highlights</h2>
                <div className="flex items-strech justify-between gap-6 flex-wrap max-lg:gap-4 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
                    {Stats.map((item, items) => (
                        <div className="flex-1 text-center bg-white shadow-service-shadow rounded-[14px] p-[22px] pt-8 max-lg:px-4" key={items}>
                            <Image className="mb-5 mx-auto" src={item.img} alt="image" />
                            <p className="text-lg font-semibold mb-[10px]">{item.title}</p>
                            <span className="text-xs leading-normal block">{item.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-8 mt-11 max-sm:flex-col max-sm:gap-4">
                    <h2 className="font-normal">Hire a Dedicated Developer</h2>
                    <a href="#" className="btn-style">Call Us</a>
                </div>
            </div>
        </div>
    )
}