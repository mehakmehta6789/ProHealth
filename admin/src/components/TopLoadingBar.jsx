const TopLoadingBar = ({ message = "Loading..." }) => {
  return (
    <div
      className="h-1 w-0 absolute top-0 left-0 z-40 
      bg-gradient-to-r from-[#FFB6C1] via-[#C2B2FA] to-[#A7C7E7] 
      animate-expandWidth shadow-md rounded-full opacity-100"
    ></div>
  );
};

export default TopLoadingBar;
