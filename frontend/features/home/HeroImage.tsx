"use client";

import { Image as MantineImage } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function HeroImage() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <MantineImage
      src="/images/index/stl-arch-2.webp"
      alt="Church members gather near the St. Louis Arch"
      style={{
        display: "block",
        width: "100%",
        height: isMobile ? "auto" : 600,
        aspectRatio: isMobile ? "1 / 1" : undefined,
        objectFit: "cover",
        objectPosition: "center 70%",
        overflow: "hidden",
      }}
    />
  );
}
