import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MovieIcon from '@mui/icons-material/Movie';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AppleIcon from '@mui/icons-material/Apple';
import FlightIcon from '@mui/icons-material/Flight';
import styles from '@/components/cards/hobby/Hobby.module.css';
// --
export default function Hobby(props) {
  const { hobby } = props;
  const baseCard = { backgroundColor: 'var(--second-card-background-color)' };
  const iconSwitch = (hobby) => {
    switch (hobby) {
      case 'CINEMA':
        return {
          icon: <MovieIcon className={styles.hobby_icon} />,
        };
      case 'COFFEE':
        return {
          icon: <CoffeeIcon className={styles.hobby_icon} />,
        };
      case 'CARS':
        return {
          icon: <DirectionsCarIcon className={styles.hobby_icon} />,
        };
      case 'MUSIC':
        return {
          icon: <HeadphonesIcon className={styles.hobby_icon} />,
        };
      case 'SPORTS':
        return {
          icon: <SportsBasketballIcon className={styles.hobby_icon} />,
        };
      case 'MAC OS':
        return {
          icon: <AppleIcon className={styles.hobby_icon} />,
        };
      case 'READ':
        return {
          icon: <MenuBookIcon className={styles.hobby_icon} />,
        };
      case 'TRAVEL':
        return {
          icon: <FlightIcon className={styles.hobby_icon} />,
        };
    }
  };
  // --
  return (
    <Card className={styles.hobby_card} sx={baseCard}>
      <div className={[styles.div_horizontal_positioning, styles.hobby_icon_container].join(' ')}>
        {iconSwitch(hobby).icon}
      </div>
      <CardContent sx={{ padding: '0rem 2rem 1.6rem 2rem !important' }}>
        <div className={[styles.div_horizontal_positioning, styles.hobby_title_container].join(' ')}>
          <Typography variant={'body2'} className={styles.hobby_card_title}>
            {hobby}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
