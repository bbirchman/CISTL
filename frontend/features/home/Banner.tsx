"use client";

import { Grid, GridCol, Space, Title, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const WOOD_COLOR = "wood";
const SPACING_XL = "xl";

export function Banner() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  const titleSize = isMobile ? "250%" : "400%";

  return (
    <>
      <Grid align="center" px={SPACING_XL}>
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
        <GridCol span={{ base: 9, md: 4 }}>
          <Title
            order={1}
            size={titleSize}
            ta="right"
            textWrap="nowrap"
            c={WOOD_COLOR}
          >
            Truth, Life,
          </Title>
        </GridCol>
        <GridCol span={{ base: "auto", md: 6 }}>
          <Divider color={WOOD_COLOR} />
        </GridCol>
      </Grid>

      <Grid align="center" px={SPACING_XL}>
        <GridCol span={{ base: "auto", md: 5 }}>
          <Divider color={WOOD_COLOR} />
        </GridCol>
        <GridCol span={{ base: 9, md: 3 }}>
          <Title
            order={1}
            size={titleSize}
            ta="left"
            textWrap="nowrap"
            c={WOOD_COLOR}
          >
            Church, Gospel
          </Title>
        </GridCol>
        <GridCol span={{ base: 0, md: "auto" }}>
          <Space />
        </GridCol>
      </Grid>
    </>
  );
}
