import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/hobbies/Hobbies.module.css';
// --
export default function Hobbies() {
  return (
    <div className={[styles.vertical, styles.hobbies_container].join(' ')}>
      <div className={[styles.horizontal, styles.hobbies_container_title].join(' ')}>
        <Typography variant={'h6'} className={styles.hobbies_title}>
          My Hobbies.
        </Typography>
      </div>
      <Grid
        direction={'row'}
        rowGap={{
          m320: 1.2,
          m360: 1.3,
          m375: 2,
          m390: 1.8,
          m400: 2.1,
          m500: 1.9,
          t600: 1.8,
          t768: 1.3,
          t820: 1.5,
          t884: 1.7,
          t1000: 2,
          t1114: 2.1,
          p1200: 1.9,
          p1360: 1.4,
        }}
        sx={{ justifyContent: 'space-between' }}
        container
      >
        {db.hobbies.map((element) => {
          return (
            <Grid key={element.id} item>
              <Hobby {...{ hobby: element.hobby }} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
