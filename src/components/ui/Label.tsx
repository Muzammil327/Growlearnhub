import React from "react";

interface LabelProps {
  label: string;
  htmlFor: string; // Made htmlFor prop optional
}

const Label: React.FC<LabelProps> = ({ label, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-base font-medium dark:text-gray-100 text-gray-700 mb-2"
    >
      {label}
    </label>
  );
};

export default Label;
