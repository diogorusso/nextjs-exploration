import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import slugify from "slugify";

import MenuUnstyled from "@mui/base/MenuUnstyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import MenuItemUnstyled from "@mui/base/MenuItemUnstyled";

import Checkbox from "@mui/material/Checkbox";

import Drawer from "@mui/material/Drawer";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { HexColorPicker } from "react-colorful";
import {hexToHSL} from "../../../../utils/hexToHSL"
import { fontsList } from "../../../../utils/fontsList";

function BasicMenu({color,onChange}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonUnstyled
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard 
      </ButtonUnstyled>

      <MenuUnstyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          root: { className: "bg-gray-800 px-4 spacey-4 rounded-lg" },
        }}
      >
         <HexColorPicker color={color} onChange={onChange} />
        <h3>HEX: {color}</h3>
        <h3>H: {hexToHSL(color).h} S: {hexToHSL(color).s} L: {hexToHSL(color).l} </h3>
        <MenuItemUnstyled onClick={handleClose}>Profile</MenuItemUnstyled>
        <MenuItemUnstyled onClick={handleClose}>My account</MenuItemUnstyled>
        <MenuItemUnstyled onClick={handleClose}>Logout</MenuItemUnstyled>
      </MenuUnstyled>
    </div>
  );
}


function FontMenu({font,fontClick}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonUnstyled
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Font
      </ButtonUnstyled>

      <MenuUnstyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          root: { className: "bg-gray-800 px-4 spacey-4 rounded-lg" },
        }}
      >
        <h2>{font}</h2>
        {fontsList.map((item) => (
          <MenuItemUnstyled key={item.name} 
          onClick={() => fontClick(item.name)}>
            {item.name}
          </MenuItemUnstyled>
        ))}
      </MenuUnstyled>
    </div>
  );
}


function DrawerButton() {
  const [Open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  let drawer = Open ? "w-[240px] transition-all" : "w-[0] transition-all ";
  return (
    <>
      <Drawer anchor="right" open={Open}>
        <ClickAwayListener onClickAway={handleDrawerToggle}>
          <div className={drawer}>hello</div>
        </ClickAwayListener>
      </Drawer>
      <button onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
        toggle
      </button>
    </>
  );
}

function MuiElements() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Button variant="contained">Hello</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <button className="h-8 px-3 text-white bg-blue-500 rounded-md shadow">
        Deposit
      </button>

      <button className="flex items-center">
        <span className="relative flex-shrink-0">
          <img
            className="rounded-full w-7 h-7"
            src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            alt="profile"
          />
          <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900" />
        </span>
      </button>
    </>
  );
}

function MenuLeft({ label,params}) {
  const router = useRouter();
  const active =
    "text-blue-500 border-b-2 border-blue-500 cursor-pointer dark:text-white dark:border-white";
  const isActive = router.query.view === slugify(label, { lower: true });
  const activeStyle = isActive ? active : "";
  return (
    <Link
      href={`/${router.query.package}/${
        router.query.feature
      }/${encodeURIComponent(slugify(label, { lower: true }))}?${params}`}
      className={`${activeStyle} pb-4 inline-flex items-center h-full mr-8 border-b-2 border-transparent cursor-pointer`}
    >
      {label}
    </Link>
  );
}

export default function MenuTop({ items,params,color,onChange,font,fontClick}) {
  
  return (
    <>
      <div className="hidden w-full px-10 pt-6 text-gray-900 border-b border-gray-200 lg:flex dark:border-gray-800 dark:text-gray-100">
        <div className="flex h-full">
          {items.map((item) => (
            <MenuLeft label={item.title} key={item.title} params={params} />
          ))}
         
        </div>
        <div className="flex items-center ml-auto space-x-7">
          <BasicMenu color={color} onChange={onChange} />
          <FontMenu font={font} fontClick={fontClick}/>
        </div>
      </div>
    </>
  );
}
