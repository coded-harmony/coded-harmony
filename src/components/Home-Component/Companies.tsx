import Image from "next/image"
import Company from "../../../public/images/company-1.png";
import ps from "../../../public/images/ps.png";
import shopify from "../../../public/images/shopify.png";
import sass from "../../../public/images/sass.png";
import mysql from "../../../public/images/mysql.png";
import css3 from "../../../public/images/css3.png";
import java from "../../../public/images/java.png";
import bootstrap5 from "../../../public/images/bootstrap5.png";
import apple from "../../../public/images/apple.png";
import vue from "../../../public/images/vue.png";
import figma from "../../../public/images/figma.png";
import android from "../../../public/images/android.png";
import angles from "../../../public/images/angles-l.png";
import js from "../../../public/images/js.png";
import php from "../../../public/images/php.png";




const Companies: React.FC = () => {
    return (
        <div className="container !mb-[150px] text-center">
            <h2 className="mb-11">Development Companies</h2>
            <div className="grid grid-cols-5 items-center justify-between gap-y-10 max-sm:grid-cols-3">
                <Image className="mx-auto" src={Company} alt="image" />
                <Image className="mx-auto" src={ps} alt="image" />
                <Image className="mx-auto" src={shopify} alt="image" />
                <Image className="mx-auto" src={sass} alt="image" />
                <Image className="mx-auto" src={mysql} alt="image" />
                <Image className="mx-auto" src={css3} alt="image" />
                <Image className="mx-auto" src={java} alt="image" />
                <Image className="mx-auto" src={bootstrap5} alt="image" />
                <Image className="mx-auto" src={apple} alt="image" />
                <Image className="mx-auto" src={vue} alt="image" />
                <Image className="mx-auto" src={figma} alt="image" />
                <Image className="mx-auto" src={android} alt="image" />
                <Image className="mx-auto" src={angles} alt="image" />
                <Image className="mx-auto" src={js} alt="image" />
                <Image className="mx-auto" src={php} alt="image" />
            </div>
        </div>
    )
}
export default Companies