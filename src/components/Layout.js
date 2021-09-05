import React from 'react'

import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { FaReact } from 'react-icons/fa';
import { GiMeatHook } from 'react-icons/gi';
import { GrFolderCycle } from 'react-icons/gr';


import useStyles from './styles';



// children: content inside Layout at App.js
function Layout({children}, props) {

         //method to route:
         const history = useHistory();

         const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <div className="logo">
        <FaReact size={45} style={{padding: '10 0 0 15'}} />
        <GiMeatHook size={45} style={{padding: '10 0 0 15'}}  />
        <GrFolderCycle size={40} style={{padding: '10 0 0 15'}}  />
        </div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[{text: 'Intro Hooks', path: '/react-hooks'}, 
            {text: 'useState()', path: '/react-hooks/usestate'}, 
            {text: 'useEffect()', path: '/react-hooks/useeffect'}, 
            {text: 'useRef()', path: '/react-hooks/useref'}
            ].map(item => (
            <ListItem button key={item.text} onClick={() => history.push(item.path)}>
            <ListItemText primary={item.text} />
            </ListItem>
        ))}
        </List>
      <Divider />
      <List>
        {['Próximamente más hooks'].map((text, index) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="titleManual" variant="h6" noWrap>
            React Hooks manual
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} >
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
    )
}

export default Layout;
