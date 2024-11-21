import { useState } from 'react';
import AngleDown from '../../../public/images/icons/angle-down.svg';
import Image from 'next/image';
import PlusIcon from '../../../public/images/icons/plus.svg';
import MinusIcon from '../../../public/images/icons/minus.svg';
interface Faqitem {
    title: string;
    items: {
        question: string;
        answer: string;
    }[];
}

const faqData: Faqitem[] = [
    {
        title: "General Services & Expertise",
        items: [
            {
                question: "What types of websites do you develop?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Do you offer custom website development?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "What technologies do you use for website development?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Can you develop mobile-responsive websites?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Do you offer website redesign services?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
        ],
    },
    {
        title: "Process & Workflow",
        items: [
            {
                question: "What is your web development process?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "How long does it take to develop a website?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Will I have input during the development process?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Do you offer project management for website development?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "How do you ensure the security of the websites you build?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
        ],
    },
    {
        title: "Features & Customization",
        items: [
            {
                question: "Can you integrate third-party services (e.g., payment gateways, CRMs)?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Is SEO included in your website development?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Do you provide e-commerce website development?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Can you help with domain registration and hosting?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Can you add new features or functionalities to my existing website?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
        ],
    },
    {
        title: "Support & Maintenance",
        items: [
            {
                question: "Do you offer post-launch support and maintenance?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "What if I need to update my website after it’s launched?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Will you provide training on how to manage my website?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "Do you offer website performance monitoring and optimization?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
            {
                question: "What happens if something goes wrong with my website?",
                answer: "We use modern technologies like React.js, Next.js, Node.js, and more.",
            },
        ],
    },
];

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<{ item: number; question: number | null }>({
        item: -1,
        question: null,
    });

    const toggleAccordion = (items: number, questionIndex: number) => {
        const isOpen =
            openIndex.item === items && openIndex.question === questionIndex;
        setOpenIndex({
            item: isOpen ? -1 : items,
            question: isOpen ? null : questionIndex,
        });
    };

    return (
        <main className="faq py-12 px-6 max-w-4xl mx-auto max-lg:max-w-full">
            <h2 className="mb-12 text-center">FAQs</h2>

            {faqData.map((item, items) => (
                <div key={items} className="mb-12">
                    <h3 className="font-bold mb-6 text-center">{item.title}</h3>
                    <div>
                        {item.items.map((item, questionIndex) => (
                            <div
                                key={questionIndex}
                                className="pb-6 mb-6 border-b"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAccordion(items, questionIndex)}
                                >
                                    <p className="font-semibold">{item.question}</p>
                                    <div
                                        className={`w-10 h-10 flex items-center justify-center transition-transform duration-300`}
                                    >
                                        {openIndex.item === items && openIndex.question === questionIndex ? (
                                            <Image src={MinusIcon} alt="Minus Icon" width={24} height={24} />
                                        ) : (
                                            <Image src={PlusIcon} alt="Plus Icon" width={24} height={24} />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex.item === items &&
                                            openIndex.question === questionIndex
                                            ? "max-h-[400px] mt-4"
                                            : "max-h-0"
                                        }`}
                                >
                                    <p className="mt-4">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
};

export default Faq;
