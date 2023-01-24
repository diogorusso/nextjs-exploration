import { packagesDataSrc } from "../data/packages";

export const getPackageData = (query) => {
  if (query && packagesDataSrc[query]) {
    // check if router.query.package is defined and has a corresponding property in pageData
    return packagesDataSrc[query];
  } else {
    return packagesDataSrc.default;
  }
};

export const findLayoutMatchingTitle = (title, data) => {
  const matchingObject = data.find((item) => item.slug === title);
  return matchingObject ? matchingObject.layout : "undefined";
};
