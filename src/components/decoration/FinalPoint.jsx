import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import styles from '@/components/decoration/FinalPoint.module.css';
// --
export default function FinalPoint(props) {
  const { form } = props;
  return (
    <div className={[styles.horizontal, styles.final_point_container].join(' ')}>
      <span className={[styles.final_point_wrapper, form ? styles.final_point_form_margin : ''].join(' ')}>
        <FiberManualRecordRoundedIcon
          className={form ? styles.final_point_form_icon : styles.final_point_icon}
        />
      </span>
    </div>
  );
}
