import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.66667,
  googleFonts: [
    {
      name: "Droid Serif",
      styles: ["700"],
    },
    {
      name: "Exo 2",
      styles: ["100", "300", "400", "400i", "900"],
    },
  ],
  headerFontFamily: ["Droid Serif", "serif"],
  bodyFontFamily: ["Exo 2", "sans-serif"],
})

export default typography
export const { options, rhythm, scale } = typography
