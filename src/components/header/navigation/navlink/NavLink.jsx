'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import HistoryIcon from '@mui/icons-material/History';
import { scrollToSection } from '@/utils/event/ScrollIntoView';
import styles from '@/components/header/navigation/navlink/NavLink.module.css';
// --
export default function NavLink(props) {
  const { href, icon, ariaLabel, id, goto } = props;
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'home':
        return {
          icon: <HomeOutlinedIcon className={[styles.navlink_icon, styles.home].join(' ')} />,
        };
      case 'info':
        return {
          icon: <InfoOutlinedIcon className={[styles.navlink_icon, styles.size].join(' ')} />,
        };
      case 'build':
        return {
          icon: <BuildOutlinedIcon className={[styles.navlink_icon, styles.size].join(' ')} />,
        };
      case 'trajectory':
        return {
          icon: <HistoryIcon className={[styles.navlink_icon, styles.history].join(' ')} />,
        };
    }
  };
  useEffect(() => {
    if (id !== icon) {
      scrollToSection(id);
    }
  }, [id, icon]);

  return (
    <Link
      id={id}
      aria-label={ariaLabel}
      goto={goto}
      className={[styles.horizontal, styles.navlink].join(' ')}
      href={href}
    >
      {iconSwitch(icon).icon}
    </Link>
  );
}
