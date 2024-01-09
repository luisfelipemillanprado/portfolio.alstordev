import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from '@/components/button/basic/Basic.module.css';
// --
export default function Basic(props) {
  const { text, href, change } = props;
  return (
    <div className={[styles.horizontal, styles.basic_container].join(' ')}>
      <div className={[styles.horizontal, styles.basic_wrapper].join(' ')}>
        <Link
          className={[styles.horizontal, styles.basic_link].join(' ')}
          href={href}
          target={change ? '_self' : '_blank'}
          rel={'noopener noreferrer'}
        >
          <IconButton aria-label={'btn-link'} role={'button'} className={styles.basic_button}>
            {text}
            <div className={[styles.horizontal, styles.basic_icon_container].join(' ')}>
              <KeyboardArrowRightIcon className={styles.basic_icon} />
            </div>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
