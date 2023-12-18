import Logo from '@/components/logo/Logo';
import NavLink from '@/components/link/navlink/NavLink';
import DialogButton from '@/components/email/form/Form';
import { Grid } from '@mui/material';
import styles from '@/components/header/navigation/Navigation.module.css';
// --
export default function Navigation(props) {
  return (
    <div className={[styles.div_horizontal_positioning, styles.navigation_container].join(' ')}>
      <div className={styles.div_horizontal_positioning}>
        <Logo />
      </div>
      <div className={styles.div_horizontal_positioning}>
        <Grid
          className={[styles.div_horizontal_positioning, styles.navigation_row_links].join(' ')}
          container
          minHeight={22}
        >
          <Grid item xs>
            <NavLink {...{ href: '/', icon: 'home' }} />
          </Grid>
          <Grid item xs>
            <NavLink {...{ href: '/', icon: 'info' }} />
          </Grid>
          <Grid item xs>
            <NavLink {...{ href: '/', icon: 'build' }} />
          </Grid>
          <Grid item xs>
            <DialogButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
