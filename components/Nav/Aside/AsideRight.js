import Aside from "./templates/Aside";
import { useRouter } from "next/router";

const AsideRight = ({ items, params }) => {
  const router = useRouter();
  if (router.query.asideRight === "mini") {
    return <Aside items={items} params={params} />;
  } else if (router.query.asideRight === "float") {
    return null;
  } else {
    return null;
  }
};
export default AsideRight;
