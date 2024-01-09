import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '@/components/cards/profile/socialnetwork/SocialNetwork.module.css';
// --
export default function SocialNetwork(props) {
  const { href, icon, ariaLabel } = props;
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'twitter':
        return {
          icon: <TwitterIcon className={styles.social_network_icon} />,
        };
      case 'linkedin':
        return {
          icon: <LinkedInIcon className={styles.social_network_icon} />,
        };
      case 'telegram':
        return {
          icon: <TelegramIcon className={styles.social_network_telegram_icon} />,
        };
      case 'facebook':
        return {
          icon: <FacebookIcon className={styles.social_network_icon} />,
        };
      case 'github':
        return {
          icon: <GitHubIcon className={styles.social_network_icon} />,
        };
    }
  };
  // --
  return (
    <Link
      aria-label={ariaLabel}
      className={[styles.horizontal, styles.social_network_link].join(' ')}
      href={href}
    >
      <span className={styles.horizontal} style={{ justifyContent: 'center' }}>
        {iconSwitch(icon).icon}
      </span>
    </Link>
  );
}
