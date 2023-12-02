import Technology from '@/components/cards/technology/Technology';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/webparts/WebParts.module.css';
// --
export default function WebParts() {
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '2rem' };
  return (
    <div className={[styles.div_vertical_positioning, styles.web_parts_container].join(' ')}>
      <Typography variant={'h5'} sx={baseTitle} className={styles.web_parts_title}>
        What I can do.
      </Typography>
      <Grid rowSpacing={2} container>
        <Grid item className={styles.web_parts_column}>
          <Technology
            {...{
              icon: 'design',
              title: 'Design',
              phrase: 'Create a unique digital product.',
              projects: 3,
            }}
          />
        </Grid>
        <Grid item className={styles.web_parts_column}>
          <Technology
            {...{
              icon: 'front-end',
              title: 'Frontend',
              phrase: 'Unique interfaces with Nextjs 14.',
              projects: 3,
            }}
          />
        </Grid>
        <Grid item className={styles.web_parts_column}>
          <Technology
            {...{
              icon: 'back-end',
              title: 'Backend',
              phrase: 'Safe and functional logic with nodejs.',
              projects: 3,
            }}
          />
        </Grid>
        <Grid item className={styles.web_parts_column}>
          <Technology
            {...{
              icon: 'seo',
              title: 'Seo',
              phrase: 'Improve the positioning of a website',
              projects: 3,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
