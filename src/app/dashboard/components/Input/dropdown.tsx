"use client";
import React from "react";
import "react-tagsinput/react-tagsinput.css";
import styles from "@/src/app/dashboard/form.module.css";

interface DropdownProps {
  bookId: string;
  label: string;
  setBookId: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  booksData: any;
}
interface DropdownIprops {
  _id: string;
  title: string;
}
const Dropdown: React.FC<DropdownProps> = ({
  bookId,
  setBookId,
  booksData,
  label,
}) => {
  return (
    <div className="">
      <label htmlFor={label} className={`${styles.label}`}>
        {label}
      </label>
      <div className="mt-2.5">
        <select
          name={label}
          className={`${styles.select}`}
          value={bookId}
          onChange={setBookId}
        >
          <option value="">Select {label}:</option>
          {booksData.map((data: DropdownIprops) => (
            <option key={data._id} value={data._id}>
              {data.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
