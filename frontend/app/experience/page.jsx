import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";
import HeroSection from "./../_components/HeroSection";
import InfoBlock from "./../_components/InfoBlock";

export default async function ExperiencePage() {
    const data = await fetchDataFromStrapi("/infoblocks-experience?populate[info_blocks][populate][0]=image&populate[info_blocks][populate][1]=button");

    const infoBlockRaw = processInfoBlocks(data)

    const heroHeadline = (
        <>
            <h1>barrel.</h1>
            <h1>your.</h1>
            <h1>happiness.</h1>
        </>
    )
    return (
        <main>
            <HeroSection headline={heroHeadline} theme="orange" imgSrc="/assets/hero-experience.png" />
            <InfoBlock data={infoBlockRaw} />
        </main>
    );
}
