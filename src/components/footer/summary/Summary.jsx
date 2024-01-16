import FinalPoint from '@/components/decoration/FinalPoint';
import Typography from '@mui/material/Typography';
import styles from '@/components/footer/summary/Summary.module.css';
// --
export default function Summary() {
  return (
    <div className={[styles.vertical, styles.summary].join(' ')}>
      <div className={[styles.horizontal, styles.summary_container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.summary_title}>{`Don't be shy`}</Typography>
        <FinalPoint />
      </div>
      <div className={[styles.horizontal, styles.summary_container_paragraph].join(' ')}>
        <Typography variant={'body1'} className={styles.summary_paragraph}>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </Typography>
      </div>
    </div>
  );
}
