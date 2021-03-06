import colors from './colors'

export default {
  breakpoints: ['640px', '960px'],
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64],
  colors: {
    text: colors.text.normal,
    purple: colors.purple.normal,
    blue: colors.blue.text,
    'purple-dark': colors.purple.dark,
    'bg-light': colors.background.light,
    'bg-lighter': colors.background.lighter,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'Avenir',
    head: 'bio-sans',
    code: 'Source Code Pro',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  buttons: {
    primary: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: colors.purple.normal,
      border: `solid 1px ${colors.purple.normal}`,
      transition: 'all 250ms',
      '&:hover': {
        backgroundColor: '#7E5CFD',
      },
    },
    outline: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: colors.purple.normal,
      backgroundColor: '#fff',
      border: `solid 1px ${colors.purple.normal}`,
      transition: 'all 250ms',
      '&:hover': {
        backgroundColor: '#FFFBFB',
      },
    },
    grey: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: colors.text.grey,
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      boxShadow: '0 1px 7px 0 rgba(0, 0, 0, 0.05)',
      borderRadius: '20px',
      '&:hover': {
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.15)',
        backgroundColor: '#66709c',
      },
      '&:active': {
        backgroundColor: colors.background.darkGrey,
      },
    },
    white: {
      fontFamily: 'bio-sans',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#5269ff',
      background: 'white',
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      borderRadius: '20px',
      fontSize: '15px',
      fontWeight: '900',

      '&:hover': {
        backgroundColor: '#ffca55',
        color: 'white',
        boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.15)',
      },
    },
    blue: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#5269ff',
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      borderRadius: '20px',

      '&:hover': {
        backgroundColor: '#3c55f9',
      },
    },
    gradientBlue: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: 'white',
      backgroundImage: 'linear-gradient(to right, #5269ff, #4890ff)',
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      borderRadius: '20px',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.1)',

      '&:hover': {
        backgroundColor: '#3c55f9',
      },
    },
    lightblue: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#5269ff',
      backgroundColor: '#eff1ff',
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: '#ced5ff',
      },
    },
    gradient: {
      fontFamily: 'bio-sans',
      fontSize: 13,
      fontWeight: 700,
      height: '2.7em',
      padding: '0 1.35em 0.15em',
      display: 'inline-block',
      cursor: 'pointer',
      color: 'white',
      backgroundImage: 'linear-gradient(to right, #5269ff, #4890ff)',
      border: `solid 0px ${colors.text.grey}`,
      transition: 'all 250ms',
      borderRadius: '20px',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.1)',

      '&:hover': {
        backgroundColor: '#3c55f9',
      },
    },
    submit: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: colors.green.normal,
      border: `solid 1px ${colors.green.normal}`,
      transition: 'all 250ms',
      '&:hover': {
        boxShadow: '0 3px 3px 0 #a6e7c4',
      },
      '&:focus': {
        backgroundColor: colors.green.darks,
      },
    },
    cancel: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: colors.red.normal,
      border: `solid 1px ${colors.red.normal}`,
      transition: 'all 250ms',
      '&:hover': {
        boxShadow: '0 3px 3px 0 #ffb4ac',
      },
      '&:focus': {
        backgroundColor: colors.red.darks,
      },
    },
    disable: {
      fontFamily: 'bio-sans',
      fontWeight: 400,
      fontSize: '0.85em',
      padding: '0.9em 3em',
      cursor: 'pointer',
      color: '#b1b8e7',
      backgroundColor: '#e8ebfd',
      pointerEvents: 'none',
    },
    disGradient: {
      fontFamily: 'bio-sans',
      fontSize: 13,
      fontWeight: 700,
      height: '2.7em',
      padding: '0 1.35em 0.15em',
      display: 'inline-block',
      color: '#989898',
      background: '#fafafa',
      border: `solid 0px ${colors.text.grey}`,
      borderRadius: '20px',
    },
  },
  cards: {
    primary: {
      border: `solid 1px #e7ecff`,
      borderRadius: 5,
      boxShadow: '0 12px 12px 0 #f3f5ff;',
    },

    detail: {
      border: `solid 1.5px #e7ecff`,
      borderRadius: 4,
      width: '100%',
      marginBottom: '20px',
    },

    modal: {
      border: `solid 1px #e7ecff`,
      borderRadius: 4,
      background: '#fff',
    },
    dashboard: {
      background: '#ffffff',
      borderRadius: '10px',
      border: 'solid 1px #e7ecff',
      padding: '10px 24px',
      overflow: 'hidden',
    },
    list: {
      background: colors.white,
      border: colors.border.light,
      boxShadow: colors.shadow.light,
    },
  },
}
