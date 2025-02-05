import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive = location.pathname === "/" || location.pathname === "/home";
  const isProfileActive = location.pathname === "/profile";

  const handleClick = () => {
    alert("I am Glowing dv");
  };

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 w-full h-[75px] bg-[#363636] text-white flex justify-around items-center"
    >
      <div className="relative flex w-full h-[75px] flex-col items-center justify-center space-y-6">
        <motion.img
          src="footer.svg"
          alt=""
          className="w-[68px] h-[68px] absolute top-[-30px] z-10"
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
        />
        <motion.button
          onClick={() => navigate("/home")}
          whileHover={{ scale: 1.05 }}
          className={`flex flex-col max-[399px]:left-[25px] left-[40px] top-[10px] absolute items-center cursor-pointer ${
            isHomeActive ? "text-green-500" : "text-white"
          }`}
        >
          <motion.img
            src="/home.svg"
            alt="Home Icon"
            className="w-[36px] h-[36px] top-[-15px] relative"
            whileHover={{ rotate: 10 }}
          />
          <motion.span
            className={`text-sm font-bold top-[-15px] relative font-roboto ${
              isHomeActive ? "text-[#82E300]" : "text-white"
            }`}
            style={{ textShadow: "2px 2px 2px black" }}
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.span>
        </motion.button>
        <motion.img
          src="/vec.svg"
          alt="Play Now Background"
          className="w-[242px] h-[70px] absolute top-[-20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.span
          className="absolute text-[#282828] font-semibold font-roboto text-lg"
          style={{ top: "30%", left: "40%", transform: "translate(-50%, -10%)" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Play Now
        </motion.span>
        <motion.button
          onClick={() => navigate("/profile")}
          whileHover={{ scale: 1.05 }}
          className={`flex flex-col right-[40px] top-[20px] absolute items-center cursor-pointer max-[399px]:right-[25px] ${
            isProfileActive ? "text-[#82E300]" : "text-white"
          }`}
        >
          <motion.img
            src="/Group.svg"
            alt="Profiles Icon"
            className="w-[26px] h-[26px] top-[-18px] relative"
            whileHover={{ rotate: -10 }}
          />
          <motion.span
            className={`text-sm font-bold top-[-15px] relative font-roboto ${
              isProfileActive ? "text-[#82E300]" : "text-white"
            }`}
            style={{ textShadow: "2px 2px 2px black" }}
            whileHover={{ scale: 1.1 }}
          >
            Profiles
          </motion.span>
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
