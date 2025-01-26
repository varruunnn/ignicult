const RewardsPage = () => {
  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <header>
        <h1 className="text-[#92FF00] text-3xl bg-black font-roboto pl-10 font-semibold">Welcome to <br /> Ignicult  Rewards</h1>
        <p className="text-white font-roboto  bg-black  pl-10 mt-[15px]">At Ignicult, we reward both casual players and <br />blockchain enthusiasts. Here’s what you can earn <br />by joining us:</p>
      </header>
      <section className="">
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]">Gameplay Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]"> Achievement Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]">Engagement Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[5px]">Weekly Leaderboard <br />Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]">Special Event Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]">Future Rewards</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
        <div className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9">
          <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[15px]">Security and Fairness</h3>
          <img src="/arrow.svg" alt="arrow" className="absolute right-[20px] top-[20px]" />
        </div>
      </section>
    </div>
  )
}

export default RewardsPage