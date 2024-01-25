import Advance from '@/components/myservices/skills/advance/Advance';
import Teamwork from '@/components/myservices/skills/teamwork/Teamwork';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { MotionDiv } from '@/libs/animation/Motion';
import db from '@/utils/db/db';
import styles from '@/components/myservices/skills/Skills.module.css';
// --
export default function Skills(props) {
  const { skills, title } = props;
  const arraySwitch = (skills) => {
    switch (skills) {
      case 'technical':
        return db.skills.technicalSkills;
      case 'soft':
        return db.skills.softSkills;
    }
  };
  return (
    <div className={[styles.vertical, styles.skills_container].join(' ')}>
      <div className={[styles.horizontal, styles.skills_container_title].join(' ')}>
        <Typography variant={'h6'} className={styles.skills_tilte}>
          {title}
        </Typography>
      </div>
      <Grid
        sx={{ justifyContent: 'space-between' }}
        columnGap={{
          m320: 2,
          m500: 4.5,
          t600: 3.4,
          t768: 1.8,
          t884: 2.6,
          t1000: 5,
          p1200: 5.4,
        }}
        rowGap={2}
        container
      >
        {arraySwitch(skills).map((skill, index) => {
          return (
            <Grid item key={skill.id}>
              {skills === 'soft' ? (
                <MotionDiv
                  initial={{ opacity: 0, translateX: -15 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1.2, delay: (index / 2) * 0.2, type: 'spring' }}
                >
                  <Teamwork {...{ text: skill.text, percent: skill.percent, ariaLabel: skill.ariaLabel }} />
                </MotionDiv>
              ) : (
                <MotionDiv
                  initial={{ opacity: 0, translateX: index % 2 === 0 ? -10 : 10, translateY: -10 }}
                  whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1.2, delay: (index / 5) * 0.2, type: 'spring' }}
                >
                  <Advance
                    {...{
                      icon: skill.icon,
                      text: skill.text,
                      percent: skill.percent,
                      ariaLabel: skill.ariaLabel,
                    }}
                  />
                </MotionDiv>
              )}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
