import { useState, useEffect } from 'react';

export interface PaginationResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  totalItems: number;
  goToPage: (page: number) => void;
}

export const usePagination = <T>(
  items: T[],
  initialPage: number = 1,
  itemsPerPage: number = 10
): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  // Reset to page 1 if items array changes
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    totalItems: items.length,
    goToPage,
  };
};