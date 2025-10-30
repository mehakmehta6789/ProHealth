import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const About = () => {
  return (
    <MoveUpOnRender id="about">
      <div className="bg-[#EAE8F9] text-[#41729F]">
        {/* Section Header */}
        <div className="text-center pt-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="text-[#C2B2FA]">US</span>
          </h2>
        </div>

        {/* Top Section */}
        <div className="my-12 flex flex-col md:flex-row items-center md:items-start gap-12 max-w-7xl mx-auto px-6 md:px-10">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-lg"
            src={assets.about_image}
            alt="About Us"
          />

          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm leading-relaxed">
            <p>
              Welcome to ProHealth, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At ProHealth, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              ProHealth is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, ProHealth is here to support you every
              step of the way.
            </p>
            <b className="text-[#C2B2FA] text-lg">Our Vision</b>
            <p>
              Our vision at ProHealth is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#41729F]">
            Why <span className="text-[#C2B2FA]">Choose Us</span>
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-8 max-w-7xl mx-auto px-6 md:px-10">
            {/* Card 1 */}
            <div className="flex-1 border border-[#C2B2FA] px-8 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] cursor-pointer
                            transition-all duration-300 hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] hover:text-white rounded-lg shadow-md">
              <b className="text-lg">Efficiency:</b>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 border border-[#C2B2FA] px-8 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] cursor-pointer
                            transition-all duration-300 hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] hover:text-white rounded-lg shadow-md">
              <b className="text-lg">Convenience:</b>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 border border-[#C2B2FA] px-8 md:px-12 py-8 sm:py-12 flex flex-col gap-4 text-[15px] cursor-pointer
                            transition-all duration-300 hover:bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] hover:text-white rounded-lg shadow-md">
              <b className="text-lg">Personalization:</b>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default About;
