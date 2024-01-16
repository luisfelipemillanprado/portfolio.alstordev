import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import styles from '@/components/decoration/FinalPoint.module.css';
// --
export default function FinalPoint() {
  return (
    <div className={[styles.horizontal, styles.final_point_container].join(' ')}>
      <span className={styles.final_point_wrapper}>
        <FiberManualRecordRoundedIcon className={styles.final_point_icon} />
      </span>
    </div>
  );
}
