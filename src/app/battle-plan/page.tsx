"use client";

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import BattleHero from "@/components/battle/BattleHero";
import EthosFunnel from "@/components/battle/EthosFunnel";
import TrafficStrategy from "@/components/battle/TrafficStrategy";
import AdPlaybook from "@/components/battle/AdPlaybook";
import LandingPageBlueprint from "@/components/battle/LandingPageBlueprint";
import UnitEconomics from "@/components/battle/UnitEconomics";
import ExecutionRoadmap from "@/components/battle/ExecutionRoadmap";

function Divider() {
  return (
    <div className="section-container">
      <div className="section-divider" />
    </div>
  );
}

export default function BattlePlan() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <BattleHero />
        <Divider />
        <div id="ethos-funnel"><EthosFunnel /></div>
        <Divider />
        <div id="traffic"><TrafficStrategy /></div>
        <Divider />
        <div id="ads"><AdPlaybook /></div>
        <Divider />
        <div id="landing"><LandingPageBlueprint /></div>
        <Divider />
        <div id="economics"><UnitEconomics /></div>
        <Divider />
        <div id="roadmap"><ExecutionRoadmap /></div>
      </main>
    </>
  );
}
