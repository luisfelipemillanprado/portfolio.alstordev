import Badges from '@/components/badge/Badge';
import Resume from '@/components/aboutme/resume/Resume';
import Details from '@/components/aboutme/details/Details';
import Hobbies from '@/components/aboutme/hobbies/Hobbies';
import Basic from '@/components/button/basic/Basic';
import db from '@/utils/db/db';
import styles from '@/components/aboutme/AboutMe.module.css';
// --
export default function AboutMe(props) {
  return (
    <section id={'go-to-info-section'} className={styles.aboutme}>
      <div className={[styles.vertical, styles.aboutme_container_all].join(' ')}>
        <Badges {...{ icon: 'info' }} />
        <div className={[styles.vertical, styles.wrapper].join(' ')}>
          <Resume />
          <div className={[styles.vertical, styles.wrapper_position].join(' ')}>
            <div className={[styles.horizontal, styles.aboutme_personal_details].join(' ')}>
              <Details />
            </div>
            <div className={[styles.vertical, styles.aboutme_hobbies].join(' ')}>
              <Hobbies />
            </div>
          </div>
          <div className={[styles.horizontal, styles.aboutme_button_wrapper].join(' ')}>
            <Basic {...{ text: 'See curriculum', href: db.cv.href, change: false, margin: true }} />
          </div>
        </div>
      </div>
    </section>
  );
}
