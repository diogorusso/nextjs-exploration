import Head from "next/head";
import Script from "next/script";
import Layout from "../../../../layouts/Layout";

import dynamic from "next/dynamic";

import Heading1 from "../../../../components/_base/headings/heading1";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Heading1
        title={router.query.package +" → " +router.query.feature +" → " +router.query.view +" → " +router.query.section}
        subTitle="A measure of the impact that an individual's activities have on the environment in terms of the amount of greenhouse gases (GHGs) "
      />
      <p>
        It XXXXX is typically expressed in terms of the amount of CO2 emitted over a
        certain period of time, usually a year.
        <br />
        How to calculate your carbon footprint: Provide information about how to
        calculate an individual's carbon footprint. This could include
        information about the different types of GHGs that contribute to an
        individual's carbon footprint, such as emissions from transportation,
        energy use in the home, and consumption of goods and services. You could
        also provide links to online carbon footprint calculators or resources
        that individuals can use to determine their carbon footprint.
        <br />
        How the carbon offset program works: Explain how the carbon offset
        program offered on the website works to reduce or offset an individual's
        carbon footprint. This could include information about the types of GHG
        reduction projects that the website supports, such as renewable energy
        or reforestation projects. You should also provide information about how
        individuals can participate in the carbon offset program, such as by
        purchasing carbon offsets or making donations to support GHG reduction
        projects.
        <br />
        Additional resources: Provide links to additional resources or
        information about carbon footprint and carbon offset programs. This
        could include information about the science behind carbon footprints,
        the environmental benefits of carbon offset programs, and best practices
        for reducing an individual's carbon footprint.
      </p>
    </Layout>
  );
}
