import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from '@/components/aboutme/hobbies/Hobbies.module.css';
// --
export default function Hobbies() {
  const array = [
    { hobby: 'CINEMA', id: Math.random() },
    { hobby: 'CARS', id: Math.random() },
    { hobby: 'COFFEE', id: Math.random() },
    { hobby: 'MUSIC', id: Math.random() },
    { hobby: 'READ', id: Math.random() },
    { hobby: 'SPORTS', id: Math.random() },
    { hobby: 'MAC OS', id: Math.random() },
    { hobby: 'TRAVEL', id: Math.random() },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.hobbies_container].join(' ')}>
      <Typography variant={'h6'} className={styles.hobbies_title}>
        Hobbies :
      </Typography>
      <Grid direction={'row'} rowGap={1.3} sx={{ justifyContent: 'space-between' }} container>
        {array.map((element) => {
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
