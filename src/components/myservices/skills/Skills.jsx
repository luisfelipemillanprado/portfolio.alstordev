import Advance from '@/components/myservices/skills/advance/Advance';
import Teamwork from '@/components/myservices/skills/teamwork/Teamwork';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
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
          m360: 2,
          m375: 2,
          m390: 2,
          m400: 2,
          m540: 4.5,
          t600: 3.4,
          t768: 1.8,
          t884: 2.2,
          t1114: 3.8,
          p1200: 5.4,
        }}
        rowGap={2}
        container
      >
        {arraySwitch(skills).map((skill) => {
          return (
            <Grid item key={skill.id}>
              {skills === 'soft' ? (
                <Teamwork {...{ text: skill.text, percent: skill.percent, ariaLabel: skill.ariaLabel }} />
              ) : (
                <Advance
                  {...{
                    icon: skill.icon,
                    text: skill.text,
                    percent: skill.percent,
                    ariaLabel: skill.ariaLabel,
                  }}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
