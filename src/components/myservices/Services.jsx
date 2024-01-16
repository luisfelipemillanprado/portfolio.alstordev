import Badges from '@/components/badge/Badge';
import Title from '@/components/myservices/title/Title';
import WebParts from '@/components/myservices/webparts/WebParts';
import Skills from '@/components/myservices/skills/Skills';
import Basic from '@/components/button/basic/Basic';
import styles from '@/components/myservices/Services.module.css';
// --
export default function Services(props) {
  return (
    <section className={styles.services}>
      <div className={[styles.vertical, styles.services_container_all].join(' ')}>
        <Badges {...{ icon: 'skills' }} />
        <div className={[styles.vertical, styles.wrapper].join(' ')}>
          <Title />
          <div className={[styles.vertical, styles.wrapper_position].join(' ')}>
            <div className={[styles.horizontal, styles.services_webparts].join(' ')}>
              <WebParts />
            </div>
            <div className={[styles.vertical, styles.services_skills].join(' ')}>
              <Skills {...{ skills: 'technical', title: 'Technical Skills.' }} />
              <Skills {...{ skills: 'soft', title: 'Soft Skills.' }} />
              <div className={[styles.horizontal, styles.services_show].join(' ')}>
                <Basic {...{ text: ' See projects', href: '/worksection', change: true, margin: false }} />
              </div>
            </div>
          </div>
          <div className={[styles.horizontal, styles.services_hide].join(' ')}>
            <Basic {...{ text: ' See projects', href: '/worksection', change: true, margin: false }} />
          </div>
        </div>
      </div>
    </section>
  );
}
