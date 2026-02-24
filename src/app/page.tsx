import { Metadata } from "next";

import { content } from "@/data/content";
import Hero from "@/slices/Hero";
import Features from "@/slices/Features";
import BigText from "@/slices/BigText";
import HowItWorks from "@/slices/HowItWorks";
import Download from "@/slices/Download";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function Index() {
  return (
    <>
      <Hero
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        body={content.hero.body}
        buttonText={content.hero.buttonText}
        buttonLink={content.hero.buttonLink}
        secondHeading={content.hero.secondHeading}
        secondBody={content.hero.secondBody}
      />
      <Features items={content.features.items} />
      <BigText />
      <HowItWorks steps={content.howItWorks.steps} />
      <Download
        heading={content.download.heading}
        body={content.download.body}
      />
    </>
  );
}
