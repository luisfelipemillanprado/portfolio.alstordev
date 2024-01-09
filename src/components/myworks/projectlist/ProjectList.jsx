import Project from '@/components/cards/project/Project';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/myworks/projectlist/ProjectList.module.css';
// --
export default function ProjectList(props) {
  return (
    <div className={[styles.vertical, styles.project_list_container].join(' ')}>
      <div className={[styles.vertical, styles.project_list_container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.project_list_title}>
          Projects.
        </Typography>
      </div>
      <Grid
        direction={'row'}
        sx={{ justifyContent: 'space-between' }}
        rowGap={{ m320: 1.9, m360: 2.3, m390: 2.8, m400: 2.7, m540: 2.2, t600: 2.4 }}
        columns={{ m320: 12, m400: 12.4, m540: 13.2, t768: 13 }}
        container
      >
        {db.projects.map((element) => {
          return (
            <Grid m320={5.6} m360={5.6} m400={5.8} m540={4.1} t768={3} item key={element.id}>
              <Project
                {...{
                  cover: element.cover,
                  title: element.title,
                  percent: element.percent,
                  href: element.href,
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
