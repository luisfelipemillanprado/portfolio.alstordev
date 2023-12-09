import Project from '@/components/cards/project/Project';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from '@/components/myworks/projectlist/ProjectList.module.css';
// --
export default function ProjectList(props) {
  const array = [
    {
      cover: 'pet-shelter',
      title: 'Pet Shelter',
      percent: 90,
      href: 'https://github.com/luisfelipemillanprado/Take-me-Home',
      id: Math.random(),
    },
    {
      cover: 'bit-coin',
      title: 'Bitcoin',
      percent: 99,
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
    {
      cover: 'work-portfolio',
      title: 'Portfolio',
      percent: 99,
      href: 'https://github.com/luisfelipemillanprado/work-portfolio',
      id: Math.random(),
    },
    {
      cover: 'ti',
      title: 'Ticket',
      percent: 30,
      href: 'https://github.com/luisfelipemillanprado/luisfelipemillanprado.github.io',
      id: Math.random(),
    },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.project_list_container].join(' ')}>
      <Typography variant={'h5'} className={styles.project_list_title}>
        Projects.
      </Typography>
      <Grid direction={'row'} sx={{ justifyContent: 'space-between' }} rowGap={2.3} container>
        {array.map((element) => {
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
