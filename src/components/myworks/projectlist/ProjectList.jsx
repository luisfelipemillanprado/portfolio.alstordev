import Project from '@/components/cards/project/Project';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import db from '@/utils/db/db';
import styles from '@/components/myworks/projectlist/ProjectList.module.css';
// --
export default function ProjectList(props) {
  return (
    <div className={[styles.div_vertical_positioning, styles.project_list_container].join(' ')}>
      <Typography variant={'h5'} className={styles.project_list_title}>
        Projects.
      </Typography>
      <Grid direction={'row'} sx={{ justifyContent: 'space-between' }} rowGap={2.3} container>
        {db.projects.map((element) => {
          return (
            <Grid item xs={5.6} key={element.id}>
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
