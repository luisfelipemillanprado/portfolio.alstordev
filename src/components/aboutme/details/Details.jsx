import Items from '@/components/checkbox/Item';
import Typography from '@mui/material/Typography';
import MediaQuery from '@/utils/hooks/MediaQuery';
import { Grid } from '@mui/material';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/details/Details.module.css';
// --
export default function PersonalDetails(props) {
  return (
    <div className={[styles.div_vertical_positioning, styles.personal_details].join(' ')}>
      <div className={[styles.div_horizontal_positioning, styles.container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.personal_details_title}>
          Hello! I am Luis Felipe.
        </Typography>
      </div>
      <div className={[styles.div_horizontal_positioning, styles.container_paragraph].join(' ')}>
        <Typography variant={'body1'} className={styles.personal_details_paragraph}>
          I am a passionate{' '}
          <MediaQuery
            {...{
              query: '(min-width:320px) and (max-width:359px)',
              children: <span>full stack developer </span>,
            }}
          />{' '}
          <MediaQuery
            {...{
              query: '(min-width:360px) and (max-width:370px)',
              children: <span className={styles.highlight}>full stack developer </span>,
            }}
          />{' '}
          <MediaQuery
            {...{
              query: '(min-width:371px) and (max-width:390px)',
              children: (
                <span className={styles.highlight}>
                  {'< '}full stack developer{' >'}{' '}
                </span>
              ),
            }}
          />{' '}
          <MediaQuery
            {...{
              query: '(min-width:391px)',
              children: (
                <span className={styles.highlight}>
                  {'< '}full stack developer{' / >'}{' '}
                </span>
              ),
            }}
          />{' '}
          who is constantly looking for new technologies to create innovative solutions. I stay up to date and
          am proactive in adapting to future user needs.
        </Typography>
      </div>
      <div className={[styles.div_horizontal_positioning, styles.container_details_title].join(' ')}>
        <Typography variant={'h6'} className={styles.details_tilte}>
          Personal Details :
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
