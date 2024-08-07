import { useState } from "react";
interface DropdownIprops {
  _id: string;
  title: string;
  book: {
    _id: string;
    title: string;
  };
}
const MultiSelectComponent = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((item: any) => item !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        Select Tags
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
          {options.map((option: DropdownIprops) => (
            <div key={option._id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option._id)}
                onChange={() => handleSelect(option._id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.title}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectComponent;
