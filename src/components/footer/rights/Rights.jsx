import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from '@/components/footer/rights/Rights.module.css';
// --
export default function Rights() {
  const contactIcon = { fontSize: '1.6rem', marginRight: '0.5rem' };
  return (
    <div className={[styles.div_horizontal_positioning, styles.rights].join(' ')}>
      <Typography variant={'body1'} className={styles.rights_title}>
        @Alstordev
      </Typography>
      <Typography
        variant={'body1'}
        className={[styles.div_horizontal_positioning, styles.rights_text].join(' ')}
      >
        <CopyrightIcon sx={contactIcon} />
        2023. All rights reserved.
      </Typography>
    </div>
  );
}
