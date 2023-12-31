import Badges from '@/components/badge/Badge';
import ProjectList from '@/components/myworks/projectlist/ProjectList';
import styles from '@/components/myworks/Works.module.css';
// --
export default function Works() {
  return (
    <section className={styles.works}>
      <div className={[styles.div_vertical_positioning, styles.works_container_all].join(' ')}>
        <Badges {...{ icon: 'skills' }} />
        <div className={[styles.div_horizontal_positioning, styles.works_list].join(' ')}>
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
