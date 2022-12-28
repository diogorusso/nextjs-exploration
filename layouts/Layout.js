import styles from "./layout.module.css";
import { useRouter } from "next/router";

import NavTop from "../components/Nav/NavTop/NavTop";
import NavBottom from "../components/Nav/NavBottom/NavBottom";
import NavLeft from "../components/Nav/NavSide/NavLeft";
import NavRight from "../components/Nav/NavSide/NavRight";
import AsideLeft from "../components/Nav/Aside/AsideLeft";
import AsideRight from "../components/Nav/Aside/AsideRight";

import { pagesDataSrc } from "../data/features";

export default function Layout({ children }) {
  const router = useRouter();

  const getPageData = () => {
    if (router.query.package && pagesDataSrc[router.query.package]) {
      // check if router.query.package is defined and has a corresponding property in pageData
      return pagesDataSrc[router.query.package];
    } else {
      return pagesDataSrc.default;
    }
  };

  const pageData = getPageData();

  

  return (
    <div className={styles.container}>
      <AsideLeft items={pageData.asideLeft} />
      <div className="flex flex-col flex-grow h-full overflow-hidden">
        <NavTop data={pageData.navTop} />
        <div className="flex flex-grow overflow-x-hidden">
          <NavLeft data={pageData.navLeft} />
          <div className="flex-grow overflow-y-auto">{children}</div>
          <NavRight data={pageData.navRight} />
        </div>
      </div>
      <AsideRight items={pageData.asideRight} />
      <NavBottom />
    </div>
  );
}
