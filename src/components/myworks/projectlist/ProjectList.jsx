import Title from '@/components/title/Title';
import Project from '@/components/cards/project/Project';
import { Grid } from '@mui/material';
import { MotionDiv } from '@/libs/animation/Motion';
import db from '@/utils/db/db';
import styles from '@/components/myworks/projectlist/ProjectList.module.css';
// --
export default function ProjectList(props) {
  return (
    <div className={[styles.vertical, styles.project_list_container].join(' ')}>
      <div className={[styles.horizontal, styles.project_list_container_title].join(' ')}>
        <Title {...{ text: 'Projects' }} />
      </div>
      <Grid
        direction={'row'}
        sx={{ justifyContent: 'space-between' }}
        rowGap={{ m320: 1.6, m360: 1.8, m375: 1.9, m390: 2, m400: 2.6, m500: 2.2 }}
        container
      >
        {db.projects.map((element, index) => {
          return (
            <Grid
              m320={5.7}
              m400={5.6}
              m500={3.7}
              t768={2.8}
              t884={2.7}
              t1000={2.5}
              t1114={2.4}
              p1200={2.1}
              p1360={2}
              item
              key={element.id}
            >
              <MotionDiv
                initial={{ opacity: 0, translateX: index % 2 === 0 ? -17 : 17, translateY: -17 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1, delay: (index / 3) * 0.2, type: 'spring' }}
              >
                <Project
                  {...{
                    cover: element.cover,
                    title: element.title,
                    percent: element.percent,
                    href: element.href,
                  }}
                />
              </MotionDiv>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
