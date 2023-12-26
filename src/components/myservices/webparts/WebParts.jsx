import Technology from '@/components/cards/technology/Technology';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/myservices/webparts/WebParts.module.css';
// --
export default function WebParts() {
  return (
    <div className={[styles.div_vertical_positioning, styles.web_parts_container].join(' ')}>
      <div className={[styles.div_horizontal_positioning, styles.web_parts_container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.web_parts_title}>
          What I can do.
        </Typography>
      </div>
      <Grid rowGap={2} container>
        {db.webparts.map((element) => {
          return (
            <Grid key={element.id} item className={styles.web_parts_column}>
              <Technology
                {...{
                  icon: element.icon,
                  title: element.title,
                  phrase: element.phrase,
                  projects: element.projects,
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
