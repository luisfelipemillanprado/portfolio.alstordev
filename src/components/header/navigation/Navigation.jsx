import Logo from '@/components/logo/Logo';
import NavLink from '@/components/header/navigation/navlink/NavLink';
import Form from '@/components/email/form/Form';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styles from '@/components/header/navigation/Navigation.module.css';
// --
export default function Navigation(props) {
  const array = [
    { href: '/', icon: 'home', ariaLabel: 'Go to home page', key: Math.random(), id: 'home' },
    {
      href: '#',
      icon: 'info',
      ariaLabel: 'Go to information section',
      key: Math.random(),
      id: 'info-main-link',
      goto: 'go-to-info-section',
    },
    {
      href: '#',
      icon: 'build',
      ariaLabel: 'Go to skills section',
      key: Math.random(),
      id: 'skills-main-link',
      goto: 'go-to-skills-section',
    },
    {
      href: '#',
      icon: 'trajectory',
      ariaLabel: 'Go to trajectory section',
      key: Math.random(),
      id: 'trajectory-main-link',
      goto: 'go-to-trajectory-section',
    },
  ];
  return (
    <div className={[styles.horizontal, styles.navigation_container].join(' ')}>
      <div className={styles.horizontal}>
        <Logo />
      </div>
      <div className={styles.horizontal}>
        <Grid className={[styles.horizontal, styles.navigation_row_links].join(' ')} container minHeight={22}>
          {array.map((element) => {
            return (
              <Grid key={element.key} item>
                <NavLink
                  {...{
                    href: element.href,
                    icon: element.icon,
                    ariaLabel: element.ariaLabel,
                    id: element.id,
                    goto: element.goto,
                  }}
                />
              </Grid>
            );
          })}
          <Grid item>
            <IconButton
              id={'btn-form-start'}
              aria-label={'btn-form-email'}
              role={'button'}
              className={styles.navigation_button}
            >
              <SendOutlinedIcon className={styles.navigation_button_icon} />
            </IconButton>
            <Form />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
