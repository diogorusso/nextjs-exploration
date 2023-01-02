import { useRouter } from "next/router";
import BottomFixed from "./templates/BottomFixed"

const NavBottom = () => {
    const router = useRouter();
  
    const options = [
      {
        value: "fixed",
        label: "Fixed Navigation",
        component: <BottomFixed key={0} />,
      },
      {
        value: "float",
        label: "Floating Navigation",
        component: null,
      },
    ];
  
    return options.map((option) => {
      const { component, value } = option;
      return component && router.query.navBottom === value ? component : null;
    });
  };

  export default NavBottom