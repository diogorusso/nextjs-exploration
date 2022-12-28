import Layout from "../../layouts/layout";
import AvartarsGroup from "../../components/_base/elements/avatarsGroup";

export default function Home() {
    return (
      <Layout>
        <AvartarsGroup numImages={6} size={12} />
      </Layout>
    );
  }