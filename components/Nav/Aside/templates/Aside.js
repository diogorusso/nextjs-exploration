import * as React from "react";

import Link from "next/link";
import slugify from "slugify";
import { useRouter } from "next/router";

import Tooltip from "@mui/material/Tooltip";

import IconRandom from "../../../IconRandom";

const layoutParams =
  "?navLeft=fixed&navBottom=fixed&navTop=fixed&asideRight=mini&asideLeft=mini";

const SidebarButton = ({ label, clickOpen, hoverOpen }) => {
  const router = useRouter();
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
    <Tooltip title="Add" placement="right-start">
      <Link
        className={`${sidebarMenuButton} flex min-w-full p-2 rounded-full bg-primary-main hover:opacity-30`}
        href={`/${router.query.package}/${encodeURIComponent(
          slugify(label, { lower: true })
        )}${layoutParams}`}
      >
        <IconRandom />
        <span
          className={`${sidebarMenuTitleHover} ${sidebarMenuTitleClick} text-left pl-4 transition-all h-6 overflow-hidden`}
        >
          {label}
        </span>
      </Link>
    </Tooltip>
  );
};

export default function ResponsiveDrawer({ items }) {
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
            {items.map((button) => (
              <SidebarButton
                label={button.title}
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
