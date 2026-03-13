import { colorsTuple, createTheme } from "@mantine/core";

export const minimal_theme = createTheme({
  colors: {
    offwhite: colorsTuple("#FDFAF1"),
    sky: colorsTuple("#90B7BB"),
    wood: colorsTuple("#A58870"),
    olive: colorsTuple("#657060"),
    rose: colorsTuple("#A57071"),
    lavender: colorsTuple("#8C8597"),
    terracotta: colorsTuple("#B37A56"),
  },
  fontFamily: "HK Grotesk, sans-serif",
  headings: { fontFamily: "Adobe Garamond Pro, serif" },
});
