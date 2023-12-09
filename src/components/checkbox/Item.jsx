import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import styles from '@/components/checkbox/Item.module.css';
// --
export default function Item(props) {
  const { item } = props.params;
  const baseIcon = { fontSize: '1.5rem', color: 'var(--firt-color-icon)' };
  return (
    <div className={[styles.div_horizontal_positioning, styles.item_wrapper].join(' ')}>
      <div className={[styles.div_horizontal_positioning, styles.item_avatar].join(' ')}>
        <CheckIcon sx={baseIcon} />
      </div>
      <Typography variant={'body1'} className={styles.item_text}>
        {item}
      </Typography>
    </div>
  );
}
