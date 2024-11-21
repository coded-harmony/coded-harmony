import Image from "next/image"
import Social from "../../../public/images/social-icon.png";
import DigitalMarket from "../../../public/images/digital-market.png";
import EcomerceDev from "../../../public/images/ecom-dev.png";
import video from "../../../public/images/video-service.png";
import bank from "../../../public/images/bank-service.png";
import enterprise from "../../../public/images/enterprise-service.png";
import education from "../../../public/images/education.png";
import tour from "../../../public/images/tour.png";
import health from "../../../public/images/health.png";
import ticket from "../../../public/images/ticket.png";
import restaurent from "../../../public/images/restaurent.png";
import business from "../../../public/images/business.png";

interface Client {
    img: string;
    bgColor: string;
    title: string;
}

const Clients: Client[] = [
    {
        img: Social,
        bgColor: "#70E4E8",
        title: "Social Network",
    },
    {
        img: DigitalMarket,
        bgColor: "#F5EB92",
        title: "Digital Market",
    },
    {
        img: EcomerceDev,
        bgColor: "#A3FFE2",
        title: "Ecommerce Development",
    },
    {
        img: video,
        bgColor: "#FFBC7A",
        title: "Video Service",
    },
    {
        img: bank,
        bgColor: "#E3FF8E",
        title: "Bank Service",
    },
    {
        img: enterprise,
        bgColor: "#FFA0C6",
        title: "Enterprise Service",
    },
    {
        img: education,
        bgColor: "#F3A6FF",
        title: "Education",
    },
    {
        img: tour,
        bgColor: "#97FFAF",
        title: " Tour and Travels",
    },
    {
        img: health,
        bgColor: "#6CFFFA",
        title: "Health Service",
    },
    {
        img: ticket,
        bgColor: "#77BAFF",
        title: "Event & Ticket",
    },
    {
        img: restaurent,
        bgColor: "#FFEFD4",
        title: "Restaurant Service",
    },
    {
        img: business,
        bgColor: "#7AFFDB",
        title: "Business Consultant",
    },

]

const Business: React.FC = () => {
    return (
        <main className="container !mb-[150px] text-center">
            <h2 className="mb-11">Helping Businesses in  All Domains</h2>
            <div className="grid grid-cols-6 items-center justify-between gap-6 max-lg:gap-4 max-md:grid-cols-4 max-sm:grid-cols-2">
                {Clients.map((item, items) => (
                    <div key={items} className="flex items-center justify-center h-[180px] p-4 rounded-[10px_50px_10px_50px]" style={{ backgroundColor: item.bgColor }}>
                        <div className="space-y-4">
                            <Image className="mx-auto h-[62px] w-[62px]" src={item.img} alt="image" />
                            <p className="text-xl font-semibold">{item.title}</p>
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}
export default Business