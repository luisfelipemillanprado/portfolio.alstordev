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
        title={
          <Typography variant={'h6'} className={styles.technology_projects}>
            {title}
          </Typography>
        }
        action={<div className={styles.div_vertical_positioning}>{iconSwitch(icon).icon}</div>}
      />
      <CardContent className={styles.technology_content}>
        <Typography variant={'body1'} className={styles.technology_phrase}>
          {phrase}
        </Typography>
        <Typography variant={'body1'} className={styles.technology_projects}>
          {projects} projects
        </Typography>
      </CardContent>
    </Card>
  );
}
