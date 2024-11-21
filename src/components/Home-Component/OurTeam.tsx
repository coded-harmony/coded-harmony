import Image from "next/image"
import Team from "../../../public/images/our-team.png";




const OurTeam: React.FC = () => {
    return (
        <main className="container !mb-[150px] text-center">
            <h2 className="mb-11">Our Team</h2>
            <div>
                <Image className="mx-auto" src={Team} alt="image" />
            </div>
        </main>
    )
}
export default OurTeam