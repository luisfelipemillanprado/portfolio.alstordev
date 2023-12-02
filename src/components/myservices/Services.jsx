import Badges from '@/components/badge/Badge';
import WebParts from '@/components/myservices/webparts/WebParts';
import Skills from '@/components/myservices/skills/Skills';
import GoProjects from '@/components/myservices/goprojects/GoProjects';
import styles from '@/components/myservices/Services.module.css';
// --
export default function Services(props) {
  return (
    <section className={styles.services}>
      <div className={[styles.div_vertical_positioning, styles.services_container_all].join(' ')}>
        <Badges {...{ icon: 'skills' }} />
        <div className={[styles.div_vertical_positioning, styles.wrapper].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.services_webparts].join(' ')}>
            <WebParts />
          </div>
          <div className={[styles.div_vertical_positioning, styles.services_skills].join(' ')}>
            <Skills {...{ skills: 'technical', title: 'Technical Skills :' }} />
            <Skills {...{ skills: 'soft', title: 'Soft Skills :' }} />
            <GoProjects />
          </div>
        </div>
      </div>
    </section>
  );
}
