import Image from 'next/image';
import styles from '@/components/logo/Logo.module.css';
// --
export default function Logo(props) {
  return (
    <div className={[styles.div_horizontal_positioning, styles.logo_container].join(' ')}>
      <Image
        width={22}
        height={22}
        className={styles.logo_icon}
        src={'/logo.svg'}
        alt={`Logo's team`}
        priority={true}
      />
    </div>
  );
}
