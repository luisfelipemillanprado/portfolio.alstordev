import Hobby from '@/components/cards/hobby/Hobby';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from '@/components/aboutme/hobbies/Hobbies.module.css';
// --
export default function Hobbies() {
  const baseText = { fontSize: '1.7rem', color: 'var(--primary-font-color)' };
  return (
    <div className={[styles.div_vertical_positioning, styles.hobbies_container].join(' ')}>
      <Typography variant={'h6'} sx={baseText} className={styles.hobbies_title}>
        Hobbies :
      </Typography>
      <Grid direction={'row'} rowGap={1.3} sx={{ justifyContent: 'space-between' }} container>
        <Grid item>
          <Hobby {...{ hobby: 'CINEMA' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'CARS' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'COFFEE' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'MUSIC' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'READ' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'SPORTS' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'MAC OS' }} />
        </Grid>
        <Grid item>
          <Hobby {...{ hobby: 'TRAVEL' }} />
        </Grid>
      </Grid>
    </div>
  );
}
