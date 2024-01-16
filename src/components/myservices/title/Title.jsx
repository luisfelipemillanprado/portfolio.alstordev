import FinalPoint from '@/components/decoration/FinalPoint';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/title/Title.module.css';
// --
export default function Title() {
  return (
    <div className={[styles.horizontal, styles.container_title].join(' ')}>
      <Typography variant={'h5'} className={styles.title}>
        What I can do
      </Typography>
      <FinalPoint />
    </div>
  );
}
