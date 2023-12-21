import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// --
export default function Alert(props) {
  const { open, autoHideDuration, severity, message, handleClose } = props;
  console.log(props);
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}
