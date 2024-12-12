import React, { useState } from 'react';
import Title from '~/components/title';
import { Orbitron } from 'next/font/google';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { ProgressBar } from '~/components/progressBar';
import { CheckBox } from './CheckBox';
import { Results } from './Results';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
});

export const Quizz = (quizz: any) => {
  const router = useRouter();
  const title = router.query.title || '';
  const data = quizz.quizz.data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [status, setStatus] = useState(
    data.map((item: any, index: any) => ({
      question: `${index + 1}. ${item.question}`,
      correct: item[item.correct],
      answered: '',
    })),
  );

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setStatus((prevStatus: any) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[currentIndex].answered = data[currentIndex][selectedOption];
      return updatedStatus;
    });
    setCurrentIndex(currentIndex + 1);
    setSelectedOption('');
  };

  const handleFinishQuizz = () => {
    handleNextQuestion();
  };

  const calculatePercentage = () => {
    const percentage = ((currentIndex + 1) / data.length) * 100;
    return percentage;
  };

  const handleDone = () => {
    // TO BE DEFINED -> use the state that contains all the data about the challenge
  };

  if (currentIndex === data.length) {
    return (
      <div className="w-5/6">
        <Title
          decription={title.toString()}
          moreClasses={`${orbitron.className} text-white uppercase text-sm sm:text-4xl mb-5`}
        />
        <Results quizzStatus={status} />
        <button className={`${readexPro.className} bg-cyan text-black p-3 mt-10 w-full lg:w-60`} onClick={handleDone}>
          Done
        </button>
      </div>
    );
  }
  return (
    <div className="w-5/6">
      <Title
        decription={title.toString()}
        moreClasses={`${orbitron.className} text-white uppercase text-sm sm:text-4xl`}
      />
      <ProgressBar level={calculatePercentage()} moreClasses={'m-auto w-40 mt-10 mb-10'} />
      <div>
        <span className={`${readexPro.className} text-xl sm:text-4xl font-light`}>
          {currentIndex + 1 + '. ' + data[currentIndex]?.question}
        </span>
        <ul className="flex flex-wrap mt-5 mb-5">
          <li className="w-full lg:w-1/2">
            {/* OPTION 1 BUTTON */}
            <div
              className={`flex items-center border h-14 border-2 m-2 ${
                selectedOption === 'A' ? 'border-cyan' : 'border-dark-green-secondary'
              }`}
              onClick={() => handleOptionSelect('A')}>
              <span className={`m-auto ${selectedOption === 'A' ? 'text-cyan' : 'text-white'}`}>
                {data[currentIndex]?.A}
              </span>
              <CheckBox checked={selectedOption === 'A'} />
            </div>
          </li>
          <li className="w-full lg:w-1/2">
            {/* OPTION 2 BUTTON */}
            <div
              className={`flex items-center border h-14 border-2 m-2 ${
                selectedOption === 'B' ? 'border-cyan' : 'border-dark-green-secondary'
              }`}
              onClick={() => handleOptionSelect('B')}>
              <span className={`m-auto ${selectedOption === 'B' ? 'text-cyan' : 'text-white'}`}>
                {data[currentIndex]?.B}
              </span>
              <CheckBox checked={selectedOption === 'B'} />
            </div>
          </li>
          <li className="w-full lg:w-1/2">
            {/* OPTION 3 BUTTON */}
            <div
              className={`flex items-center border h-14 border-2 m-2 ${
                selectedOption === 'C' ? 'border-cyan' : 'border-dark-green-secondary'
              }`}
              onClick={() => handleOptionSelect('C')}>
              <span className={`m-auto ${selectedOption === 'C' ? 'text-cyan' : 'text-white'}`}>
                {data[currentIndex]?.C}
              </span>
              <CheckBox checked={selectedOption === 'C'} />
            </div>
          </li>
          <li className="w-full lg:w-1/2">
            {/* OPTION 4 BUTTON */}
            <div
              className={`flex items-center border h-14 border-2 m-2 ${
                selectedOption === 'D' ? 'border-cyan' : 'border-dark-green-secondary'
              }`}
              onClick={() => handleOptionSelect('D')}>
              <span className={`m-auto ${selectedOption === 'D' ? 'text-cyan' : 'text-white'}`}>
                {data[currentIndex]?.D}
              </span>
              <CheckBox checked={selectedOption === 'D'} />
            </div>
          </li>
        </ul>
      </div>
      {currentIndex < data.length - 1 && (
        <button className={`${readexPro.className} bg-cyan text-black p-3 w-full lg:w-60`} onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
      {currentIndex === data.length - 1 && (
        <button className={`${readexPro.className} bg-cyan text-black p-3 w-full lg:w-60`} onClick={handleFinishQuizz}>
          Finish Quizz
        </button>
      )}
    </div>
  );
};
