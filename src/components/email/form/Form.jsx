'use client';
import { useState, useRef, useEffect } from 'react';
import Alert from '@/components/email/alert/Alert';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import db from '@/utils/db/db';
import styles from '@/components/email/form/Form.module.css';
// --
export default function Form() {
  const inputsValueRef = useRef({ email: '', message: '' });
  const alertMessageRef = useRef({
    severity: db.alertEmailType.success,
    message: db.alertEmailMessage.success,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  useEffect(() => {
    if (loading) {
      const sendEmail = async () => {
        const response = await fetch('/api/send', {
          method: 'POST',
          body: JSON.stringify(inputsValueRef.current),
        });
        const data = await response.json();
        console.log(data);
        setAlertMessage(data);
        setLoading(false);
        setOpenAlert(true);
      };
      sendEmail();
    }
  }, [loading]);

  /**
   * @function handleClickOpen
   * @param {*} event
   */
  const handleOpenDialog = (event) => {
    setOpenDialog(true);
  };
  /**
   * @function handleClose
   * @param {*} event
   */
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
  };
  /**
   * @function setAlertMessage
   * @param {*} data
   */
  const setAlertMessage = (data) => {
    if (data.error) {
      if (
        data.error.cause.code === db.alertTypeError.connectTimeout ||
        data.error.code === db.alertTypeError.notConnect
      ) {
        alertMessageRef.current.severity = db.alertEmailType.error;
        alertMessageRef.current.message = db.alertEmailMessage.error;
      } else {
        alertMessageRef.current.severity = db.alertEmailType.warning;
        alertMessageRef.current.message = db.alertEmailMessage.default;
      }
    }
  };
  /**
   * @function handleCloseAlert
   * @param {*} event
   */
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  /**
   * @function handleInputs
   * @param {*} event
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
   * @param {*} event
   */
  const handleSendButton = async (event) => {
    setLoading(true);
  };
  return (
    <div className={[styles.div_horizontal_positioning, styles.form_container].join(' ')}>
      <IconButton className={styles.button} onClick={handleOpenDialog}>
        <SendOutlinedIcon className={styles.button_icon} />
      </IconButton>
      <Dialog open={openDialog} onClose={handleCloseDialog} component={'form'}>
        <DialogTitle className={[styles.div_horizontal_positioning, styles.form_title].join(' ')}>
          GET IN TOUCH
          <div className={[styles.div_horizontal_positioning, styles.form_title_axiliar].join(' ')}>
            <span className={styles.form_title_icon_container}>
              <FiberManualRecordRoundedIcon className={styles.form_title_icon} />
            </span>
          </div>
        </DialogTitle>
        <DialogContent className={[styles.div_vertical_positioning, styles.form_content].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.form_inputs_container].join(' ')}>
            <TextField id='email-input-dialog' label='Email' onChange={handleInputs} />
          </div>
          <div className={[styles.div_horizontal_positioning, styles.form_inputs_container].join(' ')}>
            <TextField id='message-input-dialog' label='Message' multiline rows={4} onChange={handleInputs} />
          </div>
        </DialogContent>
        <DialogActions className={styles.form_action}>
          <IconButton id='send-email-action-button' onClick={handleSendButton}>
            SEND
            <div className={[styles.div_horizontal_positioning, styles.action_axiliar].join(' ')}>
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
            autoHideDuration: 6000,
            severity: alertMessageRef.current.severity,
            message: alertMessageRef.current.message,
            handleClose: handleCloseAlert,
          }}
        />
      ) : null}
    </div>
  );
}
