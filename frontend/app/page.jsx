import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import BlogPreview from "./_components/BlogPreview/BlogPreview";

export default async function Home() {
  const data = await fetchDataFromStrapi("/infoblocks-landing?populate[info_blocks][populate][0]=image&populate[info_blocks][populate][1]=button");

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
      <HeroSection headline={heroHeadline} />
      <InfoBlock data={infoBlockRaw} />
      <BlogPreview />
    </main>
  );
}
