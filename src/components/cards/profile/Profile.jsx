import Image from 'next/image';
import SocialNetwork from '@/components/link/socialnetwork/SocialNetwork';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { avatarBlurUrl } from '@/utils/Blurs';
import styles from '@/components/cards/profile/Profile.module.css';
// --
export default function Profile(props) {
  const { name, text } = props;
  const baseCard = {
    width: '20.875rem',
    height: '18.2rem',
    overflow: 'visible',
    backgroundColor: 'var(--first-card-background-color)',
    borderRadius: '0.8rem',
    boxShadow: 'var(--box-shadow)',
  };
  const baseTitle = { color: 'var(--primary-font-color)', fontSize: '1.7rem' };
  const baseText = { color: 'var(--primary-font-color)', fontSize: '1.44rem', letterSpacing: 'normal' };
  const array = [
    { href: '/', icon: 'twitter', id: Math.random() },
    { href: '/', icon: 'linkedin', id: Math.random() },
    { href: '/', icon: 'telegram', id: Math.random() },
    { href: '/', icon: 'facebook', id: Math.random() },
    { href: '/', icon: 'github', id: Math.random() },
  ];
  return (
    <Card sx={baseCard}>
      <div className={[styles.div_horizontal_positioning, styles.profile_avatar_container].join(' ')}>
        <div className={[styles.div_horizontal_positioning, styles.profile_avatar].join(' ')}>
          <Image
            width={110}
            height={110}
            className={styles.profile_card_cover}
            src={'/avatar/avatar.jpg'}
            blurDataURL={avatarBlurUrl}
            placeholder='blur'
            priority
            alt={`Author's image`}
          />
        </div>
      </div>
      <CardContent sx={{ padding: '2.4rem' }}>
        <div className={[styles.div_horizontal_positioning, styles.profile_card_text_container].join(' ')}>
          <Typography variant='h5' sx={baseTitle} className={styles.profile_card_title}>
            {name}
          </Typography>
        </div>
        <div className={[styles.div_horizontal_positioning, styles.profile_card_text_container].join(' ')}>
          <Typography variant='body1' sx={baseText} gutterBottom className={styles.profile_card_paragraph}>
            {text}
          </Typography>
        </div>
        <Grid sx={{ justifyContent: 'space-between' }} container>
          {array.map((element) => {
            return (
              <Grid item key={element.id}>
                <SocialNetwork {...{ href: element.href, icon: element.icon }} />
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
