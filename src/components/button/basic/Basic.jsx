import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from '@/components/button/basic/Basic.module.css';
// --
export default function Basic(props) {
  const { text, href, change, margin } = props;
  return (
    <div
      className={[
        styles.horizontal,
        styles.basic_container,
        margin ? styles.first_margin : styles.second_margin,
      ].join(' ')}
    >
      <div className={[styles.horizontal, styles.basic_wrapper].join(' ')}>
        <Link
          className={[styles.horizontal, styles.basic_link].join(' ')}
          href={href}
          target={change ? '_self' : '_parent'}
          rel={'noopener noreferrer'}
        >
          <div className={[styles.horizontal, styles.basic_button].join(' ')}>
            {text}
            <div className={[styles.horizontal, styles.basic_icon_container].join(' ')}>
              <KeyboardArrowRightIcon className={styles.basic_icon} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
