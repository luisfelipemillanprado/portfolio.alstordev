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
          m360: 1.2,
          m375: 2,
          m390: 1.8,
          t600: 3,
          t768: 1.3,
          t820: 1.5,
          t884: 1.7,
          t1114: 2.1,
          p1200: 2,
        }}
        columns={{
          m320: 12.6,
          m360: 13,
          m375: 13,
          m390: 13,
          m400: 13.2,
          m540: 13.2,
          t600: 14.8,
          t768: 12.9,
          t820: 13,
          t834: 13.2,
          t1114: 18.4,
          p1200: 16.8,
        }}
        sx={{ justifyContent: 'space-between' }}
        container
      >
        {db.hobbies.map((element) => {
          return (
            <Grid m320={4} m360={4} m540={3} t600={3} t768={3} t1114={4} p1200={3} key={element.id} item>
              <Hobby {...{ hobby: element.hobby }} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
