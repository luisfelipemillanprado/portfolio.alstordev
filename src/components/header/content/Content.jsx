import Profile from '@/components/cards/profile/Profile';
import styles from '@/components/header/content/Content.module.css';
// --
export default function Content(props) {
  return (
    <div className={[styles.div_horizontal_positioning, styles.content].join(' ')}>
      <Profile {...props} />
    </div>
  );
}
