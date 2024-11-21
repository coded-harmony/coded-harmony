import Image from "next/image"
import Team from "../../../public/images/about-us-img.png";




const AboutUs: React.FC = () => {
    return (
        <main className="container !mb-[150px]">
            <h2 className="mb-11 text-center">About CodedHarmony</h2>
            <div className="flex items-center justify-center gap-10 mb-5 max-md:flex-col max-sm:text-center ">
                <Image className="mx-auto md:max-lg:h-[210px]" src={Team} alt="image" />
                <div className="">
                    <p className="mb-10 text-lg">At CodedHarmony, we believe in the power of technology to drive business success. Our agency is built on a foundation of expertise, innovation, and a deep understanding of our clients' unique needs. We specialize in creating custom software solutions that are not only functional but also intuitive and scalable.</p>
                    <p className="text-lg">Our journey began with a simple idea: to harmonize technology with business strategy. Today, we continue to push the boundaries of what’s possible, helping companies across various industries transform their digital presence and achieve their goals.</p>
                </div>
            </div>
            <div className="py-4 px-5 bg-[#F8F9F9] border-l-4 border-[#F56210]">
                <p className="text-lg">With a team of seasoned professionals, we’re dedicated to delivering excellence in every project, ensuring that our clients are equipped with the tools they need to succeed in an ever-evolving digital landscape.</p>
            </div>
        </main>
    )
}
export default AboutUs