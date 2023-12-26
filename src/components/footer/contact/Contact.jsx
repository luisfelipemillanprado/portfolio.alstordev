import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { Grid } from '@mui/material';
import db from '@/utils/db/db';
import styles from '@/components/footer/contact/Contact.module.css';
// --
export default function Contact() {
  const contactIcon = { fontSize: '2.1rem', color: 'var(--second-color-icon)' };
  const array = [
    { icon: <PlaceIcon sx={contactIcon} />, text: db.contacts[0], id: Math.random() },
    { icon: <LocalPhoneIcon sx={contactIcon} rotate={90} />, text: db.contacts[1], id: Math.random() },
    { icon: <EmailIcon sx={contactIcon} />, text: db.contacts[2], id: Math.random() },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.contact].join(' ')}>
      <div className={[styles.div_horizontal_positioning, styles.contact_container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.contact_title}>{`Don't be shy.`}</Typography>
      </div>
      <div className={[styles.div_horizontal_positioning, styles.contact_container_paragraph].join(' ')}>
        <Typography variant={'body1'} className={styles.contact_paragraph}>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </Typography>
      </div>
      <Grid direction={'column'} rowGap={1} container>
        {array.map((element) => {
          return (
            <Grid key={element.id} className={styles.column} item>
              <div className={[styles.div_horizontal_positioning, styles.contact_icon_container].join(' ')}>
                {element.icon}
                <div className={[styles.div_vertical_positioning, styles.contact_text_container].join(' ')}>
                  <Typography variant={'body1'}>{element.text}</Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
