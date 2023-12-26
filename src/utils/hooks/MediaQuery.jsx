'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
// --
export default function MediaQuery(props) {
  const { query, children } = props;
  return <>{useMediaQuery(query, { noSsr: false }) ? children : null}</>;
}
