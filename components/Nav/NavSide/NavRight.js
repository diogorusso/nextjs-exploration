import NavSide from "./templates/NavSide";
import { useRouter } from "next/router";

const NavRight = ({ items,params }) => {
    const router = useRouter();
  
    const options = [
      {
        value: "fixed",
        label: "Fixed Navigation",
        component: <NavSide items={items} params={params} key={0} />,
      },
      {
        value: "float",
        label: "Floating Navigation",
        component: null,
      },
    ];
  
    return options.map((option) => {
      const { component, value} = option;
      return component && router.query.navRight === value ? component : null;
    });
  };

  export default NavRight