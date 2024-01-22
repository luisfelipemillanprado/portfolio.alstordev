import Image from 'next/image';
import SocialNetwork from '@/components/cards/profile/socialnetwork/SocialNetwork';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { MotionDiv } from '@/libs/animation/Motion';
import blurUrl from '@/utils/blurs/Blurs';
import styles from '@/components/cards/profile/Profile.module.css';
// --
export default function Profile(props) {
  const { name, text } = props;
  const baseCard = { overflow: 'visible', backgroundColor: 'var(--first-card-background-color)' };
  const array = [
    { href: '/', icon: 'twitter', ariaLabel: 'Go to my twitter', id: Math.random() },
    { href: '/', icon: 'linkedin', ariaLabel: 'Go to my linkedin', id: Math.random() },
    { href: '/', icon: 'telegram', ariaLabel: 'Go to my telegram', id: Math.random() },
    { href: '/', icon: 'facebook', ariaLabel: 'Go to my facebook', id: Math.random() },
    { href: '/', icon: 'github', ariaLabel: 'Go to my github', id: Math.random() },
  ];
  return (
    <Card className={styles.profile_card} sx={baseCard}>
      <div className={[styles.horizontal, styles.profile_avatar_container].join(' ')}>
        <div className={[styles.horizontal, styles.profile_avatar].join(' ')}>
          <Image
            width={110}
            height={110}
            className={styles.profile_card_cover}
            src={'/avatar/avatar.jpg'}
            blurDataURL={blurUrl.avatarBlurUrl}
            placeholder='blur'
            priority
            alt={`Author's image`}
          />
        </div>
      </div>
      <CardContent sx={{ padding: '2.4rem' }}>
        <MotionDiv
          className={[styles.horizontal, styles.profile_card_text_container].join(' ')}
          initial={{ opacity: 0, translateX: 80 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, delay: 0.5, type: 'spring' }}
        >
          <Typography variant={'h4'} className={styles.profile_card_title}>
            {name}
          </Typography>
        </MotionDiv>
        <MotionDiv
          className={[styles.horizontal, styles.profile_card_text_container].join(' ')}
          initial={{ opacity: 0, translateX: -57 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5, delay: 0.8, type: 'spring' }}
        >
          <Typography variant={'body1'} gutterBottom className={styles.profile_card_paragraph}>
            {text}
          </Typography>
        </MotionDiv>
        <Grid sx={{ justifyContent: 'space-between' }} container>
          {array.map((element, index) => {
            return (
              <Grid item key={element.id}>
                <MotionDiv
                  initial={{ opacity: 0, translateX: 50, rotate: 0 }}
                  animate={{ opacity: 1, translateX: 0, rotate: 360 }}
                  transition={{ duration: 1.4, delay: (index / 2) * 0.3, type: 'spring' }}
                >
                  <SocialNetwork {...{ href: element.href, icon: element.icon }} />
                </MotionDiv>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
