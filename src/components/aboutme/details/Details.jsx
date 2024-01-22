import Items from '@/components/checkbox/Item';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { MotionDiv } from '@/libs/animation/Motion';
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
        {db.details.map((element, index) => {
          return (
            <Grid key={element.id} item>
              <MotionDiv
                initial={{ opacity: 0, translateX: 45 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1.4, delay: (index / 3) * 0.2, type: 'spring' }}
              >
                <Items params={{ item: element.specification }} />
              </MotionDiv>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
