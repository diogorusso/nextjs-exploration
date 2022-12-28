import Aside from "./templates/Aside";
import { useRouter } from "next/router";


const AsideLeft = ({items}) => {
    const router = useRouter();
    // return the templates
    if (router.query.asideLeft === "mini") {
      return <Aside items={items}  />;
    } else if (router.query.asideLeft === "float") {
      return null;
    } else {
      // Render MenuDefault if none of the other conditions are met
      return null;
    }
  };
  export default AsideLeft