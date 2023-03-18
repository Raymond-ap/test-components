import React, { useState } from "react";

function Layout2() {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="bg-white p-3 max-w-7xl m-auto">
      <div className="my-4 flex items-center justify-between">
        <h4 className="text-lg font-bold capitalize text-center">
          Status: pending
        </h4>
        <DropdownButton options={options} />
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <tbody>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  name
                </th>
                <td class="px-6 py-4">John Doe</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  age
                </th>
                <td class="px-6 py-4">56</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  email
                </th>
                <td class="px-6 py-4">.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <tbody>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  name
                </th>
                <td class="px-6 py-4">John Doe</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  age
                </th>
                <td class="px-6 py-4">56</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  email
                </th>
                <td class="px-6 py-4">.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <tbody>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  name
                </th>
                <td class="px-6 py-4">John Doe</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  age
                </th>
                <td class="px-6 py-4">56</td>
              </tr>
              <tr class="bg-white border-b  hover:bg-gray-100 capitalize">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  email
                </th>
                <td class="px-6 py-4">.com</td>
              </tr>
            </tbody>
          </table>
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
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

export default Layout2;
