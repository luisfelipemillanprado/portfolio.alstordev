import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import HistoryIcon from '@mui/icons-material/History';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import styles from '@/components/badge/Badge.module.css';
// --
export default function Badges(props) {
  const { icon } = props;
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'info':
        return {
          icon: <InfoIcon className={styles.badge_icon} />,
        };
      case 'skills':
        return {
          icon: <BuildIcon className={styles.build_icon} />,
        };
      case 'trajectory':
        return {
          icon: <HistoryIcon className={styles.history_icon} />,
        };
      case 'contact':
        return {
          icon: <EmailIcon className={styles.badge_icon} />,
        };
      case 'works':
        return {
          icon: <WorkIcon className={styles.badge_icon} />,
        };
    }
  };
  return (
    <div className={[styles.horizontal, styles.badge_container].join(' ')}>
      <Badge className={[styles.horizontal, styles.badge].join(' ')}>{iconSwitch(icon).icon}</Badge>
    </div>
  );
}
