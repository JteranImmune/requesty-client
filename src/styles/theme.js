const theme = {
    colors: {
      // Primary 
      primary: '#6941C6',
      primaryLight: '#F4EBFF',
      primaryHover: '#7F56D9',
      primaryDark: '#42307D',

      // Secondary
      secondary: '#363F72',
      secondaryLight: '#EAECF5',
      secondaryHover: '#B3B8DB',
      secondaryDark: '#101323',

      //Base
      baseWhite:'#F9FAFB',
      baseBlack:'#101828',

      // Error States
      error: '#D92D20',
      errorLight: '#FEE4E2',

      // Success States
      success: '#039855',
      successLight: '#D1FADF',

      // Text Colors
      textColor: '#101828',
      textColorLight: '#667085',
      backgroundColor: 'white',

      //status bg
      submitted: '#EAECF0',
      inProgress: '#EFF8FF',
      completed: '#ECFDF3',
      onHold: '#FEF6EE',

      //status text
      submittedText: '#344054',
      inProgressText: '#175CD3',
      completedText: '#027A48',
      onHoldText: '#B93815',
    },

    // Typography
    font:{
        family: "'Public Sans', sans-serif",

        display:{
           xxl: "4.5em",
            xl: "3.75em",
            lg: "3em",
            md: "2.25em",
            sm: "1.875em",
            xs: "1.5em",
        },

        text: {
            xl:"1.25em", 
            lg:"1.125em", 
            md:"1em", 
            sm:"0.875em", 
            xs:"0.75em", 
        },
    },

    // Responsive Breakpoints
    breakpoints: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },

    // Spacing
    spacing: (name, scale) => {
        return `${scale[name] / 16}rem`
    },
    scale: {
        xsmall:4,
        small: 8,
        medium: 16,
        large: 32,
        xlarge: 64,
        huge: 128,
    },
    
    // Shadows
    shadows: {
        none: 'none',
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
        sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06);',
        md: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);',
        xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);',
        xxl: '0px 24px 48px -12px rgba(16, 24, 40, 0.18);',
    },

    // containers
    containers: {
        default: {
            maxWidth: "100%"
        },
        sm: {
            maxWidth: "40rem"
        },
        md: {
            maxWidth: "48rem"
        },
        lg: {
            maxWidth: "64rem"
        },
        xl: {
            maxWidth: "80rem"
        },
    },

    // Paddings
    spacers: {
        small:'4px',
        medium:'8px',
        large:'16px',
        xlarge:'32px',
    },

    paddings: (theme) => ({
        ...theme.spacers,
        top: theme.spacing(1),
        right: theme.spacing(1),
        bottom: theme.spacing(1),
        left: theme.spacing(1),
        horizontal: theme.spacing(2),
        vertical: theme.spacing(2),
        all: `${theme.spacing(1)}`,
        zero: `0`
    }),

    //dividers
    dividers: {
        solid: 'solid 1px #EAECF5',
        dashed: 'dashed 1px #EAECF5',
        solidWhite: 'solid 1px white'
    },
};

export default theme;