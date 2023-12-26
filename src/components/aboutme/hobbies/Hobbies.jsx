import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/hobbies/Hobbies.module.css';
// --
export default function Hobbies() {
  return (
    <div className={[styles.div_vertical_positioning, styles.hobbies_container].join(' ')}>
      <div className={[styles.div_horizontal_positioning, styles.hobbies_container_title].join(' ')}>
        <Typography variant={'h6'} className={styles.hobbies_title}>
          Hobbies :
        </Typography>
      </div>
      <Grid
        direction={'row'}
        rowGap={{ m360: 1.2, m375: 2, m390: 1.8 }}
        columns={{ m360: 13, m375: 13, m390: 13, m410: 13.2 }}
        sx={{ justifyContent: 'space-between' }}
        container
      >
        {db.hobbies.map((element) => {
          return (
            <Grid m360={4} key={element.id} item>
              <Hobby {...{ hobby: element.hobby }} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
