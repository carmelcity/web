export const ActionButton = ({ title, onPress }: any)  => {
    return <div className="mt-8 lg:ml-auto text-right flex flex-col">
    <div className="mt-auto mb-1 ">
      <button
        className="border border-cyan bg-transparent hover:bg-dark-green-secondary py-2 px-4 mb-4 lg:w-48 text-cyan font-bold w-full"
        onClick={onPress}>
        { title } <span className="ml-1 text-cyan text-lg">&#8594;</span>
      </button>
    </div>
  </div>
  } 
  