import Image from "next/image"
import Portfolio from "../../../public/images/portfolio-1.png";
import Portfolio2 from "../../../public/images/portfolio-2.png";
import Portfolio3 from "../../../public/images/portfolio-3.png";
import Portfolio4 from "../../../public/images/portfolio-4.png";
import ArrowR from "../../../public/images/icons/arrow-right.svg";




const OurPortfolio: React.FC = () => {
    return (
        <main className="container !mb-[150px]">
            <h2 className="mb-11 text-center">Our Portfolio</h2>
            <div className="grid grid-cols-2 items-stretch gap-6 mb-11 max-sm:grid-cols-1">
                <div className="relative border border-[#CCCCCC] rounded-xl">
                    <Image className="w-full object-cover" src={Portfolio} alt="image" />
                    <div className="absolute bottom-0 left-0 w-full p-[14px] rounded-b-xl bg-white shadow-portfolio-shadow">
                        <p className="text-sm font-semibold">Taskly</p>
                        <a href="#" className="text-sm font-semibold text-[#007AFF]">https://www.taskly.cloud/</a>
                    </div>
                </div>
                <div className="relative border border-[#CCCCCC] rounded-xl">
                    <Image className="w-full object-cover" src={Portfolio2} alt="image" />
                    <div className="absolute bottom-0 left-0 w-full p-[14px] rounded-b-xl bg-white shadow-portfolio-shadow">
                        <p className="text-sm font-semibold">Anime Quiz!</p>
                        <a href="#" className="text-sm font-semibold text-[#007AFF]">https://www.animequiz.com/</a>
                    </div>
                </div>
                <div className="relative border border-[#CCCCCC] rounded-xl">
                    <Image className="w-full object-cover" src={Portfolio3} alt="image" />
                    <div className="absolute bottom-0 left-0 w-full p-[14px] rounded-b-xl bg-white shadow-portfolio-shadow">
                        <p className="text-sm font-semibold">Startify</p>
                        <a href="#" className="text-sm font-semibold text-[#007AFF]">https://www.startify.com/</a>
                    </div>
                </div>
                <div className="relative border border-[#CCCCCC] rounded-xl">
                    <Image className="w-full object-cover" src={Portfolio4} alt="image" />
                    <div className="absolute bottom-0 left-0 w-full p-[14px] rounded-b-xl bg-white shadow-portfolio-shadow">
                        <p className="text-sm font-semibold">Chore Splitter</p>
                        <a href="#" className="text-sm font-semibold text-[#007AFF]">https://www.chorespliter.com/</a>
                    </div>
                </div>
            </div>
            <div className="text-center flex items-center justify-center gap-3">
                <a href="#" className="text-lg font-semibold">View all Projects</a>
                <Image src={ArrowR} alt="icon"/>
            </div>
        </main>
    )
}
export default OurPortfolio