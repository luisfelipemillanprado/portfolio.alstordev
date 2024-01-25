import Navigation from '@/components/header/navigation/Navigation';
import Content from '@/components/header/content/Content';
import db from '@/utils/db/db';
import styles from '@/components/header/Header.module.css';
// --
export default function Header(props) {
  return (
    <section id='start' className={styles.header}>
      <Navigation />
      <Content {...{ name: db.mainInfo.name, text: db.mainInfo.profession }} />
    </section>
  );
}
