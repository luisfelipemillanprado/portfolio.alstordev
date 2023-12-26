// import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
/* const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
}); */
// --
const theme = createTheme({
  breakpoints: {
    values: {
      m320: 0,
      m360: 360,
      m375: 375,
      m390: 390,
      m410: 410,
      m480: 480,
      t600: 600,
      t900: 900,
      p1200: 1200,
      p1536: 1536,
    },
  },
  typography: {
    fontFamily: 'var(--font-family-1)',
    h4: {
      fontSize: '1.7rem',
      color: 'var(--primary-font-color)',
      lineHeight: 1.57,
      '@media screen and (min-width:390px)': {
        fontSize: '1.72rem',
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
    },
    h6: {
      fontSize: '1.7rem',
      color: 'var(--primary-font-color)',
      lineHeight: 1.57,
      '@media screen and (min-width:390px)': {
        fontSize: '1.76rem',
      },
    },
    body1: {
      fontSize: '1.5rem',
      color: 'var(--second-font-color)',
      '@media screen and (min-width:390px)': {
        fontSize: '1.54rem',
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
          borderRadius: 'var(--linear-progress-border-radius)',
          height: '0.6rem',
          backgroundColor: 'var(--third-card-background-color)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'var(--second-color-icon)',
            borderRadius: 'var(--linear-progress-border-radius)',
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
      defaultProps: {},
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
      defaultProps: {},
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '0rem 0rem 0rem 1.5rem',
          borderRadius: 'var(--linear-progress-border-radius)',
          fontSize: '1.4rem',
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
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {},
      styleOverrides: { root: ({ ownerState }) => ({ marginLeft: '0.1rem' }) },
    },
  },
});
export default theme;
