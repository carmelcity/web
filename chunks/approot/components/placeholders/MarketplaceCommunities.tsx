export const MarketplaceCommunities = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="h-5 w-32 bg-cyan/50 animate-pulse mb-5"></div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col relative sm:w-96 mt-5 sm:mt-0 sm:mr-5 h-52 bg-cyan/20 animate-pulse hover:cursor-pointer hover:bg-dark-green/70 group hover:brightness-100">
          <div className="p-[0.7px] h-full brightness-75 group-hover:brightness-100"></div>
          <div className="absolute p-2 bottom-2 z-10">
            <div className={``}>{}</div>
          </div>
          <div className="bg-gradient-to-t from-black to-[#052F3500] absolute w-full h-32 bottom-0"></div>
        </div>

        <div className="flex flex-col relative sm:w-96 mt-5 sm:mt-0 sm:mr-5 h-52 bg-cyan/20 animate-pulse hover:cursor-pointer hover:bg-dark-green/70 group hover:brightness-100">
          <div className="p-[0.7px] h-full brightness-75 group-hover:brightness-100"></div>
          <div className="absolute p-2 bottom-2 z-10">
            <div className={``}>{}</div>
          </div>
          <div className="bg-gradient-to-t from-black to-[#052F3500] absolute w-full h-32 bottom-0"></div>
        </div>

        <div className="flex flex-col relative sm:w-96 mt-5 sm:mt-0 sm:mr-5 h-52 bg-cyan/20 animate-pulse hover:cursor-pointer hover:bg-dark-green/70 group hover:brightness-100">
          <div className="p-[0.7px] h-full brightness-75 group-hover:brightness-100"></div>
          <div className="absolute p-2 bottom-2 z-10">
            <div className={``}>{}</div>
          </div>
          <div className="bg-gradient-to-t from-black to-[#052F3500] absolute w-full h-32 bottom-0"></div>
        </div>
      </div>
    </div>
  );
};
