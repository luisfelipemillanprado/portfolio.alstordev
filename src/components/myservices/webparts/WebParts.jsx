import Technology from '@/components/cards/technology/Technology';
import { Grid } from '@mui/material';
import { MotionDiv } from '@/libs/animation/Motion';
import db from '@/utils/db/db';
import styles from '@/components/myservices/webparts/WebParts.module.css';
// --
export default function WebParts() {
  return (
    <div className={[styles.vertical, styles.web_parts_container].join(' ')}>
      <Grid rowGap={2} container>
        {db.webparts.map((element, index) => {
          return (
            <Grid key={element.id} item className={styles.web_parts_column}>
              <MotionDiv
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, delay: (index / 3) * 0.2, type: 'spring' }}
              >
                <Technology
                  {...{
                    icon: element.icon,
                    title: element.title,
                    phrase: element.phrase,
                    projects: element.projects,
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
