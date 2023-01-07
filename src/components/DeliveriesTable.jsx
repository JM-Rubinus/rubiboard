import React from 'react';
import { deliverydata } from './DeliveryTableData';

const DeliveriesTable = () => {
  return (
    <main className="flex-1 xl:ml-64 bg-basicDark">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white">Deliveries</h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 mt-7">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-white">Details</h1>
              <p className="mt-2 text-sm text-white">
                Here you can see details of current deliveries, and completed
                deliveries.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-productGreen px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Create Delivery
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-white ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-basicDark">
                    <thead className="bg-darkTheme">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                        >
                          Name | Contact
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Package Data
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-basicDark bg-darkTheme">
                      {deliverydata.map((person) => (
                        <tr key={person.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="ml-1">
                                <div className="font-medium text-white">
                                  {person.name}
                                </div>
                                <div className="text-white">{person.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                            <div className="text-white">{person.title}</div>
                            <div className="text-white">
                              {person.department}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                            <span className="inline-flex rounded-full bg-productGreen px-2 text-xs font-semibold leading-5 text-green-800">
                              Complete
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                            {person.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" className="text-white">
                              More Details
                              <span className="sr-only">, {person.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeliveriesTable;
