import doubleCheckIcon from '~/images/DoubleCheckIcon.svg';
import checkIcon from '~/images/CheckedIcon.svg';
import wrongIcon from '~/images/WrongIcon.svg';
import Image from 'next/image';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Results = ({ quizzStatus }: any) => {
  const correctCount = quizzStatus.filter(
    (item: { answered: any; correct: any }) => item.answered === item.correct,
  ).length;

  return (
    <div className="block w-full lg:w-1/2 justify-center m-auto bg-dark-green-secondary h-full p-3">
      <div className={`${readexPro.className} text-xl font-extralight mb-5`}>Your results</div>
      <div className="flex items-center justify-center mb-5">
        <div className={`${readexPro.className} text-lg text-cyan inline-flex items-center`}>
          <Image src={doubleCheckIcon} alt="doubleCheck" className="mr-2" />
          {correctCount}/{quizzStatus.length} Correct Answers
        </div>
      </div>
      {quizzStatus.map((item: { question: any; correct: any; answered: any }, index: any) => (
        <div key={index} className="block items-center">
          <p className={`${readexPro.className} text-lg font-light mb-1 inline-flex items-center`}>{item.question}</p>
          <p
            className={`${readexPro.className} mb-5 font-thin flex items-center justify-center ${
              item.answered === item.correct ? 'text-cyan' : 'text-red-600'
            }`}>
            {item.answered === item.correct ? (
              <Image src={checkIcon} alt="doubleCheck" className="mr-2 items-center" />
            ) : (
              <Image src={wrongIcon} alt="wrongIcon" className="mr-2 items-center" />
            )}
            {item.answered}
          </p>
          {item.answered !== item.correct && (
            <p className={`${readexPro.className} text-lg font-thin mb-5 -mt-3 inline-flex items-center`}>
              Correct: {item.correct}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
