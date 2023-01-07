import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { main } from './MainExports';

const Main = () => {
  return (
    <main className="flex-1 xl:ml-64 bg-basicDark">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4">
              <div className="bg-basicDark">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-12">
                  <div className="space-y-12">
                    <ul
                      role="list"
                      className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                    >
                      {main.map((data) => (
                        <li
                          key={data.name}
                          className="rounded-lg bg-darkTheme py-10 px-6 text-center xl:px-10 xl:text-left hover:ease-in hover:duration-300 hover:outline-productGreen hover:outline-4 hover:outline"
                        >
                          <div className="space-y-6 xl:space-y-10">
                            <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                              <div className="space-y-1 text-lg font-medium leading-6">
                                <h3 className="text-white mb-7">{data.name}</h3>
                                <p className="cursor-pointer inline-flex items-center justify-center text-white hover:duration-300 bg-productGreen hover:bg-transparent hover:outline hover:outline-2 hover:outline-productGreen px-3 py-3 rounded-xl">
                                  {data.sm}
                                  <ChevronRightIcon className="ml-2 -mr-1 w-5 h-5" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
