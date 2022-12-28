import {
    BeakerIcon,
    HomeIcon,
    ChartBarIcon,
    WifiIcon,
    BookOpenIcon,
    CogIcon,
    HeartIcon,
    FolderIcon,
    WalletIcon,
    CalendarIcon,
  } from "@heroicons/react/24/outline";
  
  function getRandomIcon() {
    // Create an array of the icon components
    const icons = [
      BeakerIcon,
      CogIcon,
      HomeIcon,
      ChartBarIcon,
      WifiIcon,
      BookOpenIcon,
      CogIcon,
      HeartIcon,
      FolderIcon,
      WalletIcon,
      CalendarIcon,
    ];
  
    // Use Math.random() to generate a random index for the array
    const randomIndex = Math.floor(Math.random() * icons.length);
  
    // Return the icon component at the randomly generated index
    return icons[randomIndex];
  }
  
  const menuItemStyle =
    "w-6 h-6";
  
  const IconRandom = () => {
    const Icon = getRandomIcon();
    return <Icon className={menuItemStyle} />;
  };
  export default IconRandom;