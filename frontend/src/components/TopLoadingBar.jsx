const TopLoadingBar = ({ message = "Loading..." }) => {
  return (
    <div className="absolute top-0 left-0 h-1 w-0 z-40 bg-gradient-to-r from-[#FFB6C1] to-[#A7C7E7] animate-expandWidth opacity-100"></div>
  );
};

export default TopLoadingBar;
