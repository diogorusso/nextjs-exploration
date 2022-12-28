import * as React from "react";
export default function MenuMniLeft({ children }) {
  const [Open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!Open);
  };
  let sidebar = Open ? 'w-[240px] transition-all' : 'w-[72px] transition-all '

  return (
    <div className={`${sidebar} flex-shrink-0 hidden h-full p-5 overflow-y-auto border-r border-gray-200  dark:border-gray-800 lg:block`}>
      <button onClick={handleDrawerToggle}>hello</button><br/>
      {children}
    </div>
  );
}
