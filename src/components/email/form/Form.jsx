'use client';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import styles from '@/components/email/form/Form.module.css';
// --
export default function Form() {
  const [open, setOpen] = useState(false);
  /**
   * @function handleClickOpen
   * @param {*} event
   */
  const handleClickOpen = (event) => {
    setOpen(true);
  };
  /**
   * @function handleClose
   * @param {*} event
   */
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <div className={[styles.div_horizontal_positioning, styles.form_container].join(' ')}>
      <IconButton className={styles.button} onClick={handleClickOpen}>
        <SendOutlinedIcon className={styles.button_icon} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={[styles.div_horizontal_positioning, styles.form_title].join(' ')}>
          SAY HI
          <div className={[styles.div_horizontal_positioning, styles.form_title_axiliar].join(' ')}>
            <span className={styles.form_title_icon_container}>
              <FiberManualRecordRoundedIcon className={styles.form_title_icon} />
            </span>
          </div>
        </DialogTitle>
        <DialogContent className={[styles.div_vertical_positioning, styles.form_content].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.form_inputs_container].join(' ')}>
            <input
              className={[styles.form_inputs, styles.form_input_email].join(' ')}
              type={'email'}
              id={'email'}
              placeholder={'Type your email'}
              autoComplete={'off'}
            />
          </div>
          <div className={[styles.div_horizontal_positioning, styles.form_inputs_container].join(' ')}>
            <textarea
              className={[styles.form_inputs, styles.form_input_message].join(' ')}
              id={'message'}
              placeholder={'Type your message'}
            />
          </div>
        </DialogContent>
        <DialogActions className={styles.form_action}>
          <Button id='send-email-action-button'>
            Send
            <div className={[styles.div_horizontal_positioning, styles.action_axiliar].join(' ')}>
              <TelegramIcon className={styles.form_action_icon} />
            </div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
