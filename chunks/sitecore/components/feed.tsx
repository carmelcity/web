import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default () => {
  return (
    <div className="h-full overflow-y-auto">
      <h1
        className={`text-3xl font-extrabold text-white sticky top-0 bg-gradient-to-r from-green-800 to-gray-900 py-6 px-6 z-10 shadow-md w-full ${montserrat.className}`}>
        Your Feed
      </h1>
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 bg-opacity-30 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm min-h-[200px] flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-gray-100 text-xl mb-2">Tweet {i + 1}</h2>
              <p className="text-gray-300">
                This is a sample tweet content. It can be longer and may contain #hashtags and @mentions. The card is
                now larger and more transparent, allowing the background to show through.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 text-gray-400">
              <span>@user{i + 1}</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
