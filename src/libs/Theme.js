import { createTheme } from '@mui/material/styles';
// --
const theme = createTheme({
  breakpoints: {
    values: {
      m0: 0,
      m320: 320,
      m360: 360,
      m375: 375,
      m390: 390,
      m400: 400,
      m500: 500,
      t600: 600,
      t768: 768,
      t820: 820,
      t884: 884,
      t1000: 1000,
      t1114: 1114,
      p1200: 1200,
      p1360: 1360,
    },
  },
  typography: {
    fontFamily: 'var(--font-family-1)',
    h4: {
      fontSize: '1.7rem',
      color: 'var(--primary-font-color)',
      fontWeight: 550,
      lineHeight: 1.57,
      '@media screen and (min-width:390px)': {
        fontSize: '1.72rem',
      },
      '@media screen and (min-width:500px)': {
        fontSize: '1.74rem',
      },
    },
    h5: {
      fontSize: '2rem',
      color: 'var(--primary-font-color)',
      fontWeight: 500,
      lineHeight: 1.57,
      '@media screen and (min-width:390px)': {
        fontSize: '2.1rem',
      },
      '@media screen and (min-width:500px)': {
        fontSize: '2.2rem',
      },
      '@media screen and (min-width:1114px)': {
        fontSize: '2.3rem',
      },
    },
    h6: {
      fontSize: '1.7rem',
      color: 'var(--primary-font-color)',
      lineHeight: 1.57,
      '@media screen and (min-width:390px)': {
        fontSize: '1.78rem',
      },
      '@media screen and (min-width:400px)': {
        fontSize: '1.8rem',
      },
      '@media screen and (min-width:500px)': {
        fontSize: '1.87rem',
      },
      '@media screen and (min-width:768px)': {
        fontSize: '1.85rem',
      },
      '@media screen and (min-width:1114px)': {
        fontSize: '1.9rem',
      },
    },
    body1: {
      fontSize: '1.5rem',
      color: 'var(--second-font-color)',
      '@media screen and (min-width:390px)': {
        fontSize: '1.56rem',
      },
      '@media screen and (min-width:400px)': {
        fontSize: '1.58rem',
      },
      '@media screen and (min-width:500px)': {
        fontSize: '1.64rem',
      },
      '@media screen and (min-width:600px)': {
        fontSize: '1.65rem',
      },
      '@media screen and (min-width:1114px)': {
        fontSize: '1.7rem',
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 'var(--basic-border-radius)',
          boxShadow: 'var(--box-shadow)',
          color: 'var(--second-font-color)',
          '& .MuiCardHeader-action': { alignSelf: 'auto', margin: 'auto' },
        }),
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: 'var(--third-card-background-color)',
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 'var(--half-border-radius)',
          height: '0.6rem',
          backgroundColor: 'var(--third-card-background-color)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'var(--second-color-icon)',
            borderRadius: 'var(--half-border-radius)',
          },
        }),
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiStepContent-root': { borderLeft: '1px solid var(--primary-background-border)' },
        }),
      },
    },
    MuiFab: {
      defaultProps: { size: 'small' },
      styleOverrides: {
        root: ({ ownerState }) => ({
          backgroundColor: 'var(--second-card-background-color)',
          color: 'var(--second-font-color)',
          boxShadow: 'var(--box-shadow)',
          '&:hover': { backgroundColor: 'var(--second-card-background-color)' },
        }),
      },
    },
    MuiPopper: {
      defaultProps: {
        placement: 'top',
        disablePortal: true,
        modifiers: [
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: false,
              rootBoundary: 'viewport',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: false,
            options: {
              altAxis: false,
              altBoundary: false,
              tether: false,
              rootBoundary: 'document',
              padding: 8,
            },
          },
        ],
      },
      styleOverrides: {
        root: ({ ownerState }) => ({ display: 'flex', flexFlow: 'column nowrap' }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiDialog-paper': {
            backgroundImage: 'var(--dialog-background-color)',
            borderRadius: 'var(--basic-border-radius)',
            boxShadow: 'var(--box-shadow)',
            color: 'var(--second-font-color)',
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '0.1rem 0rem 0.1rem 1.5rem',
          color: 'var(--second-font-color)',
        }),
      },
    },
    MuiTextField: {
      defaultProps: { fullWidth: true },
      styleOverrides: {
        root: ({ ownerState }) => ({
          // cambia el color del label del inputs.
          '& label.Mui-focused': {
            color: 'var(--primary-font-color)',
          },
          // cambia el color del border del input
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'var(--primary-background-border)' },
          },
          // cambia el color de la letra del input
          '& div': { color: 'var(--second-font-color)' },
          '& input': { padding: '1.46rem 1.4rem' },
        }),
      },
    },
    MuiAlert: {
      defaultProps: { elevation: 6, variant: 'filled' },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 'var(--basic-border-radius)',
          '& .mui-ptiqhd-MuiSvgIcon-root': { fontSize: '1.6rem' },
          '& .mui-1vooibu-MuiSvgIcon-root': { fontSize: '2rem' },
          '& .mui-1ytlwq5-MuiAlert-icon': { alignItems: 'center' },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: { root: ({ ownerState }) => ({ marginLeft: '0.1rem' }) },
    },
  },
});
export default theme;
