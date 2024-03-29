import Badges from '@/components/badge/Badge';
import Experience from '@/components/mytrajectory/experience/Experience';
import styles from '@/components/mytrajectory/Trajectory.module.css';
// --
export default function Trajectory(props) {
  return (
    <section id={'go-to-trajectory-section'} className={styles.trajectory}>
      <div className={[styles.vertical, styles.trajectory_container_all].join(' ')}>
        <Badges {...{ icon: 'trajectory' }} />
        <div className={[styles.horizontal, styles.trajectory_experience].join(' ')}>
          <Experience />
        </div>
      </div>
    </section>
  );
}
