import {navLeftHealth} from "./health/navLeft"
import {navTopHealth} from "./health/navTop"
import {asideHealth} from "./health/asideLeft"

import {navLeftCarbon} from "./carbon/navLeft"
import {navTopCarbon} from "./carbon/navTop"
import {asideCarbon} from "./carbon/asideLeft"



export const packagesDataSrc = {
  health: {
    title: "Health Page",
    description: "This is the health page",
    layoutParams: "navLeft=fixed&navBottom=fixed&navTop=fixed&asideRight=mini&asideLeft=mini",
    asideLeft: asideHealth,
    navTop: navTopHealth,
    asideBottom: asideHealth,
    navLeft: navLeftHealth,
    navRight: asideHealth,
    asideRight: navLeftHealth,
  },
  carbon: {
    title: "Carbon Footprint Page",
    description: "This is the carbon footprint page",
    layoutParams: "navLeft=fixed&navBottom=fixed&navTop=fixed&asideRight=mini&asideLeft=mini",
    asideLeft: asideCarbon,
    navTop: navLeftCarbon,
    asideBottom: asideCarbon,
    navLeft: navLeftCarbon,
    navRight: asideCarbon,
    asideRight: navLeftCarbon,
  },
  default: {
    title: "Micropress UI Kit",
    description: "Next.js + Tailwind.js + Material UI multi use UI Kit",
    layoutParams: "asideLeft=mini&navTop=fixed",
    asideLeft: asideCarbon,
    navTop: navTopCarbon,
    asideBottom: asideCarbon,
    navLeft: navLeftCarbon,
    navRight: asideCarbon,
    asideRight: navLeftCarbon,
  },
};