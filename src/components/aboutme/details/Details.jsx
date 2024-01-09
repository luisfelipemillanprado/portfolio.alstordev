import Items from '@/components/checkbox/Item';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/details/Details.module.css';
// --
export default function PersonalDetails(props) {
  return (
    <div className={[styles.vertical, styles.personal_details].join(' ')}>
      <div className={[styles.horizontal, styles.container_details_title].join(' ')}>
        <Typography variant={'h6'} className={styles.details_tilte}>
          Personal Details.
        </Typography>
      </div>
      <Grid sx={{ justifyContent: 'space-between' }} container>
        {db.details.map((element) => {
          return (
            <Grid key={element.id} item>
              <Items params={{ item: element.specification }} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
