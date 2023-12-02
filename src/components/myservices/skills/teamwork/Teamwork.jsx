import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/skills/teamwork/Teamwork.module.css';
// --
export default function Teamwork(props) {
  const { text, percent } = props;
  const baseLinearProgress = {
    width: '100%',
    height: '0.6rem',
    borderRadius: '5rem',
    backgroundColor: 'var(--third-card-background-color)',
    '& .MuiLinearProgress-bar': { backgroundColor: 'var(--second-color-icon)', borderRadius: '5rem' },
  };
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  const baseSubText = { color: 'var(--second-font-color)', fontSize: '1.4rem' };
  return (
    <div className={[styles.div_vertical_positioning, styles.teamwork_container].join(' ')}>
      <Typography variant={'body1'} sx={baseText} className={styles.teamwork_text}>
        {text}
      </Typography>
      <div className={[styles.div_horizontal_positioning, styles.teamwork_progress_container].join(' ')}>
        <LinearProgress sx={baseLinearProgress} variant='determinate' value={percent} />
        <Typography variant={'body2'} sx={baseSubText}>{`${percent}%`}</Typography>
      </div>
    </div>
  );
}
