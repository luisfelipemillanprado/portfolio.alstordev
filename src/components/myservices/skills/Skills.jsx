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
    <div className={[styles.div_vertical_positioning, styles.skills_container].join(' ')}>
      <Typography variant={'h6'} className={styles.skills_tilte}>
        {title}
      </Typography>
      <Grid sx={{ justifyContent: 'space-between' }} columnGap={2} rowGap={2} container>
        {arraySwitch(skills).map((skill) => {
          return (
            <Grid item key={skill.id}>
              {skills === 'soft' ? (
                <Teamwork {...{ text: skill.text, percent: skill.percent }} />
              ) : (
                <Advance {...{ icon: skill.icon, text: skill.text, percent: skill.percent }} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
