import Image from "next/image"
import Company from "../../../public/images/company-1.png";




const Subscribe: React.FC = () => {
    return (
        <main className="max-w-2xl mx-auto mb-[80px] text-center">
            <h2 className="mb-6">Get New Insights</h2>
            <p className="text-xl">Stay ahead with the latest trends in technology, business insights, and expert tips delivered straight to your inbox. Enter your email to subscribe to our newsletter.</p>
           <form action="" className="relative w-[378px] mx-auto mt-11">
            <input type="email" placeholder="Your Email Address" className="w-full h-[60px] border border-[#F56210] rounded-[30px] bg-[#F5F5F5] text-[#8F939B] font-semibold py-4 pl-7 pr-36 outline-none"/>
            <button className="btn-style !absolute top-1/2 -translate-y-1/2 right-1 !h-[53px] !rounded-l-xl">Subscribe</button>
           </form>
        </main>
    )
}
export default Subscribe;0