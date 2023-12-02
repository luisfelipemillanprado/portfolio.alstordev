import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from '@/components/footer/rights/Rights.module.css';
// --
export default function Rights() {
  const contactIcon = { fontSize: '1.6rem', marginRight: '0.5rem' };
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '1.5rem' };
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  return (
    <div className={[styles.div_horizontal_positioning, styles.rights].join(' ')}>
      <Typography variant='h5' sx={baseTitle} className={styles.rights_title}>
        @Alstordev
      </Typography>
      <Typography
        variant={'body2'}
        sx={baseText}
        className={[styles.div_horizontal_positioning, styles.rights_text].join(' ')}
      >
        <CopyrightIcon sx={contactIcon} />
        2023. All rights reserved.
      </Typography>
    </div>
  );
}
