import Badges from '@/components/badge/Badge';
import Contact from '@/components/footer/contact/Contact';
import Rights from '@/components/footer/rights/Rights';
import styles from '@/components/footer/Footer.module.css';
// --
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_container_all}>
        <Badges {...{ icon: 'contact' }} />
        <div className={[styles.div_vertical_positioning, styles.wrapper].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.footer_contact].join(' ')}>
            <Contact />
          </div>
          <div className={[styles.div_horizontal_positioning, styles.footer_rights].join(' ')}>
            <Rights />
          </div>
        </div>
      </div>
    </section>
  );
}
