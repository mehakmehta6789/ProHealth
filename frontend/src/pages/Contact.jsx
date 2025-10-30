import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Contact = () => {
  return (
    <MoveUpOnRender id="contact">
      {/* Section Header */}
      <div className="text-center pt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#41729F]">
          CONTACT <span className="text-[#C2B2FA] font-semibold">US</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="my-12 flex flex-col md:flex-row justify-center items-start gap-10 max-w-7xl mx-auto p-6 bg-[#EAE8F9] rounded-lg shadow-lg">
        
        {/* Image Section */}
        <img
          className="w-full md:max-w-[360px] rounded-lg border-2 border-[#C2B2FA] shadow-md"
          src={assets.contact_image}
          alt="Contact Illustration"
        />

        {/* Info Section */}
        <div className="flex flex-col justify-center items-start gap-6 text-sm text-[#41729F] md:w-2/4">
          
          {/* Office Info */}
          <p className="font-semibold text-lg text-[#C2B2FA]">Our OFFICE</p>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555‑0132 <br /> Email: help@ProHealth.com
          </p>

          {/* Careers */}
          <p className="font-semibold text-lg text-[#C2B2FA]">Careers at ProHealth</p>
          <p>
            Learn more about our teams and job openings.
          </p>

          {/* Button */}
          <button className="px-8 py-4 text-sm rounded-full border border-[#41729F] 
                             bg-white text-[#41729F] font-medium 
                             hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] hover:text-white 
                             transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default Contact;
