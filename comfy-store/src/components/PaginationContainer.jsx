import React from 'react';

import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { search, pathname } = useLocation();
  // console.log(useLocation());

  const navigate = useNavigate();
  const { meta } = useLoaderData();

  const { pageCount, page, pageSize, total } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item '
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = page;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300 ' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className='btn btn-xs sm:btn-md join-item '
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = page;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
