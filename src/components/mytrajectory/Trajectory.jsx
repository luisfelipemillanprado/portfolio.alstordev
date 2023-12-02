import Badges from '@/components/badge/Badge';
import Experience from '@/components/mytrajectory/experience/Experience';
import styles from '@/components/mytrajectory/Trajectory.module.css';
// --
export default function Trajectory(props) {
  return (
    <section className={styles.trajectory}>
      <div className={[styles.div_vertical_positioning, styles.trajectory_container_all].join(' ')}>
        <Badges {...{ icon: 'trajectory' }} />
        <div className={[styles.div_horizontal_positioning, styles.trajectory_experience].join(' ')}>
          <Experience />
        </div>
      </div>
    </section>
  );
}
