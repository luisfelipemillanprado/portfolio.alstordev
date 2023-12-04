import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '@/components/myservices/goprojects/GoProjects.module.css';
// --
export default function GoProjects(props) {
  const baseIcon = { color: 'var(--primary-font-color)', fontSize: '2rem' };
  const baseText = { color: 'var(--primary-font-color)', fontSize: '1.54rem', lineHeight: 'normal' };
  return (
    <div className={[styles.div_horizontal_positioning, styles.goprojects_container].join(' ')}>
      <Link
        className={[styles.div_horizontal_positioning, styles.goprojects_link].join(' ')}
        href={'/worksection'}
      >
        <Typography variant={'body2'} sx={baseText} className={styles.goprojects_text}>
          See projects
        </Typography>
        <div
          className={[styles.div_horizontal_positioning, styles.goprojects_right_icon_container].join(' ')}
        >
          <ArrowForwardIcon sx={baseIcon} className={styles.goprojects_right_icon} />
        </div>
      </Link>
    </div>
  );
}
