import { Container, Space } from "@mantine/core";
import { Banner } from "@/features/home/Banner";
import { HeroImage } from "@/features/home/HeroImage";
import { WhoWeAreSection } from "@/features/home/WhoWeAreSection";

const SPACING_XL = "xl";
const SPACING_LG = "lg";

export default function Home() {
  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden", // Keep overflow hidden if desired
      }}
    >
      <Space h={SPACING_LG} />

      {/* Banner Section */}
      <Banner />

      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Church Group Photo (Banner Image) */}
      <HeroImage />

      <Space h={SPACING_XL} my={SPACING_XL} />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      <Space h={SPACING_XL} my={SPACING_XL} />
    </Container>
  );
}
