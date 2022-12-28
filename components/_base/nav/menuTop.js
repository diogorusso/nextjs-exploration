import Button from '@mui/material/Button';
import * as React from 'react';

import MenuUnstyled from '@mui/base/MenuUnstyled';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import MenuItemUnstyled from '@mui/base/MenuItemUnstyled';

import Checkbox from '@mui/material/Checkbox';

import Drawer from '@mui/material/Drawer';
import ClickAwayListener from '@mui/base/ClickAwayListener';

function BasicMenu() {
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
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
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
            'aria-labelledby': 'basic-button',
          }}
          slotProps={{
          root: { className: 'bg-gray-800 px-4 spacey-4 rounded-lg' },}}
        >
          <MenuItemUnstyled onClick={handleClose}>Profile</MenuItemUnstyled>
          <MenuItemUnstyled onClick={handleClose}>My account</MenuItemUnstyled>
          <MenuItemUnstyled onClick={handleClose}>Logout</MenuItemUnstyled>
        </MenuUnstyled>
      </div>
    );
  }


export default function MenuTop({ children }) {
  const [Open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  let drawer = Open ? 'w-[240px] transition-all' : 'w-[0] transition-all '
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
    
    <Drawer
    anchor="right"
    open={Open}>
      <ClickAwayListener onClickAway={handleDrawerToggle}>
<div className={drawer}>hello
</div>
</ClickAwayListener>
    </Drawer>
    
      <div className="hidden w-full h-16 px-10 border-b border-gray-200 lg:flex dark:border-gray-800">
        <div className="flex h-full text-gray-600 dark:text-gray-400">
        <button onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>toggle</button>
          <a
            href="#"
            className="inline-flex items-center h-full mr-8 border-b-2 border-transparent cursor-pointer"
          >
            Company
          </a>

          <a
            href="#"
            className="inline-flex items-center h-full mr-8 text-blue-500 border-b-2 border-blue-500 cursor-pointer dark:text-white dark:border-white"
          >
            Users
          </a>
          <a
            href="#"
            className="inline-flex items-center h-full mr-8 border-b-2 border-transparent cursor-pointer"
          >
            Expense Centres
          </a>
          <a
            href="#"
            className="inline-flex items-center h-full border-b-2 border-transparent cursor-pointer"
          >
            Currency Exchange
          </a>
        </div>
        <div className="flex items-center ml-auto space-x-7">
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
          <BasicMenu />
          <Button variant="contained" >Hello</Button>
          <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
        </div>
      </div>
    </>
  );
}
