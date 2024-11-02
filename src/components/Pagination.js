import { useMemo } from "react";

const Pagination = ({ meta, paginationFn }) => {
  const pages = useMemo(() => {
    return Array.from({ length: meta.last_page }, (_, i) => i + 1);
  }, [meta]);

  return (
    <div className="flex items-center justify-center mt-2 box-footer md:block">
      <div className="items-center sm:flex">
        <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
          Showing {meta.from} to {meta.to} of {meta.total} entries
          <i className="font-semibold bi bi-arrow-right ms-2"></i>
        </div>
        <div className="ms-auto">
          <nav aria-label="Page navigation" className="pagination-style-4">
            <ul className="flex items-center gap-3 ">
              <li
                className={`page-item ${meta.current_page <= 1 && "disabled"}`}
              >
                <button
                  className="px-3 py-1.5 text-white rounded-md bg-secondgraphy disabled:opacity-50"
                  disabled={meta.current_page <= 1}
                  onClick={() => {
                    paginationFn({ page: meta.current_page - 1 });
                  }}
                >
                  Prev
                </button>
              </li>
              {pages.map((page) => (
                <li key={page} className={`page-item `}>
                  <button
                    className={`font-medium ${
                      meta.current_page === page &&
                      "rounded-full bg-secondgraphy text-white w-6 h-6 flex items-center justify-center"
                    }`}
                    onClick={() => {
                      paginationFn({ page });
                    }}
                  >
                    {page}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  meta.current_page <= meta.last_page && "disabled"
                }`}
              >
                <button
                  className="px-3 py-1.5 text-white rounded-md bg-secondgraphy disabled:opacity-50"
                  disabled={meta.current_page >= meta.last_page}
                  onClick={() => {
                    paginationFn({ page: meta.current_page + 1 });
                  }}
                >
                  next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
