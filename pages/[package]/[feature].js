import { useRouter } from "next/router";
import { getPackageData } from "../../utils/getPackageData";

function RedirectPage() {
  const router = useRouter();
  const packageData = getPackageData(router.query.package);
  const pushRoute =
    "/" +
    router.query.package +
    "/" +
    router.query.feature +
    "/dashboard/dashboard";
  if (typeof window !== "undefined") {
    router.push({
      pathname: pushRoute,
      query: packageData.layoutParams,
    });
  }
}

export default RedirectPage;
