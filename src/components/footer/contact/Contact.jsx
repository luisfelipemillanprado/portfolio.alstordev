import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { Grid } from '@mui/material';
import styles from '@/components/footer/contact/Contact.module.css';
// --
export default function Contact() {
  const contactIcon = { fontSize: '2.1rem', color: 'var(--second-color-icon)' };
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '2rem' };
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  return (
    <div className={[styles.div_vertical_positioning, styles.contact].join(' ')}>
      <Typography variant='h5' sx={baseTitle} className={styles.contact_title}>{`Don't be shy.`}</Typography>
      <Typography variant={'body1'} sx={baseText} className={styles.contact_paragraph}>
        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
        opportunities to be part of your visions.
      </Typography>
      <Grid direction={'column'} rowGap={1} container>
        <Grid sx={{ width: '100' }} item>
          <div className={[styles.div_horizontal_positioning, styles.contact_icon_container].join(' ')}>
            <PlaceIcon sx={contactIcon} />
            <div className={[styles.div_vertical_positioning, styles.contact_text_container].join(' ')}>
              <Typography variant={'body1'} sx={baseText}>
                Cuba, Cienfuegos{' '}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid sx={{ width: '100' }} item>
          <div className={[styles.div_horizontal_positioning, styles.contact_icon_container].join(' ')}>
            <LocalPhoneIcon sx={contactIcon} rotate={90} />
            <div className={[styles.div_vertical_positioning, styles.contact_text_container].join(' ')}>
              <Typography variant={'body1'} sx={baseText}>
                +53 55193306
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid sx={{ width: '100' }} item>
          <div className={[styles.div_horizontal_positioning, styles.contact_icon_container].join(' ')}>
            <EmailIcon sx={contactIcon} />
            <div className={[styles.div_vertical_positioning, styles.contact_text_container].join(' ')}>
              <Typography variant={'body1'} sx={baseText}>
                luisfelipemillanprado@gmail.com
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
