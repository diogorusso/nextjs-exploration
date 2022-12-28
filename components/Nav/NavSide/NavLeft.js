import { useRouter } from "next/router";
import NavSide from "./templates/Base";

const NavLeft = ({data }) => {
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
      return component && router.query.navLeft === value ? component : null;
    });
  };

  export default NavLeft