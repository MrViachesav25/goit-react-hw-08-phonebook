const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
}
  
const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}
  
const styles = {
    global: () => ({
      html: {
        width: '100%',
        height: '100%',
      },
  
      body: {
        width: '100%',
        height: '100%',
      },
  
      '#root': {
        width: '100%',
        height: '100%',
      },
  
      '*': {
        boxSizing: 'border-box',
      },
    }),
}
  
export const theme = extendTheme({
    colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        blue: {
            700: "#2C5282",
        }   
    },
    fonts: {
      heading: `'Rubik Variable', sans - serif`,
      body: `'Rubik Variable', sans - serif`,
    },
    breakpoints,
    styles,
    config,
    
});