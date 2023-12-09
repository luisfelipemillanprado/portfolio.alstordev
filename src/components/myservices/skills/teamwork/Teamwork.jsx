import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/skills/teamwork/Teamwork.module.css';
// --
export default function Teamwork(props) {
  const { text, percent } = props;
  return (
    <div className={[styles.div_vertical_positioning, styles.teamwork_container].join(' ')}>
      <Typography variant={'body1'} className={styles.teamwork_text}>
        {text}
      </Typography>
      <div className={[styles.div_horizontal_positioning, styles.teamwork_progress_container].join(' ')}>
        <LinearProgress className={styles.teamwork_progress} variant='determinate' value={percent} />
        <Typography variant={'body2'}>{`${percent}%`}</Typography>
      </div>
    </div>
  );
}
