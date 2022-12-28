import Layout from "../../layouts/layout";

import Bitcoin from "../../components/_base/api/bitcoin"
import Bitcoin2 from "../../components/_base/api/bitcoin2"
import Wordpress from "../../components/_base/api/wp"

export default function Home() {
  return (
    <Layout>
      <Bitcoin2/>
      <Bitcoin/>
      <Wordpress/>
    </Layout>
  );
}
