import { readexPro, orbitron } from '~/components/fonts';

export const InfoCard = (props: any) => {
  return (
    <div className="block bg-transparent mb-5 xxs:-ml-8 md:ml-0 text-left mb-14">
      <div className="block md:flex items-center">
        <div className={`${readexPro.className} bg-cyan text-dark-green-secondary px-8 py-2 h-auto`}>
          {props.tagText}
        </div>
        <p
          className={`${orbitron.className} text-l font-thin text-cyan mb-2 sm:mb-0 sm:ml-5 sm:mr-5 uppercase tracking-[0.3em]`}>
          {props.totalAmount}
        </p>
      </div>
      <p className={`${orbitron.className} text-3xl font-thin text-cyan uppercase tracking-[0.3em] mt-5`}>
        {props.title}
      </p>
      <div className="w-full md:w-2/3">
        <p className={`${readexPro.className} mb-3 text-sm font-normal text-gray-700 dark:text-gray-400`}>
          {props.description}
        </p>
      </div>
    </div>
  );
};
