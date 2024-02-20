import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({placeholder}) {
  return (
    <div className="top-serach-bar p-7 max-w-max flex items-center gap-10">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-[#151c2c] rounded-lg rounded-2xl-white border-slate-300 p-2 pl-8"
        />
        <FaSearch className="absolute left-2 top-3 text-gray-400" />
      </div>
    </div>
  );
}

export default Search;
