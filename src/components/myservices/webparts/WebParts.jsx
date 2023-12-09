import Technology from '@/components/cards/technology/Technology';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/webparts/WebParts.module.css';
// --
export default function WebParts() {
  const array = [
    {
      icon: 'design',
      title: 'Design',
      phrase: 'Create a unique digital product.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'front-end',
      title: 'Frontend',
      phrase: 'Unique interfaces with Nextjs 14.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'back-end',
      title: 'Backend',
      phrase: 'Safe and functional logic with nodejs.',
      projects: 3,
      id: Math.random(),
    },
    {
      icon: 'seo',
      title: 'Seo',
      phrase: 'Improve the positioning of a website',
      projects: 3,
      id: Math.random(),
    },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.web_parts_container].join(' ')}>
      <Typography variant={'h5'} className={styles.web_parts_title}>
        What I can do.
      </Typography>
      <Grid rowGap={2} container>
        {array.map((element) => {
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
