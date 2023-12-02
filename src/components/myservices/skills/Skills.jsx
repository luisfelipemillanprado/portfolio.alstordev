import Advance from '@/components/myservices/skills/advance/Advance';
import Teamwork from '@/components/myservices/skills/teamwork/Teamwork';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from '@/components/myservices/skills/Skills.module.css';
// --
export default function Skills(props) {
  const { skills, title } = props;
  const baseText = { color: 'var(--primary-font-color)', fontSize: '1.7rem' };
  const technicalSkills = [
    { icon: 'html', text: 'HTML', percent: 75, id: 1 },
    { icon: 'css', text: 'CSS', percent: 75, id: 2 },
    { icon: 'animation', text: 'Anim...', percent: 75, id: 3 },
    { icon: 'javascript', text: 'JS', percent: 75, id: 4 },
    { icon: 'figma', text: 'Figma', percent: 75, id: 5 },
    { icon: 'react', text: 'React', percent: 75, id: 6 },
    { icon: 'nextjs', text: 'Next', percent: 75, id: 7 },
    { icon: 'nodejs', text: 'Node', percent: 75, id: 8 },
    { icon: 'mongodb', text: 'Mongo', percent: 75, id: 9 },
    { icon: 'express', text: 'Express', percent: 75, id: 10 },
  ];
  const softSkills = [
    { text: 'Communication', percent: 80, id: 11 },
    { text: 'Teamwork', percent: 75, id: 12 },
    { text: 'Creativity', percent: 99, id: 13 },
    { text: 'Dedication', percent: 95, id: 14 },
    { text: 'Adaptability', percent: 75, id: 15 },
  ];
  const arraySwitch = (skills) => {
    switch (skills) {
      case 'technical':
        return technicalSkills;
      case 'soft':
        return softSkills;
    }
  };
  return (
    <div className={[styles.div_vertical_positioning, styles.skills_container].join(' ')}>
      <Typography variant={'h6'} sx={baseText} className={styles.skills_tilte}>
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
