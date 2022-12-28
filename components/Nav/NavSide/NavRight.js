import NavSide from "./templates/Base";
import { useRouter } from "next/router";

const NavRight = ({ data }) => {
    const router = useRouter();
  
    const options = [
      {
        value: "fixed",
        label: "Fixed Navigation",
        component: <NavSide menuItems={data} />,
      },
      {
        value: "float",
        label: "Floating Navigation",
        component: null,
      },
    ];
  
    return options.map((option) => {
      const { component, value } = option;
      return component && router.query.navRight === value ? component : null;
    });
  };

  export default NavRight