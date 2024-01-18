import Title from '@/components/title/Title';
import styles from '@/components/myservices/summary/Summary.module.css';
// --
export default function Summary() {
  return (
    <div className={[styles.horizontal, styles.container_title].join(' ')}>
      <Title {...{ text: 'What I can do' }} />
    </div>
  );
}
