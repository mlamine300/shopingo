"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function SearchInput() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full hidden md:inline-flex flex-1 h-12 relative">
      <CiSearch className="text-lg absolute left-2.5 mt-4 text-lightOrange" />
      <input
        type="text"
        placeholder="Search Product"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="flex-1 h-full outline-none bg-transparent
         placeholder-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28 relative"
      />
      {search && (
        <IoClose
          className="absolute right-24 text-2xl top-2.5 text-lightText/50
         hover:text-3xl hover:top-2 hover:text-lightRed/50 hoverEffect"
          onClick={() => setSearch("")}
        />
      )}
      <button
        className="bg-lightOrange text-accentWhite absolute right-0 px-3.5 py-1.5 mr-1.5
       text-sm hover:bg-darkOrange hoverEffect font-medium top-2"
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
