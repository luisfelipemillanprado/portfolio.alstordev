'use client';
import { useState, useRef, useEffect } from 'react';
import FinalPoint from '@/components/decoration/FinalPoint';
import Alert from '@/components/email/alert/Alert';
import formValidation from '@/utils/validation/form/Form';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TelegramIcon from '@mui/icons-material/Telegram';
import db from '@/utils/db/db';
import styles from '@/components/email/form/Form.module.css';
// --
export default function Form() {
  const inputsValueRef = useRef({ email: '', message: 'Hello' });
  const alertMessageRef = useRef({
    severity: db.alertEmailType.success,
    message: db.alertEmailMessage.success,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [inputError, setInputError] = useState(false);
  useEffect(() => {
    const startButtonForm = document.getElementById('btn-form-start');
    const addStartButtonFormListener = (startButtonForm) => {
      startButtonForm.addEventListener('click', handleOpenDialog, { capture: false, once: false });
    };
    addStartButtonFormListener(startButtonForm);
  }, []);
  // --
  useEffect(() => {
    if (loading) {
      const sendEmail = async () => {
        const response = await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify(inputsValueRef.current),
        });
        const data = await response.json();
        setAlertMessage(data);
        setLoading(false);
        setOpenAlert(true);
      };
      sendEmail();
    }
  }, [loading]);

  /**
   * @function handleClickOpen
   * @param {Event} event
   */
  const handleOpenDialog = (event) => {
    setOpenDialog(true);
  };
  /**
   * @function handleClose
   * @param {Event} event
   */
  const handleCloseDialog = (event) => {
    setLoading(false);
    setOpenDialog(false);
  };
  /**
   * @function setAlertMessage
   * @param {*} data
   */
  const setAlertMessage = (data) => {
    if (data.error) {
      alertMessageRef.current.severity = db.alertEmailType.error;
      alertMessageRef.current.message = db.alertEmailMessage.error;
    }
  };
  /**
   * @function handleCloseAlert
   * @param {Event} event
   * @param {string} reason
   */
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  /**
   * @function handleInputs
   * @param {Event} event
   */
  const handleInputs = (event) => {
    if (event.target.id === 'email-input-dialog') {
      inputsValueRef.current.email = event.target.value;
    } else {
      inputsValueRef.current.message = event.target.value;
    }
  };
  /**
   * @function handleSendButton
   * @param {Event} event
   */
  const handleSendButton = (event) => {
    const validation = formValidation(inputsValueRef.current.email);
    if (validation) {
      setInputError(true);
    } else {
      if (inputError) {
        setInputError(false);
      }
      setLoading(true);
    }
  };
  return (
    <div className={[styles.horizontal, styles.form_container].join(' ')}>
      <Dialog open={openDialog} onClose={handleCloseDialog} component={'form'}>
        <DialogTitle className={[styles.horizontal, styles.form_title].join(' ')}>
          GET IN TOUCH
          <FinalPoint {...{ form: true }} />
        </DialogTitle>
        <DialogContent
          sx={inputError ? { gap: 0 } : null}
          className={[styles.vertical, styles.form_content].join(' ')}
        >
          <div className={[styles.horizontal, styles.form_inputs_container].join(' ')}>
            <TextField
              id={'email-input-dialog'}
              label={'Email'}
              error={inputError}
              helperText={
                inputError ? <span className={styles.form_error_text}>Enter valid email</span> : null
              }
              placeholder={'ex: user@gmail.com'}
              onChange={handleInputs}
            />
          </div>
          <div className={[styles.horizontal, styles.form_inputs_container].join(' ')}>
            <TextField
              id={'message-input-dialog'}
              label={'Message'}
              multiline
              rows={4}
              placeholder={'ex: Hello'}
              onChange={handleInputs}
            />
          </div>
        </DialogContent>
        <DialogActions className={styles.form_action}>
          <IconButton
            id={'send-email-action-button'}
            aria-label={'btn-send-email'}
            role={'button'}
            className={styles.form_action_send_button}
            onClick={handleSendButton}
          >
            SEND
            <div className={[styles.horizontal, styles.action_axiliar].join(' ')}>
              {loading ? (
                <CircularProgress className={styles.form_action_loader} />
              ) : (
                <TelegramIcon className={styles.form_action_icon} />
              )}
            </div>
          </IconButton>
        </DialogActions>
      </Dialog>
      {openAlert ? (
        <Alert
          {...{
            open: openAlert,
            autoHideDuration: 5500,
            severity: alertMessageRef.current.severity,
            message: alertMessageRef.current.message,
            handleClose: handleCloseAlert,
          }}
        />
      ) : null}
    </div>
  );
}
