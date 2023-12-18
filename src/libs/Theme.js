// import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
/* const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
}); */
// --
const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-family-1)',
    h5: { fontSize: '2rem', color: 'var(--primary-font-color)', fontWeight: 500, lineHeight: 1.57 },
    h6: { fontSize: '1.7rem', color: 'var(--primary-font-color)', lineHeight: 1.57 },
    body1: { fontSize: '1.5rem', color: 'var(--second-font-color)' },
    body2: { fontSize: '1.5rem', color: 'var(--second-font-color)', lineHeight: 1.5 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '0.8rem',
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
          borderRadius: '5rem',
          height: '0.6rem',
          backgroundColor: 'var(--third-card-background-color)',
          '& .MuiLinearProgress-bar': { backgroundColor: 'var(--second-color-icon)', borderRadius: '5rem' },
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
            backgroundColor: 'var(--first-card-background-color)',
            borderRadius: '1.6rem',
            boxShadow: 'var(--box-shadow)',
            color: 'var(--second-font-color)',
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '0rem 0rem 0rem 1.5rem',
          borderRadius: '2rem',
          fontSize: '1.4rem',
          border: '0.1rem solid var(--second-color-icon)',
          color: 'var(--second-font-color)',
          '&:hover': { border: '0.1rem solid var(--second-color-icon)' },
        }),
      },
    },
  },
});
export default theme;
