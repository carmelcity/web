export const StatsPlaceholder = () => {
  return (
    <div className="m-8 ">
      <span className={`w-full font-normal flex items-start text-lg`}></span>
      <div className="block lg:flex">
        <div className="flex-grow flex mt-5 p-5 lg:w-60 h-24 bg-dark-green-secondary bg-opacity-20 border border-cyan border-opacity-20 border-solid border-1 lg:mr-5">
          <div className="bg-cyan animate-pulse rounded w-1/5 h-full mr-5 flex items-center"></div>
          <div className="flex flex-col">
            <span className={`font-light`}></span>
            <span className={`mr-auto text-xl font-bold`}></span>
          </div>
        </div>
        <div className="hidden lg:flex flex-grow flex mt-5 p-5 lg:w-60 h-24 bg-dark-green-secondary bg-opacity-20 border border-cyan border-opacity-20 border-solid border-1 lg:mr-5">
          <div className="bg-cyan animate-pulse bg-opacity-20 rounded w-1/5 h-full mr-5 flex items-center"></div>
          <div className="flex flex-col">
            <span className={`font-light`}></span>
            <span className={`mr-auto text-xl font-bold`}></span>
          </div>
        </div>
        <div className="hidden lg:flex flex-grow flex mt-5 p-5 lg:w-60 h-24 bg-dark-green-secondary bg-opacity-20 border border-cyan border-opacity-20 border-solid border-1 lg:mr-5">
          <div className="bg-cyan animate-pulse rounded w-1/5 h-full mr-5 flex items-center"></div>
          <div className="flex flex-col">
            <span className={`font-light`}></span>
            <span className={`mr-auto text-xl font-bold`}></span>
          </div>
        </div>
        <div className="hidden lg:flex flex-grow flex mt-5 p-5 lg:w-60 h-24 bg-dark-green-secondary bg-opacity-20 border border-cyan border-opacity-20 border-solid border-1 lg:mr-5">
          <div className="bg-cyan bg-opacity-20 animate-pulse rounded w-1/5 h-full mr-5 flex items-center"></div>
          <div className="flex flex-col">
            <span className={`font-light`}></span>
            <span className={`mr-auto text-xl font-bold`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
