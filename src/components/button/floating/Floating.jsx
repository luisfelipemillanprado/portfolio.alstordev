'use client';
import { useState, useRef, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Popper from '@mui/material/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import styles from '@/components/button/floating/Floating.module.css';
// --
export default function Floating() {
  const fabContainerRef = useRef();
  const fabRef = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handeleFab, { capture: false, once: false });
  }, []);

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
  /**
   * @function handeleFab
   * @param {*} event
   */
  const handeleFab = (event) => {
    if (document.documentElement.scrollTop > 330) {
      fabContainerRef.current.classList.add(styles.floating_show);
    } else {
      fabContainerRef.current.classList.remove(styles.floating_show);
      setOpen(false);
    }
  };
  const handleGoTop = (event) => {
    window.scrollTo({
      top: 0,
    });
  };
  // --
  const canBeOpen = open && Boolean(fabRef.current);
  const id = canBeOpen ? 'transition-popper' : undefined;
  // --
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.floating_container} ref={fabContainerRef}>
        <Fab aria-label='add' ref={fabRef} onClick={handleClick}>
          <AddIcon className={styles.floating_add_icon} />
        </Fab>
        <Popper id={id} open={open} anchorEl={fabRef.current} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={500}>
              <div>
                <Fab className={styles.floating_arrowup_button} onClick={handleGoTop}>
                  <ArrowUpwardRoundedIcon className={styles.floating_arrowup_icon} />
                </Fab>
                <Fab className={styles.floating_arrowup_button}>
                  <SendRoundedIcon className={styles.floating_send_icon} />
                </Fab>
              </div>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
}
