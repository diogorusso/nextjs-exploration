import {navLeftHealth} from "./health/navLeft"
import {navTopHealth} from "./health/navTop"
import {asideHealth} from "./health/asideLeft"

import {navLeftCarbon} from "./carbon/navLeft"
import {navTopCarbon} from "./carbon/navTop"
import {asideCarbon} from "./carbon/asideLeft"



export const pagesDataSrc = {
  health: {
    title: "Health Page",
    description: "This is the health page",
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
    asideLeft: asideCarbon,
    navTop: navLeftCarbon,
    asideBottom: asideCarbon,
    navLeft: navLeftCarbon,
    navRight: asideCarbon,
    asideRight: navLeftCarbon,
  },
//   crypto: {
//     title: "Cryptocurrency Page",
//     description: "This is the cryptocurrency page",
//     data: menuItemsCrypto,
//   },
  // add additional properties for other values of router.query.package
  default: {
    title: "Default Page",
    description: "This is the default page",
    asideLeft: asideCarbon,
    navTop: navTopCarbon,
    asideBottom: asideCarbon,
    navLeft: navLeftCarbon,
    navRight: asideCarbon,
    asideRight: navLeftCarbon,
  },
};