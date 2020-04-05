const minWidth = "320px"
const maxWidth = "812px"

const isMobileDevice =
  typeof window != "undefined" &&
  window.matchMedia(`(min-device-width: ${minWidth})`).matches &&
  window.matchMedia(`(max-device-width: ${maxWidth})`).matches

const onMobileLandscape =
  typeof window != "undefined" &&
  isMobileDevice &&
  window.matchMedia("(orientation: landscape)").matches
const onMobilePortrait =
  typeof window != "undefined" &&
  isMobileDevice &&
  window.matchMedia("(orientation: portrait)").matches

export const isOnMobile = onMobileLandscape || onMobilePortrait
