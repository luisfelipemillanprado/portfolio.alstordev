'use client';
import { useState, useRef } from 'react';
import Fab from '@mui/material/Fab';
import Popper from '@mui/material/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import styles from '@/components/button/Floating.module.css';
// --
export default function Floating() {
  const floatingIcon = { fontSize: '2.4rem' };
  const sendIcon = { fontSize: '2rem' };
  const fabRef = useRef();
  const [open, setOpen] = useState(false);
  /**
   * @function handleClick
   * @param {*} event
   */
  const handleClick = (event) => {
    setOpen((prev) => !prev);
  };
  /**
   * @function handleClickAway
   * @param {*} event
   */
  const handleClickAway = (event) => {
    setOpen(false);
  };
  const canBeOpen = open && Boolean(fabRef.current);
  const id = canBeOpen ? 'transition-popper' : undefined;
  // --
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.floating_container}>
        <Fab aria-label='add' ref={fabRef} onClick={handleClick}>
          <AddIcon sx={floatingIcon} />
        </Fab>
        <Popper id={id} open={open} anchorEl={fabRef.current} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={500}>
              <div>
                <Fab className={styles.floating_arrowup_button} href='#start'>
                  <ArrowUpwardRoundedIcon sx={floatingIcon} />
                </Fab>
                <Fab className={styles.floating_arrowup_button}>
                  <SendRoundedIcon sx={sendIcon} />
                </Fab>
              </div>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
}
