export const ProfileHeaderPlaceholder = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full mb-4 pb-10 bg-gradient-to-b from-cyan/50 to-[#052F3500] h-[800px]">
      <div
        className={`
                  w-full flex justify-center
                   relative h-96
                  `}>
        <div className="mask mask-hexagon bg-primary bg-opacity-20 absolute top-[59%] xs:top-[67%] xs:left-10 xs:left-10 animate-pulse">
          <div className="mask lg:w-48 lg:h-48 w-48 h-48 mask-hexagon object-fit" />
        </div>
      </div>
      <div className={`relative z-10 mx-auto mt-24 sm:mt-0 sm:ml-60 w-32 h-4 bg-cyan bg-opacity-20`}></div>
      <div className={`flex mx-auto mt-0 sm:ml-60 w-60 h-3 bg-cyan bg-opacity-10 mt-4`}></div>
      <div className={`mr-auto mx-5 sm:ml-60 w-60 h-3 bg-cyan bg-opacity-10 mt-20`}></div>
      <div className={`hidden xl:flex lg:absolute top-[40%] right-10 w-80 2xl:w-96 h-96 bg-cyan bg-opacity-5 mt-4`}></div>
      <div className={`mr-auto ml-5 sm:ml-60 w-80 sm:w-96 h-32 bg-cyan bg-opacity-10 mt-4`}></div>
      <div className={`mr-auto ml-5 sm:ml-60 w-40 h-10 bg-transparent mt-10 border border-2 border-cyan border-opacity-10`}></div>
    </div>
  );
};

export const ProfileHeaderNotEditablePlaceholder = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full mb-4 pb-10 bg-gradient-to-b from-cyan/50 to-[#052F3500] h-[600px]">
      <div
        className={`
                  w-full flex justify-center
                   relative h-96
                  `}>
        <div className="mask mask-hexagon bg-primary bg-opacity-20 absolute top-[59%] xs:top-[67%] xs:left-10 xs:left-10 animate-pulse">
          <div className="mask lg:w-48 lg:h-48 w-48 h-48 mask-hexagon object-fit" />
        </div>
      </div>
      <div className={`relative z-10 mx-auto mt-24 sm:mt-0 sm:ml-60 w-32 h-4 bg-cyan bg-opacity-20`}></div>
      <div className={`flex mx-auto mt-0 sm:ml-60 w-60 h-3 bg-cyan bg-opacity-10 mt-4`}></div>
      <div className={`mr-auto mx-5 sm:ml-60 w-60 h-3 bg-cyan bg-opacity-10 mt-4`}></div>
    </div>
  );
};
