import Head from "next/head";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Whatsapp from '../../../public/images/icons/whatsapp-logo.svg';
import Telephone from '../../../public/images/icons/telephone.svg';
import Google from '../../../public/images/google-reviews-stats-new.svg.svg';
import clutch from '../../../public/images/clutch-reviews-stats-new.svg';
import upcity from '../../../public/images/upcity-reviews-logo-new.svg';
import Stars from '../../../public/images/social-review-item-new.svg';
import { title } from "process";

interface brands {
    img: string;
    star: string;
    reviews: string;
}

const brand: brands[] = [
    {
        img: Google,
        star: Stars,
        reviews: "150+ Reviews",
    },
    {
        img: clutch,
        star: Stars,
        reviews: "150+ Reviews",
    },
    {
        img: upcity,
        star: Stars,
        reviews: "150+ Reviews",
    },
]

const Banner: React.FC = () => {
    return (
        <main className="bg-banner-bg bg-cover bg-no-repeat pt-14">
            <div className="container large mx-auto grid grid-cols-[60%_1fr] items-center gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                <div className="text-center md:text-left">
                    <h1 className="text-white mb-4">
                        Empowering Your Business with Expert DevOps, Cloud, and Full Stack
                        Solutions
                    </h1>
                    <p className="text-white mb-6">
                        At CodedHarmony, we’re dedicated to driving digital transformation
                        with scalable, secure, and high-performance solutions tailored to
                        your needs. From end-to-end DevOps automation to cutting-edge web
                        and mobile development, our expertise ensures your infrastructure
                        and applications are always ready to scale with your ambitions.
                        Let’s build the future of your business—efficiently, securely, and
                        collaboratively.
                    </p>
                    <ul className="flex items-center gap-6 max-md:justify-center">
                        <li><a href="#" className="btn-style"><Image src={Telephone} alt="icon" />Call Us</a></li>
                        <li><a href="#" className=""><Image src={Whatsapp} alt="icon" /></a></li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0">
                    <ContactForm />
                </div>
            </div>
            <div className="bg-[#0C0C0C] bg-opacity-60 p-5 max-md:mt-10 max-sm:px-0">
                <div className="container flex items-center justify-between">
                    {brand.map((item, items) => (
                        <div key={items}>
                            <div className="space-y-1 text-center">
                                <Image className="mx-auto max-sm:h-5" src={item.img} alt="img" />
                                <Image className="mx-auto max-sm:h-5" src={item.star} alt="img" />
                                <p className="text-[#F5D74F]">{item.reviews}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Banner;
