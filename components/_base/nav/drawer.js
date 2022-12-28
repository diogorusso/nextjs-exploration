import * as React from "react";
import IconHouse from "../icons/house";

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let sidebar = mobileOpen ? 'w-[240px] transition-all' : 'w-[72px] transition-all '
  
  return (
    <>
      <div className={`${sidebar} flex-col flex-shrink-0 hidden border-r border-l border-gray-200 dark:border-gray-800 sm:flex`}>
        <div className="flex items-center justify-center h-16">
        <IconHouse />
        </div>
        <div className="flex flex-col flex-grow mx-auto mt-4 space-y-4 text-gray-400">
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500" onClick={handleDrawerToggle}>
          <IconHouse />
          </button>
          <button className="flex items-center justify-center w-12 h-10 text-blue-500 bg-blue-100 rounded-md dark:bg-gray-700 dark:text-white">
          <IconHouse />
          </button>
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500">
            <svg
              viewBox="0 0 24 24"
              className="h-5"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              <line x1={12} y1={11} x2={12} y2={17} />
              <line x1={9} y1={14} x2={15} y2={14} />
            </svg>
          </button>
          <button className="flex items-center justify-center w-12 h-10 rounded-md dark:text-gray-500">
            <svg
              viewBox="0 0 24 24"
              className="h-5"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x={3} y={3} width={7} height={7} />
              <rect x={14} y={3} width={7} height={7} />
              <rect x={14} y={14} width={7} height={7} />
              <rect x={3} y={14} width={7} height={7} />
            </svg>
          </button>
        </div>
      </div>
    </>
        
  );
}


