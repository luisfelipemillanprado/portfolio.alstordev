import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/hobbies/Hobbies.module.css';
// --
export default function Hobbies() {
  return (
    <div className={[styles.div_vertical_positioning, styles.hobbies_container].join(' ')}>
      <Typography variant={'h6'} className={styles.hobbies_title}>
        Hobbies :
      </Typography>
      <Grid direction={'row'} rowGap={{ xs: 1.3 }} sx={{ justifyContent: 'space-between' }} container>
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
