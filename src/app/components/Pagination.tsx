import React from 'react';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='w-[100%] h-[90px] mt-[350px]'>
      <div className='flex justify-center items-baseline gap-2 md:gap-6 w-[392px] h-[90px] m-auto'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`rounded-[10px] ${
              currentPage === number ? 'bg-[#B88E2F]' : 'bg-[#F9F1E7]'
            } hover:bg-[#B88E2F] hover:transition-colors hover:duration-300 hover:ease-in-out px-3 py-1 md:px-5 md:py-2 text-center text-black text-[16px] md:text-[20px] font-normal leading-[30px]`}
          >
            {number}
          </button>
        ))}
        {currentPage < pageNumbers.length && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] px-3 py-1 md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;