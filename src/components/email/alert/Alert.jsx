import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// --
export default function Alert(props) {
  const { open, autoHideDuration, severity, message, handleClose } = props;
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}
