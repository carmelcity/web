export const StoryItemPlaceholder = () => {
  return (
    <div className="w-full bg-cyan bg-opacity-5 mt-2">
      <div className="flex flex-col justify-end relative">
        <div className="w-full h-[400px] block" />
        <div
          className={`h-auto justify-between p-2 sm:p-5 lg:p-10 flex w-full flex-col absolute bg-gradient-to-t from-[#052F35] to-[#052F3500]`}>
          <div className="flex gap-5">
            <span
              id="tag"
              className={`w-20 h-5 bg-[#0B6F6F] bg-opacity-25 border border-light-primary border-[0.5px] border-opacity-50 backdrop-blur-sm animate-pulse`}></span>
            <span
              id="tag"
              className={`w-20 h-5 bg-[#0B6F6F] bg-opacity-45 border border-light-primary border-[0.5px] border-opacity-50 backdrop-blur-sm animate-pulse`}></span>
            <span
              id="tag"
              className={`w-20 h-5 bg-[#0B6F6F] bg-opacity-20 border border-light-primary border-[0.5px] border-opacity-50 backdrop-blur-sm animate-pulse`}></span>
          </div>
          <div className={`flex h-8 bg-cyan bg-opacity-30 mt-5 md:w-3/5 font-bold`}></div>
          <div className={`flex h-8 bg-cyan bg-opacity-20 mt-2 md:w-2/5 font-bold mb-2`}></div>
          <div className="flex flex-row gap-2 items-center justify-between">
            <div className="h-9 w-full mb-1 flex">
              <div className="mr-auto bg-transparent flex">
                <div className="flex items-center">
                  <div
                    className="w-7 h-7 z-10 bg-transparent"
                    style={{
                      clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
                    }}>
                    <div className="w-8 h-8 bg-cyan bg-opacity-40 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col ml-2">
                  <div className="bg-cyan bg-opacity-10 mt-2 w-16 h-2"></div>
                  <div className="bg-cyan bg-opacity-10 mt-1 w-16 h-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
