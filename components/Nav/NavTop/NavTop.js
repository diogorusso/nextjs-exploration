import { useRouter } from "next/router";
import Template from "./templates/NavTop"

const NavTop = ({data}) => {
    const router = useRouter();
  
    const options = [
      {
        value: "fixed",
        label: "Fixed Navigation",
        component: <Template data={data} />,
      },
      {
        value: "float",
        label: "Floating Navigation",
        component: null,
      },
    ];
  
    return options.map((option) => {
      const { component, value } = option;
      return component && router.query.navTop === value ? component : null;
    });
  };

  export default NavTop