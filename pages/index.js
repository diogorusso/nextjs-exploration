import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/Base";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/_base/maps/map1"), {
  ssr: false,
});

import Heading1 from "../components/_base/headings/heading1";
import Heading2 from "../components/_base/headings/heading2";


const ReactImageAnnotate = dynamic(import('react-image-annotate'), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <ReactImageAnnotate
    labelImages
    regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
    regionTagList={["tag1", "tag2", "tag3"]}
    videoSrc="https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
    hideNext={true}
    hidePrev={true}
    onExit={(r) => {
      console.log(r);
    }}
  />
      <Heading2
        title="Find your greeny stuff for your room"
        color="green"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut."
        buttonText="Learn More"
        imageUrl="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />

      <Heading1
        title="The fastest, most secure dev environment"
        subTitle="on the planet."
      />
      <Map />
    </Layout>
  );
}
