import Head from "next/head";

import PvocHeader from "../../../_sections/_pvoc/Header/PvocHeader";
import CountriesSection from "../../../_sections/_pvoc/Countries/CountriesSection";
import RouteAProcedure from "../../../_sections/_pvoc/RouteAProcedure/RouteAProcedure";
import AnnualRegistration from "../../../_sections/_pvoc/AnnualRegistration/AnnualRegistration";

export default function PvocPage() {
  return (
    <>
      <Head>
        <title>PVoC - YVEA</title>
        <meta name="description" content="Yvea - PVoC" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      <PvocHeader />
      <CountriesSection />
      <RouteAProcedure />
      <AnnualRegistration />
    </>
  );
}
