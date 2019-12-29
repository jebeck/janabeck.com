import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.66667,
  googleFonts: [
    {
      name: "Source Sans Pro",
    },
    {
      name: "Exo 2",
    },
  ],
  headerFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyFontFamily: ["Exo 2", "sans-serif"],
})

export default typography
export const { options, rhythm, scale } = typography
