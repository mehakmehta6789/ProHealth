import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EAE8F9] text-[#41729F]">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 grid md:grid-cols-[3fr_1fr_1fr] gap-6 md:gap-8 text-sm">
        {/* left section */}
        <div className="flex flex-col">
          <img className="w-28 md:w-32 mb-2" src={assets.logo_logo} alt="ProHealth Logo" />
          <p className="text-sm md:text-sm leading-tight max-w-xl text-justify">
            Your health, our priority.
          </p>
        </div>

        {/* center section */}
        <div>
          <p className="text-base md:text-lg font-semibold mb-2">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-[#C2B2FA] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[#C2B2FA] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#C2B2FA] cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-[#C2B2FA] cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="text-base md:text-lg font-semibold mb-2">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>Tel: (415) 555‑0132</li>
            <li>help@ProHealth.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7]">
        <p className="py-2 md:py-3 text-center text-white text-sm md:text-sm">
          © 2024 ProHealth. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
