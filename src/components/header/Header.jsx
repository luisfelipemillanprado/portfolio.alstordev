import Navigation from '@/components/header/navigation/Navigation';
import Content from '@/components/header/content/Content';
import styles from '@/components/header/Header.module.css';
// --
export default function Header(props) {
  return (
    <section className={styles.header}>
      <Navigation />
      {<Content {...{ name: 'LUIS FELIPE', text: 'DEVELOPER & DESING' }} />}
    </section>
  );
}
