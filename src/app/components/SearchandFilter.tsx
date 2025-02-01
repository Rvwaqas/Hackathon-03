'use client'
import React, { useState } from 'react';

interface SearchAndFilterProps {
  onSearch: (searchTerm: string) => void;
  onFilter: (filters: { category?: string; minPrice?: number; maxPrice?: number }) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({
      category,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#F9F1E7] rounded-lg mb-8">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Categories</option>
        <option value="category1">Chair</option>
        <option value="category2">Table</option>
        {/* Add more categories as needed */}
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice || ''}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice || ''}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#A67C2F]"
      >
        Search
      </button>
      <button
        onClick={handleFilter}
        className="p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#A67C2F]"
      >
        Filter
      </button>
    </div>
  );
};

export default SearchAndFilter;