"use client";

import PageHero from "@/components/hero/PageHero";
import { TechStackBlock } from "@/blocks/TechStackBlock";
import { Heading } from "@/components/ui/heading";
import SkillChart from "@/components/SkillChart";
import RankTimeline from "@/components/RankTimeline";
// import ToolsList // need to check if ported 
// import GitHubContributionsBlock // need to check if ported
import { ProcessFlowDiagram } from "@/components/Beams";
import { CertificatesBlock } from "@/blocks/CertificatesBlock";

import { getPortfolioData } from "@/utils/data";
import ToolsList from "@/components/skills/ToolsList";
import GitHubContributionsBlock from "@/blocks/GitHubContributionsBlock";


export const metadata = {
    title: "Skills - Developer Portfolio",
    description: "My technical expertise and proficiency across different technologies",
};

export default function SkillsPage() {
    const { stacks, charts } = getPortfolioData();

    return (
        <>
            <PageHero
                title="Skills & Tools"
                subtitle="My technical expertise and proficiency across different technologies"
            />
            <TechStackBlock stacks={stacks} />
            <Heading level="h2" gradient floating backplate>Skills Chart</Heading>

            {/* Client Component: SkillChart */}
            <SkillChart data={stacks} chartData={charts[0]} showButtons={true} />

            <section className="">
                <div className="container mx-auto">
                    <Heading level="h2" gradient floating backplate>Tech Timeline </Heading>
                    <RankTimeline />
                </div>
            </section>

            <ToolsList />
            <GitHubContributionsBlock />
            <Heading level="h2" gradient floating backplate>Development Process</Heading>
            <ProcessFlowDiagram />
            <CertificatesBlock showAll />
        </>
    );
}
