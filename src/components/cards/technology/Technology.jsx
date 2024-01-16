import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import styles from '@/components/cards/technology/Technology.module.css';
// --
export default function Technology(props) {
  const { icon, title, phrase, projects } = props;
  const baseCard = { backgroundColor: 'var(--second-card-background-color)' };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'design':
        return {
          icon: <DesignServicesIcon className={styles.technology_icon} />,
        };
      case 'front-end':
        return {
          icon: <CodeOffIcon className={styles.technology_icon} />,
        };
      case 'back-end':
        return {
          icon: <DataObjectIcon className={styles.technology_icon} />,
        };
      case 'seo':
        return {
          icon: <GpsFixedIcon className={styles.technology_icon} />,
        };
    }
  };
  // --
  return (
    <Card sx={baseCard}>
      <CardHeader
        className={styles.technology_title}
        title={<span className={styles.technology_projects}>{title}</span>}
        action={<div className={styles.vertical}>{iconSwitch(icon).icon}</div>}
      />
      <CardContent className={styles.technology_content}>
        <Typography variant={'body1'} className={styles.technology_phrase}>
          {phrase}
        </Typography>
        <span className={styles.technology_projects}>{projects} projects</span>
      </CardContent>
    </Card>
  );
}
