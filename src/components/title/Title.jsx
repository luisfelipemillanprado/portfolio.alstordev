import FinalPoint from '@/components/decoration/FinalPoint';
import Typography from '@mui/material/Typography';
import styles from '@/components/title/Title.module.css';
// --
export default function Title(props) {
  const { text } = props;
  return (
    <div className={[styles.horizontal, styles.container_title].join(' ')}>
      <Typography sx variant={'h5'} className={styles.title}>
        {text}
      </Typography>
      <FinalPoint {...{ form: false }} />
    </div>
  );
}
