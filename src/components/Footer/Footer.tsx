const Footer = () => {
    const handleClick = () => {
        alert("I am Glowing dv")
    }
  return (
    <footer className="fixed bottom-0 w-full h-[75px] bg-[#363636] text-white flex justify-around items-center">
    <div className="relative flex w-full h-[75px] flex-col items-center justify-center space-y-6">
      <img
        src="footer.svg"
        alt=""
        className="w-[68px] h-[68px] absolute top-[-25px] z-10"
        onClick={handleClick}
      />
      <button className="flex flex-col left-[40px] top-[1px] absolute items-center cursor-pointer text-green-500">
        <img
          src="/home.svg"
          alt="Home Icon"
          className="w-[46px] h-[46px] top-[-10px] relative"
        />
        <span
          className="text-sm font-bold top-[-17px]  font-roboto text-[#82E300] relative"
          style={{
            textShadow: "2px 2px 2px black",
          }}
        >
          Home
        </span>
      </button>
      <img
        src="/vec.svg"
        alt="Play Now Background"
        className="w-[242px] h-[70px] absolute top-[-20px] "
      />
      <span
        className="absolute text-[#282828] font-semibold font-roboto text-lg"
        style={{ top: "30%", left: "50%", transform: "translate(-50%, -10%)" }}
      >
        Play Now
      </span>
      <button className="flex flex-col right-[40px] top-[10px] absolute items-center cursor-pointer text-green-500">
        <img
          src="/Group.svg"
          alt="Profiles Icon"
          className="w-[36px] h-[36px] top-[-15px] relative"
        />
        <span
          className="text-sm font-bold top-[-17px] font-roboto text-[#82E300] relative"
          style={{
            textShadow: "2px 2px 2px  black",
          }}
        >
          Profiles
        </span>
    </button>
    </div>
  </footer>
  )
}

export default Footer