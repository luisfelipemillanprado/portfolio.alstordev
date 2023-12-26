import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import styles from '@/components/link/navlink/NavLink.module.css';
// --
export default function NavLink(props) {
  const { href, icon, ariaLabel } = props;
  const homeIcon = { fontSize: '2.4rem', color: 'var(--second-color-icon)' };
  const navlinkIcon = { fontSize: '2.1rem', color: 'var(--second-color-icon)' };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'home':
        return {
          icon: <HomeOutlinedIcon sx={homeIcon} />,
        };
      case 'info':
        return {
          icon: <InfoOutlinedIcon sx={navlinkIcon} />,
        };
      case 'build':
        return {
          icon: <BuildOutlinedIcon sx={navlinkIcon} />,
        };
    }
  };
  return (
    <Link
      aria-label={ariaLabel}
      className={[styles.div_horizontal_positioning, styles.navlink].join(' ')}
      href={href}
    >
      {iconSwitch(icon).icon}
    </Link>
  );
}
