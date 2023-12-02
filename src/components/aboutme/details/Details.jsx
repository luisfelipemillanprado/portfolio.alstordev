import Items from '@/components/checkbox/Item';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from '@/components/aboutme/details/Details.module.css';
// --
export default function PersonalDetails(props) {
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '2rem' };
  const baseSubTitle = { color: 'var(--primary-font-color)', fontSize: '1.7rem' };
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  const array = [
    { specification: 'Age : 24 years', id: Math.random() },
    { specification: 'Job : Freelancer', id: Math.random() },
    { specification: 'Email : luisfelipemillanprado@gmail.com', id: Math.random() },
    { specification: 'Phone : +53 55193306', id: Math.random() },
    { specification: 'Developer name : @alstordev', id: Math.random() },
    { specification: 'Idioms : Spanish, English', id: Math.random() },
    { specification: 'Graduate : Software Engineer', id: Math.random() },
  ];
  return (
    <div className={[styles.div_vertical_positioning, styles.personal_details].join(' ')}>
      <Typography
        variant={'h5'}
        sx={baseTitle}
        className={[styles.personal_details_title, styles.greeting_tilte].join(' ')}
      >
        Hello! I am Luis Felipe.
      </Typography>
      <Typography variant={'body1'} sx={baseText} className={styles.personal_details_paragraph}>
        {`I'm a passionate full stack developer who is constantly looking for new technologies to
            create innovative solutions. I stay up to date and am proactive in adapting to future
            user needs.`}
      </Typography>
      <Typography
        variant={'h6'}
        sx={baseSubTitle}
        className={[styles.personal_details_title, styles.detalis_tilte].join(' ')}
      >
        Personal Details :
      </Typography>
      <Grid sx={{ justifyContent: 'space-between' }} container>
        {array.map((element) => {
          return (
            <Grid key={element.id} item>
              <Items params={{ item: element.specification }} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
