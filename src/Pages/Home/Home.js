import React from 'react'
import Gridsection from '../../component/Grid-section/Grid-section'
import Header from '../../component/Header/Headerr'
import PropertyType from '../../component/Property-type/PropertyType'
import Recentsearches from '../../component/Recent-searches/Recent-searches'
import ExploerEgypt from "../../component/ExploerEgypt/ExploerEgypt";
import GetInspiration from '../../component/GetInspiration/GetInspiration'
import HomesGustesLove from '../../component/HomesGustesLove/HomesGustesLove'
import Community from "../../component/Community/Community";

export default function Home() {
    return (
      <>
        <Header />
        <Recentsearches />
        <Gridsection />
        <PropertyType />
        <ExploerEgypt />
        <GetInspiration />
        <HomesGustesLove />
        <Community/>
      </>
    );
}
