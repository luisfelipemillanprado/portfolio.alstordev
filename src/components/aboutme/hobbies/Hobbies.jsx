import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MotionDiv } from '@/libs/animation/Motion';
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
        {db.hobbies.map((element, index) => {
          return (
            <Grid key={element.id} item>
              <MotionDiv
                initial={{ opacity: 0, translateX: -20 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.4, delay: (index / 5) * 0.2, type: 'spring' }}
              >
                <Hobby {...{ hobby: element.hobby }} />
              </MotionDiv>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
