import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { MotionDiv } from '@/libs/animation/Motion';
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
            styles.horizontal,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <span className={[styles.horizontal, styles.experience_title].join(' ')}>2022 - PRESENT</span>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.horizontal,
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
            styles.horizontal,
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
            styles.horizontal,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <span className={[styles.horizontal, styles.experience_title].join(' ')}>2022</span>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.horizontal,
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
            styles.horizontal,
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
            styles.horizontal,
            styles.experience_text_container,
            styles.title_margin_container,
          ].join(' ')}
        >
          <span className={[styles.horizontal, styles.experience_title].join(' ')}>2022</span>
        </div>
      ),
      subTitle: (
        <div
          className={[
            styles.horizontal,
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
            styles.horizontal,
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
        <div className={[styles.horizontal, styles.experience_text_container].join(' ')}>
          <span className={[styles.horizontal, styles.experience_title].join(' ')}>...</span>
        </div>
      ),
    },
  ];
  // --
  return (
    <MotionDiv
      className={styles.experience_steps_container}
      initial={{ opacity: 0, translateX: -18 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.2, type: 'spring' }}
    >
      <Stepper orientation={'vertical'} connector={<span />}>
        {items.map((item, index) => (
          <Step active key={item.id}>
            <StepLabel icon={<CheckIcon className={styles.experience_icon} sx={baseIcon} />}>
              {item.title}
            </StepLabel>
            {index !== items.length - 1 ? (
              <StepContent className={styles.experience_conector}>
                <MotionDiv
                  initial={{ opacity: 0, translateX: 17 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, type: 'spring' }}
                >
                  {item.subTitle}
                  {item.description}
                </MotionDiv>
              </StepContent>
            ) : null}
          </Step>
        ))}
      </Stepper>
    </MotionDiv>
  );
}
