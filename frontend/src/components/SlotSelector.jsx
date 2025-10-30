import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const SlotSelector = ({ docSlots, slotIndex, slotTime, setSlotTime }) => {
  const containerRef = useRef(null);

  // Auto-scroll to last item on load
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [docSlots]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.scrollLeft > 0 ? -200 : 0,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center relative w-full mt-4">
      {/* Left Arrow */}
      <button
        className="p-2 bg-[#C2B2FA]/40 rounded-full shadow-md hover:bg-[#A7C7E7] transition text-white"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={16} />
      </button>

      {/* Slots */}
      <div className="overflow-x-hidden flex-1 mx-2">
        <div
          ref={containerRef}
          className="flex items-center gap-3 w-full px-4 py-2 snap-x snap-mandatory scrollbar-hide"
        >
          {docSlots.length > 0 &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item?.time)}
                className={`text-sm font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer snap-end transition-all duration-300 ${
                  item.time === slotTime
                    ? "bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] text-white shadow-lg"
                    : "bg-[#EAE8F9] text-[#41729F] hover:bg-[#C2B2FA]"
                }`}
              >
                {item.time === false ? "No slot available" : item?.time?.toLowerCase()}
              </p>
            ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="p-2 bg-[#C2B2FA]/40 rounded-full shadow-md hover:bg-[#A7C7E7] transition text-white"
        onClick={scrollRight}
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

export default SlotSelector;
