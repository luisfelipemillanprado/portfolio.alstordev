import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '@/components/link/socialnetwork/SocialNetwork.module.css';
// --
export default function SocialNetwork(props) {
  const { href, icon } = props;
  const telegramIcon = { fontSize: '1.52rem', color: 'var(--firt-color-icon)' };
  const baseIcon = { fontSize: '1.5rem', color: 'var(--firt-color-icon)' };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'twitter':
        return {
          icon: <TwitterIcon sx={baseIcon} />,
        };
      case 'linkedin':
        return {
          icon: <LinkedInIcon sx={baseIcon} />,
        };
      case 'telegram':
        return {
          icon: <TelegramIcon sx={telegramIcon} />,
        };
      case 'facebook':
        return {
          icon: <FacebookIcon sx={baseIcon} />,
        };
      case 'github':
        return {
          icon: <GitHubIcon sx={baseIcon} />,
        };
    }
  };
  // --
  return (
    <Link className={[styles.div_horizontal_positioning, styles.social_network_link].join(' ')} href={href}>
      <span className={styles.div_horizontal_positioning} style={{ justifyContent: 'center' }}>
        {iconSwitch(icon).icon}
      </span>
    </Link>
  );
}
