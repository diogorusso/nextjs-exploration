import styles from "./layout.module.css";
import { useRouter } from "next/router";

import NavTop from "../components/Nav/NavTop/NavTop";
import NavBottom from "../components/Nav/NavBottom/NavBottom";
import NavLeft from "../components/Nav/NavSide/NavLeft";
import NavRight from "../components/Nav/NavSide/NavRight";
import AsideLeft from "../components/Nav/Aside/AsideLeft";
import AsideRight from "../components/Nav/Aside/AsideRight";

import { getPackageData } from "../utils/getPackageData";

export default function Layout({ children }) {
  const router = useRouter();
  const packageData = getPackageData(router.query.package);
  return (
    <div className={styles.container}>
      <AsideLeft items={packageData.asideLeft} params={packageData.layoutParams} />
      <div className="flex flex-col flex-grow overflow-hidden">
        <NavTop items={packageData.navTop} params={packageData.layoutParams} />
          <div className="flex flex-grow h-full overflow-x-hidden">
            <NavLeft items={packageData.navLeft} params={packageData.layoutParams} />
            <div className="flex-grow overflow-y-auto">{children}</div>
            <NavRight items={packageData.navRight} params={packageData.layoutParams} />
          </div>
      </div>

      <AsideRight items={packageData.asideRight} params={packageData.layoutParams} />
      <NavBottom />
    </div>
  );
}
