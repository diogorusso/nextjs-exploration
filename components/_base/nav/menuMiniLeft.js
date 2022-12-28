import IconHouse from "../icons/house";
export default function MenuMniLeft({ children }) {
  return (
    <>
      <div className="flex-col flex-shrink-0 hidden w-20 border-l border-gray-200 dark:border-gray-800 sm:flex">
        <div className="flex items-center justify-center h-16">
          <svg
            className="w-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col flex-grow mx-auto mt-4 space-y-4 text-gray-400">
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500">
            <IconHouse />
          </button>
          <button className="flex items-center justify-center w-12 h-10 text-blue-500 bg-blue-100 rounded-md dark:bg-gray-700 dark:text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-5"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500">
            <IconHouse />
          </button>
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500">
          <IconHouse />
          </button>
        </div>
      </div>
    </>
  );
}
