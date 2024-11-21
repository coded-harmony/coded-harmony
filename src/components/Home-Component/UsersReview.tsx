import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import client1 from '../../../public/images/boy.png';
import client2 from '../../../public/images/boy-2.png';
import client3 from '../../../public/images/girl.png';
import Star from '../../../public/images/icons/star.svg';
import Drops from '../../../public/images/icons/drops.svg';
import ArrowR from "../../../public/images/icons/arrow-right.svg";

interface Client {
    image: string;
    name: string;
    review: string;
    stars: number;
}

const clients: Client[] = [
    {
        image: client1,
        name: 'Robert Fox',
        review: 'CodedHarmony exceeded our expectations with a beautifully designed, user-friendly website. Highly professional team!',
        stars: 5
    },
    {
        image: client2,
        name: 'Marvin McKinney',
        review: 'Since launching our new site with CodedHarmony, our sales have jumped by 30%! Truly transformative work.',
        stars: 5
    },
    {
        image: client3,
        name: 'Darrell Steward',
        review: 'Their expertise in DevOps streamlined our processes, delivering faster and more efficient operations.',
        stars: 5
    },
    {
        image: client1,
        name: 'Robert Fox',
        review: 'CodedHarmony exceeded our expectations with a beautifully designed, user-friendly website. Highly professional team!',
        stars: 5
    },
    {
        image: client2,
        name: 'Marvin McKinney',
        review: 'Since launching our new site with CodedHarmony, our sales have jumped by 30%! Truly transformative work.',
        stars: 5
    },
    {
        image: client3,
        name: 'Darrell Steward',
        review: 'Their expertise in DevOps streamlined our processes, delivering faster and more efficient operations.',
        stars: 5
    },

];

const UsersReview: React.FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <main className='mb-40 max-sm:mb-32'>
            <div className="container text-center">
                <h2 className="mb-16 max-sm:mb-2">Customer Reviews</h2>
                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} className="p-6 bg-white border border-[#CCCCCC] rounded-xl shadow-user-shadow" data-aos="fade-up">
                            <div className="flex flex-col items-center space-y-6">
                                <Image className='' src={Drops} alt='icon' />
                                <p className="text-sm font-semibold text-center">{client.review}</p>
                                <div className="flex items-center gap-3 text-left">
                                    <Image src={client.image} alt='img' className="rounded-full w-[46px] h-[46px]" />
                                    <div className="">
                                        <span className='text-[16px] font-semibold'>{client.name}</span>
                                        <Image src={Star} alt="stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="text-center flex items-center justify-center gap-3 mt-11">
                <a href="#" className="text-lg font-semibold">View all reviews</a>
                <Image src={ArrowR} alt="icon"/>
            </div>
            </div>
        </main>
    );
};

export default UsersReview;
