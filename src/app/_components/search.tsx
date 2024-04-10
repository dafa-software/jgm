import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeSearchData, ServicesData } from "~/data";
import Link from "next/link";

export default function SearchInput() {
  const searchData = [HomeSearchData, ServicesData];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<
    { title: string; href: string }[]
  >([]);

  const handleSearch = (search: string) => {
    if (search.length > 0) {
      const filteredData = searchData.flatMap((data) => {
        return data.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        });
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Procurar..."
        className="rounded-md border border-gray-300 px-8 py-2 focus:outline-none"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      {filteredResults.length > 0 && (
        <span className="absolute right-0 mt-2 flex w-full flex-col rounded-md border border-gray-300 bg-white shadow-md">
          {filteredResults.map((result, index) => (
            <Link
              key={index}
              href={result.href}
              className="px-4 py-2 hover:bg-gray-100"
            >
              {result.title}
            </Link>
          ))}
        </span>
      )}
    </div>
  );
}
