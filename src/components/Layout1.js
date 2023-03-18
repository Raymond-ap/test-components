import React, { useState } from "react";

function Layout1() {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="bg-white p-3 max-w-7xl m-auto">
      <div className="my-4 flex items-end justify-end">
        <DropdownButton options={options} />
      </div>
      <div className="flex flex-row items-center justify-between py-4 flex-wrap">
        <div className="flex flex-row items-center gap-x-2">
          <h4 className="text-lg font-bold capitalize">Status:</h4>
          <p className="text-lg text-gray-500 capitalize">
            (Prices are inclusive of all taxes)
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <h4 className="text-lg font-bold capitalize">Total Batches:</h4>
          <p className="text-lg text-gray-500 capitalize">5</p>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <h4 className="text-lg font-bold uppercase">
            Total Batches counted:
          </h4>
          <p className="text-lg text-gray-500 capitalize">2</p>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <h4 className="text-lg font-bold uppercase">remaining ammount:</h4>
          <p className="text-lg text-gray-500 capitalize">$600</p>
        </div>
      </div>

      {/* card */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-5">
        <div className="w-full p-3 rounded-lg border border-gray-300 bg-blue-600">
          <h4 className="text-base font-bold text-center uppercase text-white">
            first batch
          </h4>

          <div className="mt-5">
            <p className="text-base text-gray-300 capitalize">start date:</p>
            <p className="text-base text-gray-300 capitalize">end date:</p>
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border border-gray-300 bg-blue-600">
          <h4 className="text-base font-bold text-center uppercase text-white">
            second batch
          </h4>

          <div className="mt-5">
            <p className="text-base text-gray-300 capitalize">start date:</p>
            <p className="text-base text-gray-300 capitalize">end date:</p>
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border border-gray-300 bg-blue-600">
          <h4 className="text-base font-bold text-center uppercase text-white">
            third batch
          </h4>

          <div className="mt-5">
            <p className="text-base text-gray-300 capitalize">start date:</p>
            <p className="text-base text-gray-300 capitalize">end date:</p>
          </div>
        </div>
        <div className="w-full p-3 rounded-lg border border-gray-300 bg-blue-600">
          <h4 className="text-base font-bold text-center uppercase text-white">
            fourth batch
          </h4>

          <div className="mt-5">
            <p className="text-base text-gray-300 capitalize">start date:</p>
            <p className="text-base text-gray-300 capitalize">end date:</p>
          </div>
        </div>
      </div>

      {/* forms */}

      <div className="w-full h-0.5 bg-slate-200 my-7"></div>

      <div>
        <h4 className="text-lg font-bold capitalize text-center">
          create batch form
        </h4>

        <div className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-5 mt-3">
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-5 mt-3">
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-5 mt-3">
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="w-full">
              <input
                placeholder="Batch name"
                type="text"
                className="w-full p-2 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center">
          <button className="bg-blue-600 text-white p-2 rounded-lg lg:w-96 md:w-96 hover:bg-blue-700 transition duration-300 ease-in-out">
            create batch
          </button>
        </div>
      </div>
    </div>
  );
}

function DropdownButton({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout1;
