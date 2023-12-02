import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import HistoryIcon from '@mui/icons-material/History';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/components/badge/Badge.module.css';
// --
export default function Badges(props) {
  const { icon } = props;
  const badgeIcon = { fontSize: '2.2rem', color: 'var(--second-color-icon)' };
  const buildIcon = { fontSize: '2rem', color: 'var(--second-color-icon)' };
  const historyIcon = { fontSize: '2.4rem', color: 'var(--second-color-icon)' };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'info':
        return {
          icon: <InfoIcon sx={badgeIcon} />,
        };
      case 'skills':
        return {
          icon: <BuildIcon sx={buildIcon} />,
        };
      case 'trajectory':
        return {
          icon: <HistoryIcon sx={historyIcon} />,
        };
      case 'contact':
        return {
          icon: <EmailIcon sx={badgeIcon} />,
        };
    }
  };
  return (
    <div className={[styles.div_horizontal_positioning, styles.badge_container].join(' ')}>
      <Badge className={[styles.div_horizontal_positioning, styles.badge].join(' ')}>
        {iconSwitch(icon).icon}
      </Badge>
    </div>
  );
}
