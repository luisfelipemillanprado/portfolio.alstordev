import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from '@/components/cards/project/Project.module.css';
// --
export default function Project(props) {
  const { cover, title, percent, href } = props;
  const baseCard = {
    backgroundColor: 'var(--second-card-background-color)',
    borderRadius: '0.8rem',
    boxShadow: 'var(--box-shadow)',
  };
  const baseIcon = { fontSize: '2.2rem !important', color: 'var(--second-color-icon)' };
  const baseText = { fontSize: '1.46rem', color: 'var(--second-font-color)' };
  const baseProgress = {
    width: '1.5rem !important',
    height: '1.5rem !important',
    color: 'var(--third-card-background-color)',
  };
  const Progress = {
    width: '1.5rem !important',
    height: '1.5rem !important',
    color: 'var(--second-color-icon)',
    position: 'absolute',
    top: 0,
    botton: 0,
    right: 0,
    left: 0,
  };
  const coverSwitch = (cover) => {
    switch (cover) {
      case 'pet-shelter':
        return {
          icon: '/images/petshelter.jpg',
        };
      case 'bit-coin':
        return {
          icon: '/images/bitcoin.jpeg',
        };
      case 'work-portfolio':
        return {
          icon: '/images/portfolio.jpg',
        };
      case 'ti':
        return {
          icon: '/images/ti.png',
        };
    }
  };
  return (
    <Card sx={baseCard}>
      <CardActionArea>
        <div className={styles.project_card_link_container}>
          <Link href={href} target={'_blank'} rel={'noopener noreferrer'}>
            <Image
              className={styles.project_card_image}
              width={145}
              height={110}
              src={coverSwitch(cover).icon}
              alt={`Project's image`}
            />
          </Link>
        </div>
        <CardContent sx={{ padding: '0.6rem 1.2rem 0rem 1.2rem !important' }}>
          <div className={[styles.div_horizontal_positioning, styles.project_card_name_container].join(' ')}>
            <Typography variant={'body1'} sx={baseText} className={styles.project_card_name}>
              {title}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '0.2rem 1.2rem 1rem 1.2rem !important' }}>
        <div className={[styles.div_horizontal_positioning, styles.project_progress_container].join(' ')}>
          <div className={styles.project_progress_icon}>
            <CircularProgress thickness={8} sx={baseProgress} variant={'determinate'} value={100} />
            <CircularProgress thickness={8} sx={Progress} variant={'determinate'} value={percent} />
          </div>
          <div
            className={[styles.div_horizontal_positioning, styles.project_progress_text_container].join(' ')}
          >
            <Typography
              variant={'body1'}
              sx={baseText}
              className={styles.project_progress_text}
            >{`${percent}%`}</Typography>
          </div>
        </div>
        <Button sx={{ padding: '0rem 0.8rem' }} endIcon={<AddIcon sx={baseIcon} />} />
      </CardActions>
    </Card>
  );
}
