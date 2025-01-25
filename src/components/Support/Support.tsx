
const Support = () => {
  return (
    <section className="py-4 px-6 text-white max-w-md mx-auto">
        <h2 className="text-center text-3xl font-roboto text-[#82E300] font-bold mb-16">
            Happy To Help You
        </h2>
        <div className="grid gap-1">
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/chat.svg" alt="Fire Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Ignicult is a revolutionary hyper-casual gaming platform where you can play, earn, and enjoy with both off-chain and on-chain rewards!
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/mail.svg" alt="Joystick Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Discover a variety of exciting games that cater to all types of players.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/web.svg" alt="Trophy Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Earn IGNix points for real-world rewards and use Cultix to unlock on-chain benefits and ownership.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Support