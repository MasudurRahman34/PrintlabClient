import { getProductBySearchQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDebounce } from "../hooks/useDebounce";
import Link from "next/link";

const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [focus, setFocus] = useState(false);

  const debouncedSearchTerm = useDebounce(search, 1000); // 1 second delay
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChenge = (e) => {
    if (e.target.value === "") {
      setSearchResults([]);
      setSearch("");
    } else {
      setSearch(e.target.value);
    }
  };

  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = () => {
    if (searchResults.length <= 0) {
      setFocus(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Fetch data from the API using the debounced search term
      const fetchData = async () => {
        try {
          setSearching(true);
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?filter[slug]=${debouncedSearchTerm}`
          ).then((res) => res.json());
          const data = await response.data;

          setSearchResults(data);
          setSearching(false);
        } catch (error) {
          setSearching(false);
          console.error("Error fetching search results:", error);
        }
      };

      fetchData();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative bg-white border-2 border-black rounded-full cursor-pointer">
      <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">
        Label
      </label>
      <div className="flex rounded-full">
        <input
          type="search"
          placeholder="Search for products"
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          onChange={handleSearchChenge}
          id="hs-trailing-button-add-on-with-icon"
          name="hs-trailing-button-add-on-with-icon"
          className="w-full px-3 text-sm transition-all rounded-full ti-form-input focus:z-10 focus:outline-none focus:ring-0"
        />
        <button
          aria-label="button"
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-e-sm border border-transparent font-semibold  text-black  focus:z-10 focus:outline-none focus:ring-0  transition-all text-sm"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      {focus ? (
        searching ? (
          <div className="absolute left-0 z-50 w-full p-4 bg-white border-2 rounded-b-lg top-12">
            <h1 className="text-center">Searching Product</h1>
          </div>
        ) : searchResults.length <= 0 ? (
          <div className="absolute left-0 z-50 w-full p-4 bg-white border-2 rounded-b-lg top-12">
            <h1 className="text-center">No product available </h1>
          </div>
        ) : (
          <div className="absolute left-0 z-50 w-full p-4 bg-white border-2 rounded-b-lg top-12">
            <ul>
              {searchResults.map((product, index) => {
                return (
                  <li
                    key={index}
                    className="text-secondgraphy hover:text-primary"
                  >
                    <Link
                      href={`/product/${product.categories[0]?.slug}/${product.slug}`}
                    >
                      {product.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )
      ) : null}
    </div>
  );
};

export default SearchProduct;
