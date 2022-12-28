import Aside from "./templates/Aside";
import { useRouter } from "next/router";

const AsideRight = ({items}) => {
    const router = useRouter();
    if (router.query.asideRight === "mini") {
      // Render MenuTop
      return <Aside items={items} />;
    } else if (router.query.asideRight === "float") {
      // Render MenuFloat
      return null;
    } else {
      // Render MenuDefault if none of the other conditions are met
      return null;
    }
  };
  export default AsideRight