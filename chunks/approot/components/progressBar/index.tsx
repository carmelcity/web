export const ProgressBar = ({ level, moreClasses }: any) => {
  return (
    <div className={`bg-black rounded-full h-1 ${moreClasses ?? ''}`}>
      <div className="bg-cyan h-1 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  );
};
