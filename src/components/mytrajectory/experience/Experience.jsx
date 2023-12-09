import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import styles from '@/components/mytrajectory/experience/Experience.module.css';
// --
export default function Experience(props) {
  const baseIcon = { width: '2.3rem', height: '2.3rem', color: 'var(--second-color-icon)' };
  const items = [
    {
      id: Math.random(),
      title: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <Typography
            variant={'body1'}
            className={[styles.div_horizontal_positioning, styles.experience_title].join(' ')}
          >
            2022 - PRESENT
          </Typography>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.sub_title_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_sub_title}>
            WEB DEVELOPER - DESOFT
          </Typography>
        </div>
      ),
      description: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.description_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_description}>
            Frontend developer and interface designer
          </Typography>
        </div>
      ),
    },
    {
      id: Math.random(),
      title: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <Typography
            variant={'body1'}
            className={[styles.div_horizontal_positioning, styles.experience_title].join(' ')}
          >
            2022
          </Typography>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.sub_title_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_sub_title}>
            PLATZI - UDEMY
          </Typography>
        </div>
      ),
      description: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.description_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_description}>
            Active student on these platforms as a means of learning
          </Typography>
        </div>
      ),
    },
    {
      id: Math.random(),
      title: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <Typography
            variant={'body1'}
            className={[styles.div_horizontal_positioning, styles.experience_title].join(' ')}
          >
            2022
          </Typography>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.sub_title_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_sub_title}>
            COLLEGE DEGRE
          </Typography>
        </div>
      ),
      description: (
        <div
          className={[
            styles.div_horizontal_positioning,
            styles.experience_text_container,
            styles.description_margin_container,
          ].join(' ')}
        >
          <Typography variant={'body1'} className={styles.experience_description}>
            Graduated as a software engineer from the Carlos Rafael Rodriguez University of Cuba.
          </Typography>
        </div>
      ),
    },
    {
      id: Math.random(),
      title: (
        <div className={[styles.div_horizontal_positioning, styles.experience_text_container].join(' ')}>
          <Typography
            variant={'body1'}
            className={[styles.div_horizontal_positioning, styles.experience_title].join(' ')}
          >
            ...
          </Typography>
        </div>
      ),
    },
  ];
  // --
  return (
    <div className={styles.experience_steps_container}>
      <Stepper orientation={'vertical'} connector={<span />}>
        {items.map((item, index) => (
          <Step active key={item.id}>
            <StepLabel icon={<CheckIcon className={styles.experience_icon} sx={baseIcon} />}>
              {item.title}
            </StepLabel>
            {index !== items.length - 1 ? (
              <StepContent className={styles.experience_conector}>
                {item.subTitle}
                {item.description}
              </StepContent>
            ) : null}
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
