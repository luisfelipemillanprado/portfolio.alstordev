import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from '@/components/footer/rights/Rights.module.css';
// --
export default function Rights() {
  return (
    <div className={[styles.horizontal, styles.rights].join(' ')}>
      <Typography variant={'body1'} className={styles.rights_title}>
        @Alstordev
      </Typography>
      <Typography variant={'body1'} className={[styles.horizontal, styles.rights_text].join(' ')}>
        <CopyrightIcon className={styles.rights_icon} />
        2023. All rights reserved.
      </Typography>
    </div>
  );
}
