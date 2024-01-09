import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { Grid } from '@mui/material';
import db from '@/utils/db/db';
import styles from '@/components/footer/contact/Contact.module.css';
// --
export default function Contact() {
  const array = [
    { icon: <PlaceIcon className={styles.contact_icon} />, text: db.contacts[0], id: Math.random() },
    {
      icon: <LocalPhoneIcon className={styles.contact_icon} rotate={90} />,
      text: db.contacts[1],
      id: Math.random(),
    },
    { icon: <EmailIcon className={styles.contact_icon} />, text: db.contacts[2], id: Math.random() },
  ];
  return (
    <div className={[styles.vertical, styles.contact].join(' ')}>
      <Grid rowGap={{ m320: 1.4, t768: 2 }} sx={{ justifyContent: 'space-between' }} container>
        {array.map((element) => {
          return (
            <Grid key={element.id} className={styles.column} item>
              <div className={[styles.horizontal, styles.contact_icon_container].join(' ')}>
                {element.icon}
                <div className={[styles.vertical, styles.contact_text_container].join(' ')}>
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
