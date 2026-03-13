"use client";

import {
  Center,
  Divider,
  Grid,
  GridCol,
  Group,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import NextImage from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const WOOD_COLOR = "wood";
const SPACING_XL = "xl";
const SPACING_LG = "lg";

export function WhoWeAreSection() {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Grid px={SPACING_XL} gutter={SPACING_XL}>
      {/* Image Column */}
      <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
        <Center>
          <NextImage
            src="/images/index/who-we-are.webp"
            width={600}
            height={400}
            alt="Group photo illustrating 'Who We Are'"
            style={{
              borderRadius: largeRadius,
              display: "block",
              overflow: "hidden",
              objectFit: "cover",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Center>
      </GridCol>

      {/* Text Column */}
      <GridCol span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
        {isMobile && <Space h={SPACING_LG} />}

        <Group wrap="nowrap">
          <Title pr={SPACING_LG} order={1} textWrap="nowrap" c={WOOD_COLOR}>
            Who we are
          </Title>
          <Divider color={WOOD_COLOR} w="20%" />
        </Group>
        <Text c={WOOD_COLOR} ta="justify" size="xl">
          Welcome! We are believers in the Lord Jesus Christ, meeting simply as
          the church in St. Louis. This descrbies our identity as local
          Christians gathering based on the common faith revealed in the Bible -
          the same faith cherished by believers across the globe. If you&apos;re
          searching for a Christ-centered, Bible-believing community in St.
          Louis, we warmly welcome you. We look forward to meeting guests and
          visitors!
        </Text>

        {isMobile && <Space h={SPACING_XL} />}
      </GridCol>
    </Grid>
  );
}
