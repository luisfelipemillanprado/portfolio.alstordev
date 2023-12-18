import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import blurUrl from '@/utils/blurs/Blurs';
import styles from '@/components/cards/project/Project.module.css';
// --
export default function Project(props) {
  const { cover, title, percent, href } = props;
  const baseIcon = { fontSize: '2.2rem !important', color: 'var(--second-color-icon)' };
  const coverSwitch = (cover) => {
    switch (cover) {
      case 'pet-shelter':
        return {
          icon: '/images/petshelter.jpg',
          blur: blurUrl.petshelterBlurUrl,
        };
      case 'bit-coin':
        return {
          icon: '/images/bitcoin.jpeg',
          blur: blurUrl.bitcoinBlurUrl,
        };
      case 'work-portfolio':
        return {
          icon: '/images/portfolio.jpg',
          blur: blurUrl.portfolioBlurUrl,
        };
      case 'ti':
        return {
          icon: '/images/ti.png',
          blur: blurUrl.ticketBlurUrl,
        };
    }
  };
  return (
    <Card className={styles.project_card}>
      <CardActionArea>
        <div className={styles.project_card_link_container}>
          <Link href={href} target={'_blank'} rel={'noopener noreferrer'}>
            <Image
              className={styles.project_card_image}
              width={145}
              height={110}
              src={coverSwitch(cover).icon}
              blurDataURL={coverSwitch(cover).blur}
              alt={`Project's image`}
            />
          </Link>
        </div>
        <CardContent sx={{ padding: '0.6rem 1.2rem 0rem 1.2rem !important' }}>
          <div className={[styles.div_horizontal_positioning, styles.project_card_name_container].join(' ')}>
            <Typography variant={'body1'} className={styles.project_card_name}>
              {title}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '0.2rem 1.2rem 1rem 1.2rem !important' }}>
        <div className={[styles.div_horizontal_positioning, styles.project_progress_container].join(' ')}>
          <div className={[styles.div_horizontal_positioning, styles.project_progress_icon].join(' ')}>
            <CircularProgress
              thickness={8}
              className={styles.project_base_progress}
              variant={'determinate'}
              value={100}
            />
            <CircularProgress
              thickness={8}
              className={[styles.project_base_progress, styles.project_progress].join(' ')}
              variant={'determinate'}
              value={percent}
            />
          </div>
          <div
            className={[styles.div_horizontal_positioning, styles.project_progress_text_container].join(' ')}
          >
            <Typography
              variant={'body2'}
              className={styles.project_progress_text}
            >{`${percent}%`}</Typography>
          </div>
        </div>
        <Button sx={{ padding: '0rem 0.8rem' }} endIcon={<AddIcon sx={baseIcon} />} />
      </CardActions>
    </Card>
  );
}
