import { AddContact, DocumentDuplicateGrey } from '../icons';

export const WalletContactsPlaceholder = () => {
  return (
    <div
      className={`flex flex-col lg:w-5/6 mb-5 mx-5 rounded-md bg-black pl-7 py-7 z-10 max-h-[340px] lg:max-h-[300px]`}>
      <div className="flex items-center w-full pr-7">
        <div className={`w-32 h-7 bg-cyan/50 animate-pulse mb-2 p-2`}></div>
        <div className={`w-20 h-7 bg-cyan/40 animate-pulse mb-2 p-2 ml-auto`}></div>
      </div>
      <div className={`flex flex-start lg:flex-wrap lg:overflow-y-hidden overflow-x-auto lg:overflow-x-hidden mt-10`}>
        <div className="flex flex-col w-32 items-center">
          <AddContact />
        </div>

        <div className="flex flex-col mb-5 relative items-center w-32">
          <div
            className="w-24 h-28 z-10 mt-0.5 bg-dark-green-secondary"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div
            className="w-[99px] h-[115px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div className={`mx-auto mt-3 truncate w-28 h-5 bg-cyan/50 animate-pulse`}></div>
        </div>

        <div className="flex flex-col mb-5 relative items-center w-32">
          <div
            className="w-24 h-28 z-10 mt-0.5 bg-dark-green-secondary"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div
            className="w-[99px] h-[115px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div className={`mx-auto mt-3 truncate w-28 h-5 bg-cyan/50 animate-pulse`}></div>
        </div>

        <div className="flex flex-col mb-5 relative items-center w-32">
          <div
            className="w-24 h-28 z-10 mt-0.5 bg-dark-green-secondary"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div
            className="w-[99px] h-[115px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div className={`mx-auto mt-3 truncate w-28 h-5 bg-cyan/50 animate-pulse`}></div>
        </div>

        <div className="flex flex-col mb-5 relative items-center w-32">
          <div
            className="w-24 h-28 z-10 mt-0.5 bg-dark-green-secondary"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div
            className="w-[99px] h-[115px] mt-[0.4px] absolute bg-gradient-to-r from-cyan to-dark-cyan"
            style={{
              clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
            }}></div>
          <div className={`mx-auto mt-3 truncate w-28 h-5 bg-cyan/50 animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
};
