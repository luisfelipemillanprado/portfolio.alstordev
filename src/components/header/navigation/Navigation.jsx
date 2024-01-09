import Logo from '@/components/logo/Logo';
import NavLink from '@/components/header/navigation/navlink/NavLink';
import Form from '@/components/email/form/Form';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styles from '@/components/header/navigation/Navigation.module.css';
// --
export default function Navigation(props) {
  return (
    <div className={[styles.horizontal, styles.navigation_container].join(' ')}>
      <div className={styles.horizontal}>
        <Logo />
      </div>
      <div className={styles.horizontal}>
        <Grid className={[styles.horizontal, styles.navigation_row_links].join(' ')} container minHeight={22}>
          <Grid item>
            <NavLink {...{ href: '/', icon: 'home', ariaLabel: 'Go to homepage' }} />
          </Grid>
          <Grid item>
            <NavLink {...{ href: '/', icon: 'info', ariaLabel: 'Go to information section' }} />
          </Grid>
          <Grid item>
            <NavLink {...{ href: '/', icon: 'build', ariaLabel: 'Go to skills section' }} />
          </Grid>
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
