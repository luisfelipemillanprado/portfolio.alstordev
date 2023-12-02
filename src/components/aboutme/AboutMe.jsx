import Badges from '@/components/badge/Badge';
import Details from '@/components/aboutme/details/Details';
import Hobbies from '@/components/aboutme/hobbies/Hobbies';
import styles from '@/components/aboutme/AboutMe.module.css';
// --
export default function AboutMe(props) {
  // const { array } = props;
  return (
    <section className={styles.about_me}>
      <div className={[styles.div_vertical_positioning, styles.about_me_container_all].join(' ')}>
        <Badges {...{ icon: 'info' }} />
        <div className={[styles.div_vertical_positioning, styles.wrapper].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.about_me_personal_details].join(' ')}>
            <Details />
          </div>
          <div className={[styles.div_vertical_positioning, styles.about_me_hobbies].join(' ')}>
            <Hobbies />
          </div>
        </div>
      </div>
    </section>
  );
}
