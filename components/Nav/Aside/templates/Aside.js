import * as React from "react";
import Link from "next/link";

import IconRandom from "../../../IconRandom";

const SidebarButton = ({ label, link, clickOpen, hoverOpen }) => {
  let sidebarMenuButton = clickOpen ? "flex w-full" : "";
  let sidebarMenuTitleClick = clickOpen
    ? "opacity-1 w-full"
    : hoverOpen && !clickOpen
    ? "opacity-1 w-full"
    : "hidden w-0";

  let sidebarMenuTitleHover =
    !hoverOpen && !clickOpen
      ? "hidden w-0"
      : hoverOpen && !clickOpen
      ? "opacity-1 w-full"
      : "";

  return (
     <Link
        className={`${sidebarMenuButton} flex min-w-full p-2 rounded-full bg-primary-main hover:opacity-30`}
        href={`/${link}`}
      >
        <IconRandom />
        <span
          className={`${sidebarMenuTitleHover} ${sidebarMenuTitleClick} text-left pl-4 transition-all h-6 overflow-hidden`}
        >
          {label}
        </span>
      </Link>
  );
};

export default function ResponsiveDrawer({items,params}) {
  const [clickOpen, setClickOpen] = React.useState(false);
  const [hoverOpen, setHoverOpen] = React.useState(false);

  const handleHoverToggle = () => {
    if (clickOpen == false) {
      setHoverOpen(!hoverOpen);
    }
  };

  const handleClickToggle = () => {
    setHoverOpen(false);
    setClickOpen(!clickOpen);
  };

  let sidebarClick = clickOpen
    ? "w-[240px] transition-all"
    : hoverOpen && !clickOpen
    ? "w-[240px] transition-all"
    : "w-[72px] transition-all ";

  let sidebarHover =
    !hoverOpen && !clickOpen
      ? "w-[72px] transition-all"
      : hoverOpen && !clickOpen
      ? "w-[240px] transition-all"
      : "";

  return (
    <>
      <div
        className={`${sidebarClick} ${sidebarHover} flex-col flex-shrink-0 hidden border-r border-l border-gray-200 dark:border-gray-800 sm:flex`}
      >
        <div className="flex items-center justify-center h-16">
          <button
            className="flex items-center w-full px-4 rounded-md"
            onClick={handleClickToggle}
          >
            <IconRandom />
          </button>
        </div>
        <div
          className="h-full"
          onMouseEnter={handleHoverToggle}
          onMouseLeave={handleHoverToggle}
        >
          <div className="px-4 mt-4 space-y-4">
            {items.map((item) => (
              <SidebarButton
                key={item.title}
                label={item.title}
                link={item.link +"?"+ params}
                clickOpen={clickOpen}
                hoverOpen={hoverOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
