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
  const baseCard = {
    backgroundColor: 'var(--second-card-background-color)',
    borderRadius: '0.8rem',
    boxShadow: 'var(--box-shadow)',
  };
  const baseIcon = { color: 'var(--second-color-icon)', fontSize: '1.8rem' };
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '1.7rem', fontWeight: 550 };
  const baseText = { color: 'var(--second-font-color)', fontSize: '1.5rem' };
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'design':
        return {
          icon: <DesignServicesIcon sx={baseIcon} />,
        };
      case 'front-end':
        return {
          icon: <CodeOffIcon sx={baseIcon} />,
        };
      case 'back-end':
        return {
          icon: <DataObjectIcon sx={baseIcon} />,
        };
      case 'seo':
        return {
          icon: <GpsFixedIcon sx={baseIcon} />,
        };
    }
  };
  // --
  return (
    <Card sx={baseCard}>
      <CardHeader
        sx={{
          padding: '1.6rem 2rem 1.4rem',
          '& .MuiCardHeader-action': { alignSelf: 'auto', margin: 'auto' },
        }}
        title={
          <Typography variant={'body1'} sx={baseTitle}>
            {title}
          </Typography>
        }
        action={<div className={styles.div_vertical_positioning}>{iconSwitch(icon).icon}</div>}
      />
      <CardContent sx={{ padding: '0rem 2rem 1.6rem !important' }}>
        <Typography variant={'body1'} sx={baseText} className={styles.technology_phrase}>
          {phrase}
        </Typography>
        <Typography variant={'body1'} sx={baseText} className={styles.technology_projects}>
          {projects} projects
        </Typography>
      </CardContent>
    </Card>
  );
}
