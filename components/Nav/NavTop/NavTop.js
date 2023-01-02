import { useRouter } from "next/router";
import Template from "./templates/NavTop"

const NavTop = ({items,params}) => {
    const router = useRouter();
  
    const options = [
      {
        value: "fixed",
        label: "Fixed Navigation",
        component: <Template items={items} params={params} key={0}/>,
      },
      {
        value: "float",
        label: "Floating Navigation",
        component: null,
      },
    ];
  
    return options.map((option) => {
      const { component, value} = option;
      return component && router.query.navTop === value ? component : null;
    });
  };

  export default NavTop