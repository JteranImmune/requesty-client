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

      //Backgrounds
      dark:"#101828",
      lightDark:"#344054",
      light:"#F2F4F7",
      

      //Boder
      border:"#EAECF0",

      // Error States
      error: '#D92D20',
      errorLight: '#FEE4E2',

      // Success States
      success: '#039855',
      successLight: '#D1FADF',
      disable: '#D0D5DD',

      // Text Colors
      textColor: '#101828',
      textColorLight: '#667085',
      backgroundColor: 'white',

      status:{
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

      priority:{
        //priority bg
        high: '#fee2e2',
        medium: '#fef9c3',
        low: '#dcfce7',
    
        //priority text
        highText: '#991b1b',
        mediumText: '#854d0e',
        lowText: '#027A48',
        },
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
        
        weight: {
            light: 300,
            normal: 400,
            medium: 600,
            bold: 800,
          },

        styles:{
            uppercase:"uppercase", 
            capitalize:"capitalize", 
            none:"none",
            underline:"underline"
        }  
    },

    // Responsive Breakpoints
    breakpoints: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
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

    // Containers
    containers: {
        default:"100%",
        sidebar: '17.5rem',    
        xsm: '20rem',    
        sm: '48rem',
        md: '60rem',
        lg: '80rem',
        xl: '96rem',
    },

    // Paddings
    padding: {
        xsmall: '0.25rem',
        small: '0.5rem',
        medium: '0.75rem',
        normal: '1rem',
        large: '1.5rem',
        xlarge: '2rem', 
        xxlarge: '2.5rem', 
    },

    // margin
    margin: {
        small: '0.25rem',
        medium: '0.5rem',
        normal: '1rem',
        large: '1.5rem',
        xlarge: '2rem', 
    },

    //dividers
    dividers: {
        solid: 'solid 1px #EAECF5',
        dashed: 'dashed 1px #EAECF5',
        solidWhite: 'solid 1px white'
    },

    //Border radius
    borderRadius: {
        none:'none',
        xs: '0.25rem',  
        sm: '.325rem',       
        base: '.5rem',     
        large: '1rem',     
        rr: '9999em',       
        circle: '50%',
    },

    //Icon size
    iconSize:{
        xsmall: "0.875rem",
        small: "1.125rem",
        regular: "1rem",
        medium: "1.5rem",
        large: "2.5rem"
    }
};

export default theme;