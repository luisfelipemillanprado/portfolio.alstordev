import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import styles from '@/components/myservices/skills/advance/Advance.module.css';
// --
export default function Advance(props) {
  const { icon, text, percent } = props;
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  const baseProgress = {
    width: '5.2rem !important',
    height: '5.2rem !important',
    color: 'var(--third-card-background-color)',
  };
  const Progress = {
    width: '5.2rem !important',
    height: '5.2rem !important',
    color: 'var(--second-color-icon)',
    position: 'absolute',
    top: 0,
    botton: 0,
    right: 0,
    left: 0,
  };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'html':
        return {
          icon: '/iconos/html.svg',
          change: null,
        };
      case 'css':
        return {
          icon: '/iconos/css.svg',
          change: null,
        };
      case 'javascript':
        return {
          icon: '/iconos/javascript.svg',
          change: null,
        };
      case 'figma':
        return {
          icon: '/iconos/figma.svg',
          change: null,
        };
      case 'react':
        return {
          icon: '/iconos/react.svg',
          change: null,
        };
      case 'nextjs':
        return {
          icon: '/iconos/nextjs.svg',
          change: styles.advance_nextjs_image,
        };
      case 'nodejs':
        return {
          icon: '/iconos/nodejs.svg',
          change: null,
        };
      case 'animation':
        return {
          icon: '/iconos/lively.svg',
          change: null,
        };
      case 'mongodb':
        return {
          icon: '/iconos/mongodb.svg',
          change: null,
        };
      case 'express':
        return {
          icon: '/iconos/express.svg',
          change: styles.advance_express_image,
        };
    }
  };
  return (
    <div className={[styles.div_vertical_positioning, styles.advance_container].join(' ')}>
      <div className={styles.advance_wrapper_image_progress}>
        <div className={styles.advance_wrapper_progress}>
          <CircularProgress sx={baseProgress} variant={'determinate'} value={100} />
          <CircularProgress sx={Progress} variant={'determinate'} value={percent} />
        </div>
        <div className={[styles.div_horizontal_positioning, styles.advance_image_container].join(' ')}>
          <Image
            width={32}
            height={32}
            src={iconSwitch(icon).icon}
            className={iconSwitch(icon).change === null ? styles.advance_image : iconSwitch(icon).change}
            alt={`Language's icon`}
          />
        </div>
      </div>
      <div className={[styles.div_horizontal_positioning, styles.advance_text_container].join(' ')}>
        <Typography variant={'body2'} sx={baseText} className={styles.advance_text}>
          {text}
        </Typography>
      </div>
    </div>
  );
}
