export const SidebarNavigationPlaceholder = () => {
  return (
    <div className="flex grow sticky top-0 flex-col gap-y-5 overflow-y-auto bg-gradient-to-br from-dark-green to-transparent px-6 w-full mr-auto md:h-screen">
      <div className="flex h-16 shrink-0 items-center">
        <img src="/images/logo/logo-white-with-white-text.svg" alt="logo" className="h-12 hidden md:block" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <li>
                <div className="flex">
                  <div className="w-8 h-6 bg-cyan animate-pulse mr-5"></div>
                  <div className="w-2/3 h-6 bg-dark-green-secondary animate-pulse"></div>
                </div>
              </li>
              <li>
                <div className="flex mt-6">
                  <div className="w-8 h-6 bg-dark-green-secondary animate-pulse mr-5"></div>
                  <div className="w-2/3 h-6 bg-cyan animate-pulse bg-opacity-20"></div>
                </div>
              </li>
              <li>
                <div className="flex mt-6">
                  <div className="w-8 h-6 bg-cyan animate-pulse bg-opacity-20 animate-pulse mr-5"></div>
                  <div className="w-2/3 h-6 bg-dark-green-secondary animate-pulse"></div>
                </div>
              </li>
              <li>
                <div className="flex mt-6">
                  <div className="w-8 h-6 bg-dark-green-secondary animate-pulse mr-5"></div>
                  <div className="w-2/3 h-6 bg-cyan animate-pulse  bg-opacity-60"></div>
                </div>
              </li>
              <li>
                <div className="flex mt-6">
                  <div className="w-8 h-6 bg-cyan animate-pulse mr-5"></div>
                  <div className="w-2/3 h-6 bg-dark-green-secondary animate-pulse"></div>
                </div>
              </li>
            </ul>
          </li>
          <li className="-mx-6 mt-auto"></li>
        </ul>
      </nav>
      <div className="h-96 w-full bg-cyan bg-opacity-10 mb-10"></div>
      <div className="h-9 w-full bg-cyan bg-opacity-20 mb-5 flex items-center">
        <div className="mr-auto ml-1 bg-transparent flex justify-center items-center">
          <div className="flex items-center">
            <div
              className="w-7 h-7 m-auto z-10 bg-transparent"
              style={{
                clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
              }}>
              <div className="w-8 h-8 bg-cyan bg-opacity-40 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-center ml-3"></div>
          </div>
        </div>
        <div className="w-9 h-full ml-auto bg-dark-green-secondary flex justify-center items-center cursor-pointer"></div>
      </div>
    </div>
  );
};
