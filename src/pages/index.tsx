import AboutUs from "@/components/Home-Component/AboutUs";
import Banner from "@/components/Home-Component/Banner";
import Business from "@/components/Home-Component/Business";
import Companies from "@/components/Home-Component/Companies";
import Highlights from "@/components/Home-Component/Highlights";
import OurClients from "@/components/Home-Component/OurClients";
import OurPortfolio from "@/components/Home-Component/OurPortfolio";
import OurTeam from "@/components/Home-Component/OurTeam";
import Services from "@/components/Home-Component/Services";
import Subscribe from "@/components/Home-Component/Subscribe";
import UsersReview from "@/components/Home-Component/UsersReview";
import WhyUs from "@/components/Home-Component/WhyUs";
import Faq from "@/components/UiComponent/Faq";
import Footer from "@/components/UiComponent/Footer";
import Header from "@/components/UiComponent/header";


export default function Home() {
    return (
        <main>
            <Header/>
            <Banner/>
            <Highlights/>
            <Companies/>
            <Services/>
            <WhyUs/>
            <OurClients/>
            <OurTeam/>
            <AboutUs/>
            <OurPortfolio/>
            <UsersReview/>
            <Business/>
            <Faq/>
            <Subscribe/>
            <Footer/>
        </main>
    );
}
