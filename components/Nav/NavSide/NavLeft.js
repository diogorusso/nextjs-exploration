import { useRouter } from "next/router";
import NavSide from "./templates/NavSide";

const NavLeft = ({items,params}) => {
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
      return component && router.query.navLeft === value ? component : null;
    });
  };

  export default NavLeft