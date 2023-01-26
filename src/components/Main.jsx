import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { main } from './MainExports';

const Main = () => {
  return (
    <main className="flex-1 xl:ml-64 bg-basicDark mb-48">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="bg-indigo-700">
              <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Rubiboard.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Welcome to Rubi Logistics Dashboard for Businesses. Manage
                  your logistics on our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
