import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive = location.pathname === "/" || location.pathname === "/home";
  const isProfileActive = location.pathname === "/profile";

  const handleClick = () => {
    alert("I am Glowing dv");
  };

  return (
    <footer className="fixed bottom-0 w-full h-[75px] bg-[#363636] text-white flex justify-around items-center">
      <div className="relative flex w-full h-[75px] flex-col items-center justify-center space-y-6">
        <img
          src="footer.svg"
          alt=""
          className="w-[68px] h-[68px] absolute top-[-25px] z-10"
          onClick={handleClick}
        />

        {/* Home Button */}
        <button
          onClick={() => navigate("/home")}
          className={`flex flex-col max-[399px]:left-[25px] left-[40px] top-[10px] absolute items-center cursor-pointer ${
            isHomeActive ? "text-green-500" : "text-white"
          }`}
        >
          <img
            src="/home.svg"
            alt="Home Icon"
            className="w-[36px] h-[36px] top-[-15px] relative"
          />
          <span
            className={`text-sm font-bold top-[-15px] relative font-roboto ${
              isHomeActive ? "text-[#82E300]" : "text-white"
            }`}
            style={{ textShadow: "2px 2px 2px black" }}
          >
            Home
          </span>
        </button>

        <img
          src="/vec.svg"
          alt="Play Now Background"
          className="w-[242px] h-[70px] absolute top-[-20px]"
        />

        <span
          className="absolute text-[#282828] font-semibold font-roboto text-lg"
          style={{ top: "30%", left: "50%", transform: "translate(-50%, -10%)" }}
        >
          Play Now
        </span>
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col right-[40px] top-[20px] absolute items-center cursor-pointer max-[399px]:right-[25px] ${
            isProfileActive ? "text-[#82E300]" : "text-white"
          }`}
        >
          <img
            src="/Group.svg"
            alt="Profiles Icon"
            className="w-[26px] h-[26px] top-[-18px] relative"
          />
          <span
            className={`text-sm font-bold top-[-15px] relative font-roboto ${
              isProfileActive ? "text-[#82E300]" : "text-white"
            }`}
            style={{ textShadow: "2px 2px 2px black" }}
          >
            Profiles
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
