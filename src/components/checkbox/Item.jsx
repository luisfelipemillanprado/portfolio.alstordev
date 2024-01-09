import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import styles from '@/components/checkbox/Item.module.css';
// --
export default function Item(props) {
  const { item } = props.params;
  return (
    <div className={[styles.horizontal, styles.item_wrapper].join(' ')}>
      <div className={[styles.horizontal, styles.item_avatar].join(' ')}>
        <CheckIcon className={styles.item_icon} />
      </div>
      <Typography variant={'body1'} className={styles.item_text}>
        {item}
      </Typography>
    </div>
  );
}
