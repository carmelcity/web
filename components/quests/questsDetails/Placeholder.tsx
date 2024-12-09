export const PlaceholderCard = () => {
  return (
    <div className="block lg:flex bg-primary-background-blend m-5 lg:ml-0 w-5/6">
      <div className="sm:mb-0 sm:mr-4 flex justify-center">
        <div style={{ position: 'relative' }}>
          <div className="bg-dark-green-secondary border border-cyan h-32 w-40 rounded animate-pulse m-5"></div>
        </div>
      </div>
      <div className="block lg:flex lg:flex-col p-4 leading-normal lg:w-2/3 mt-1">
        <div className="bg-dark-green-secondary border border-cyan w-full lg:w-96 h-10 animate-pulse"></div>
        <div className="bg-dark-green-secondary mt-2 w-full lg:w-5/6 h-3 animate-pulse"></div>
        <div className="bg-cyan mt-2 w-full lg:w-2/3 h-3 animate-pulse"></div>
        <div className="bg-dark-green-secondary mt-2 w-full lg:w-4/5 h-3 animate-pulse"></div>
        <div className="bg-cyan mt-2 w-full lg:w-5/6 h-3 animate-pulse"></div>
      </div>
      <div className="border border-cyan bg-dark-green-secondary m-3 h-10 mt-10 lg:mt-16 mb-4 lg:w-48 text-cyan font-bold animate-pulse"></div>
    </div>
  );
};
