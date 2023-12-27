import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
// --
export default function Alert(props) {
  const { open, autoHideDuration, severity, message, handleClose } = props;
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity}>
        <Typography variant={'body1'}>{message}</Typography>
      </MuiAlert>
    </Snackbar>
  );
}
