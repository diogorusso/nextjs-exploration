import { useRouter } from "next/router";
import Layout from "../../../../layouts/Base";

import Bitcoin from "../../../../components/_base/api/bitcoin";
import Bitcoin2 from "../../../../components/_base/api/bitcoin2";
import Wordpress from "../../../../components/_base/api/wp";

import { motion } from "framer-motion";
import {
  getPackageData,
  findLayoutMatchingTitle,
} from "../../../../utils/packagesData";

export default function Home() {
  const router = useRouter();
  const pageData = getPackageData(router.query.package);
  const sectionQuery = router.query.section;
  const title = findLayoutMatchingTitle(sectionQuery, pageData.navLeft);

  return (
    <Layout>
      <div className="px-8 pt-10">
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 2 }}
          className="w-12 h-12 bg-pink-400"
        >
          Hello --- {sectionQuery}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          delay={0.5}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          delay={0.5}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
        >
          <Bitcoin2 />
        </motion.div>
      </div>
    </Layout>
  );
}
