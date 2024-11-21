import Image from "next/image";
import { title } from "process";
import Globe from "../../../public/images/globe.svg";
import Devs from "../../../public/images/devs.svg";
import Clients from "../../../public/images/clients.svg";

interface highlight {
    image: string;
    title: string;
    text: string;
}

const Stats: highlight[] = [
    {
        image: Globe,
        title: '50+ Clients Served Globally',
        text: 'Our team has successfully partnered with over 50+ businesses worldwide, delivering customized solutions that meet the unique needs of each client. Our global experience means we understand the complexities of different markets, ensuring scalable solutions that drive success anywhere.',
    },
    {
        image: Devs,
        title: 'Top-Rated DevOps & Cloud Consultancy',
        text: 'CodedHarmony is recognized as a top-tier consultancy in DevOps and cloud solutions, trusted by clients for our expertise, reliability, and commitment to excellence. Our track record speaks for itself, with a reputation built on efficient, secure, and scalable implementations that help businesses thrive in a competitive digital landscape.',
    },
    {
        image: Clients,
        title: '99.99% Client Satisfaction in Deployment',
        text: 'We are dedicated to optimizing deployment processes to achieve near-perfect satisfaction among our clients. With a 99.99% satisfaction rate, our approach ensures minimal downtime, streamlined operations, and fast, secure deployments—so your business can operate without interruption.',
    },
]


export default function Highlights() {
    return (
        <div className="pt-10 mb-[150px]">
            <div className="container text-center">
                <h2 className="mb-11"> Trust-Building Stats & Quick Highlights</h2>
                <div className="flex items-center justify-between gap-32 max-lg:gap-10 max-md:gap-4 max-sm:flex-wrap max-sm:gap-y-14">
                    {Stats.map((item, items) => (
                        <div className="text-center" key={items}>
                            <Image className="h-[74px] mb-5 mx-auto max-sm:mb-0" src={item.image} alt="image" />
                            <p className="text-lg font-semibold mb-[10px]">{item.title}</p>
                            <span className="text-xs block leading-normal">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}