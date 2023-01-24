import styles from "./layout.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NavTop from "../components/Nav/NavTop/NavTop";
import NavBottom from "../components/Nav/NavBottom/NavBottom";
import NavLeft from "../components/Nav/NavSide/NavLeft";
import NavRight from "../components/Nav/NavSide/NavRight";
import AsideLeft from "../components/Nav/Aside/AsideLeft";
import AsideRight from "../components/Nav/Aside/AsideRight";

import { getPackageData } from "../utils/packagesData";

import { hexToHSL } from "../utils/hexToHSL";
import { fontsList } from "../utils/fontsList";

export default function Layout({ children }) {
  const router = useRouter();
  const packageData = getPackageData(router.query.package);
  const [color, setColor] = useState(
    localStorage.getItem("color") || "#6231af"
  );
  const [font, setFont] = useState(localStorage.getItem("font") || "Poppins");

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem("font", font);
  }, [font]);

  useEffect(() => {
    document.body.classList.toggle("dark", hexToHSL(color).l < 30);
   
  }, [color]);

  let colors =
    "--primary-h:" +
    hexToHSL(color).h +
    "; --primary-s: " +
    hexToHSL(color).s +
    "%; --primary-l: " +
    hexToHSL(color).l +
    "%;";
    const selectedFont = fontsList.find((f) => f.name === font);
  let fontVar = "--primary-font:" + selectedFont.name + ";"
  

  return (
    <>
      <Head>
        <style>{`:root {${colors}${fontVar}}`}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={selectedFont.url} rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <AsideLeft
          items={packageData.asideLeft}
          params={packageData.layoutParams}
        />
        <div className="flex flex-col flex-grow overflow-hidden">
          <NavTop
            items={packageData.navTop}
            params={packageData.layoutParams}
            color={color}
            onChange={setColor}
            font={font}
            fontClick={setFont}
          />

          <div className="flex flex-grow h-full overflow-x-hidden">
            <NavLeft
              items={packageData.navLeft}
              params={packageData.layoutParams}
            />
            <div className="flex-grow overflow-y-auto">{children}</div>
            <NavRight
              items={packageData.navRight}
              params={packageData.layoutParams}
            />
          </div>
        </div>

        <AsideRight
          items={packageData.asideRight}
          params={packageData.layoutParams}
        />
        <NavBottom />
      </div>
    </>
  );
}
