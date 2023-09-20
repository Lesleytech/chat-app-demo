export const themeBreakPoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

export const mediaQueries = {
  MOBILE: `(max-width: ${themeBreakPoints.md})`,
  ABOVE_MOBILE: `(min-width: ${themeBreakPoints.md})`,
};
