import React from "react";
import PropertyType from "../../component/Property-type/PropertyType";
import Recentsearches from "../../component/Recent-searches/Recent-searches";
import HomesGustesLove from "../../component/Home/HomesGustesLove/HomesGustesLove";
import Header from "../../component/Home/Header/Headerr";
import Gridsection from "../../component/Home/Grid-section/Grid-section";
import ExploerEgypt from "../../component/Home/ExploerEgypt/ExploerEgypt";
import GetInspiration from "../../component/Home/GetInspiration/GetInspiration";
import Community from "../../component/Home/Community/Community";

export default function Home() {
  return (
    <>
      <Header />
      <Gridsection />
      <PropertyType />
      <ExploerEgypt />
      <GetInspiration />
      <HomesGustesLove prop={"hotel"} />
      <HomesGustesLove prop={"campground"} />
      <HomesGustesLove prop={"apartment"} />
      <Community />
    </>
  );
}
