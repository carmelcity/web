export const WalletActivityPlaceholder = () => {
  return (
    <div className="flex flex-col relative mx-5 mb-5 lg:mx-8 p-3 sm:p-7 lg:w-full h-auto min-h-[560px] bg-black lg:mr-0 rounded-md z-10">
      <div className={` font-light text-xl mb-2 p-2 w-40 h-10 bg-cyan/50 animate-pulse`}></div>
      <div className={`flex flex-col h-full items-center w-full`}>
        <div className="m-auto text-center">
          <div className={`w-32 h-6 bg-cyan/20 animate-pulse mx-auto`}></div>
          <div className={`w-72 h-4 bg-cyan/10 animate-pulse mt-2 mb-4`}></div>
          <div
            className={`mt-4 mx-auto px-3 w-40 h-12 bg-cyan/20 animate-pulse border border-cyan border-opacity-20 border-solid border-1`}></div>
        </div>
      </div>
    </div>
  );
};
