import Image from "next/image"
import Client1 from "../../../public/images/client-1.png";
import Client2 from "../../../public/images/client-2.png";
import Client3 from "../../../public/images/client-3.png";
import Client4 from "../../../public/images/client-4.png";
import Client5 from "../../../public/images/m-client.png";
import Client6 from "../../../public/images/client-fish.png";
import Client7 from "../../../public/images/loveclip.png";


interface Client {
    img: string;
}

const Clients: Client[] = [
    {
        img: Client1,
    },
    {
        img: Client2,
    },
    {
        img: Client3,
    },
    {
        img: Client4,
    },
    {
        img: Client5,
    },
    {
        img: Client6,
    },
    {
        img: Client3,
    },
    {
        img: Client4,
    },
    {
        img: Client5,
    },
    {
        img: Client2,
    },
    {
        img: Client3,
    },
    {
        img: Client7,
    },
]

const OurClients: React.FC = () => {
    return (
        <main className="container !mb-[150px] text-center">
            <h2 className="mb-11">Our Clients</h2>
            <div className="grid grid-cols-6 items-center justify-between gap-y-6 gap-x-6 max-lg:gap-4 max-md:grid-cols-4 max-sm:grid-cols-2">
                {Clients.map((item, items) => (
                    <div key={items} className="h-[98px] p-[14px] border border-[#CCCCCC]">
                        <Image className="mx-auto" src={item.img} alt="image" />
                    </div>
                ))}

            </div>
        </main>
    )
}
export default OurClients