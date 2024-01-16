import FinalPoint from '@/components/decoration/FinalPoint';
import Typography from '@mui/material/Typography';
import MediaQuery from '@/utils/hooks/MediaQuery';
import styles from '@/components/aboutme/resume/Resume.module.css';
// --
export default function Resume() {
  return (
    <div className={[styles.vertical, styles.resume].join(' ')}>
      <div className={[styles.horizontal, styles.resume_container_title].join(' ')}>
        <Typography variant={'h5'} className={styles.resume_details_title}>
          Hello! I am Luis Felipe
        </Typography>
        <FinalPoint />
      </div>
      <div className={[styles.horizontal, styles.resume_container_paragraph].join(' ')}>
        <Typography variant={'body1'} className={styles.resume_details_paragraph}>
          I am a passionate{' '}
          <MediaQuery
            {...{
              query: '(min-width:320px) and (max-width:370px)',
              children: <span className={styles.highlight}>full stack developer </span>,
            }}
          />{' '}
          <MediaQuery
            {...{
              query: '(min-width:371px) and (max-width:390px)',
              children: (
                <span className={styles.highlight}>
                  {'< '}full stack developer{' >'}{' '}
                </span>
              ),
            }}
          />{' '}
          <MediaQuery
            {...{
              query: '(min-width:391px)',
              children: (
                <span className={styles.highlight}>
                  {'< '}full stack developer{' / >'}{' '}
                </span>
              ),
            }}
          />{' '}
          who is constantly looking for new technologies to create innovative solutions. I stay up to date and
          am proactive in adapting to future users needs.
        </Typography>
      </div>
    </div>
  );
}
