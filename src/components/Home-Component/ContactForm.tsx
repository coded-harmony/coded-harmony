import Image from "next/image";
import React from "react";
import Submit from "../../../public/images/icons/submit.svg";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md border border-[#F56210] max-lg:max-w-full max-sm:p-4">
      <h3 className="text-2xl mb-2">Contact Us</h3>
      <p className="text-sm text-[#90949C] mb-7">We respond within 24 hours</p>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[26px]">
          <div>
            <label htmlFor="name" className="text-[#90949C] text-lg mb-2 block">Name</label>
            <input type="text" placeholder="Name" className="border border-[#90949C] rounded-md p-2 w-full focus:outline-none " />
          </div>
          <div>
            <label htmlFor="name" className="text-[#90949C] text-lg mb-2 block">Phone</label>
            <input type="text" placeholder="Phone" className="border border-[#90949C] rounded-md p-2 w-full focus:outline-none " />
          </div>
        </div>
        <div className="mb-[26px]">
          <label htmlFor="email" className="text-[#90949C] text-lg mb-2 block">Phone</label>
          <input type="email" placeholder="Email" className="border border-[#90949C] rounded-md p-2 w-full focus:outline-none " />
        </div>
        <div className="mb-[26px]">
          <label htmlFor="email" className="text-[#90949C] text-lg mb-2 block">Phone</label>
          <select className="border border-[#90949C] rounded-md p-2 w-full focus:outline-none ">
            <option value="">Select</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div className="mb-[21px]">
          <label htmlFor="email" className="text-[#90949C] text-lg mb-2 block">Phone</label>
          <textarea placeholder="Type here..." className="border border-[#90949C] rounded-md p-2 w-full focus:outline-none max-h-40 h-28 min-h-24"></textarea>
        </div>
        <button type="submit" className="btn-style w-full !rounded-md mb-3">
          <Image src={Submit} alt="icon" />
          Submit
        </button>
      </form>
      <p className="text-xs text-[#90949C]">
        Your privacy is our priority. Rest assured that all your details at
        CodedHarmony are securely protected and confidential.
      </p>
    </div>
  );
};

export default ContactForm;
