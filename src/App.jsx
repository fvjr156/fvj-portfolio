import { createContext, useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import { AppThemeProvider } from './materialui/AppThemeProvider';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import portfolio_content from './assets/portfolio_content.json'

const Hero = lazy(() => import('./layout/Hero'));
const AboutMe = lazy(() => import('./layout/AboutMe'));
const Skills = lazy(() => import('./layout/Skills'));
const Projects = lazy(() => import('./layout/Projects'));
const ContactMe = lazy(() => import('./layout/ContactMe'));
const ScrollToTopButton = lazy(() => import('./layout/ScrollToTopButton'));

const TabContext = createContext();
const TabContextProvider = function ({ children }) {
  const [currentTab, setCurrentTab] = useState("hero");
  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const App = function () {
  const [drawerOpenState, setDrawerOpenState] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [appbarHover, setAppbarHover] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipableClickCount, setTooltipableClickCount] = useState(1);
  const tooltipableContent = "Please click the button again to return.";
  const [clickedTab, setClickedTab] = useState('hero');

  const handleTooltipClick = () => {
    setTooltipableClickCount(tooltipableClickCount + 1);
    if (tooltipableClickCount == 1) {
      setShowTooltip(true);
    }
  };

  const handleDrawerStateToggle = function () {
    setDrawerOpenState(!drawerOpenState);
  };

  const Loading = () => {
    return (
      <></>
    )
  }

  return (
    <Suspense fallback={<Loading/>}>
        <TabContextProvider>
          <TabContext.Consumer>
            {
              function ({ currentTab, setCurrentTab }) {
                const setTab = function (tabName) {
                  setClickedTab(tabName);
                  setCurrentTab(tabName !== currentTab ? tabName : 'hero');
                };
                return (
                  <AppThemeProvider>
                    {function (toggleThemeMode, themeMode) {

                      useEffect(() => {
                        setTooltipableClickCount(1);
                      }, [themeMode]);

                      return (
                        <>
                          <AppBar position='sticky' sx={{ zIndex: 5, opacity: (appbarHover ? 1 : 0.9), transition: "opacity 0.2s ease-in-out" }} onMouseEnter={() => setAppbarHover(true)} onMouseLeave={() => setAppbarHover(false)}>
                            <Toolbar>
                              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {portfolio_content.app_name}
                              </Typography>
                              {!isMobile ? (
                                <>
                                  <Tippy
                                    content={tooltipableContent}
                                    visible={showTooltip && clickedTab === 'aboutme'}
                                    onClickOutside={() => setShowTooltip(false)}
                                  >
                                    <Typography variant="button" sx={{ mx: 2 }} onClick={() => { setTab('aboutme'); handleTooltipClick() }}>About</Typography>
                                  </Tippy>
                                  <Tippy
                                    content={tooltipableContent}
                                    visible={showTooltip && clickedTab === 'skills'}
                                    onClickOutside={() => setShowTooltip(false)}
                                  >
                                    <Typography variant="button" sx={{ mx: 2 }} onClick={() => { setTab('skills'); handleTooltipClick() }}>Skills</Typography>
                                  </Tippy>
                                  <Tippy
                                    content={tooltipableContent}
                                    visible={showTooltip && clickedTab === 'projects'}
                                    onClickOutside={() => setShowTooltip(false)}
                                  >
                                    <Typography variant="button" sx={{ mx: 2 }} onClick={() => { setTab('projects'); handleTooltipClick() }}>Projects</Typography>
                                  </Tippy>
                                  <Tippy
                                    content={tooltipableContent}
                                    visible={showTooltip && clickedTab === 'contactme'}
                                    onClickOutside={() => setShowTooltip(false)}
                                  >
                                    <Typography variant="button" sx={{ mx: 2 }} onClick={() => { setTab('contactme'); handleTooltipClick() }}>Contact Me</Typography>
                                  </Tippy>
                                  <IconButton color="inherit" onClick={toggleThemeMode} sx={{ mb: 0.1 }}>
                                    {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                                  </IconButton>
                                </>
                              ) : (
                                <IconButton color="inherit" onClick={handleDrawerStateToggle}>
                                  <MenuIcon />
                                </IconButton>
                              )}
                            </Toolbar>
                          </AppBar>
                          <Drawer anchor="left" open={drawerOpenState} onClose={handleDrawerStateToggle} sx={{ '& .MuiDrawer-paper': { width: 350, backgroundColor: (themeMode) => themeMode.palette.background.default, } }}>
                            <List>
                              <ListItem button="true" onClick={() => { toggleThemeMode(); handleDrawerStateToggle() }}>
                                {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                                <ListItemText sx={{ ml: 1 }} primary={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} />
                              </ListItem>
                              <ListItem button="true" onClick={() => { setTab('aboutme'); handleDrawerStateToggle() }}>
                                <ListItemText primary="About" />
                              </ListItem>
                              <ListItem button="true" onClick={() => { setTab('skills'); handleDrawerStateToggle() }}>
                                <ListItemText primary="Skills" />
                              </ListItem>
                              <ListItem button="true" onClick={() => { setTab('projects'); handleDrawerStateToggle() }}>
                                <ListItemText primary="Projects" />
                              </ListItem>
                              <ListItem button="true" onClick={() => { setTab('contactme'); handleDrawerStateToggle() }}>
                                <ListItemText primary="Contact Me" />
                              </ListItem>
                              {/* <a href="https://ia601509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4" rel="noreferrer noopener nofollow" target='_blank' style={{textDecoration: 'none'}}>
                            <ListItem button>
                              <ListItemText primary="Material UI Tutorial by FVJ" />
                            </ListItem>
                          </a> */}
                            </List>
                          </Drawer>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentTab}
                              variants={fadeInVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: (isMobile ? 0.2 : 0.1) }}
                            >
                              {currentTab === 'hero' && <Hero themeMode={themeMode} />}
                              {currentTab === 'aboutme' && <AboutMe />}
                              {currentTab === 'skills' && <Skills />}
                              {currentTab === 'projects' && <Projects />}
                              {currentTab === 'contactme' && <ContactMe />}
                            </motion.div>
                          </AnimatePresence>
                          <ScrollToTopButton />
                        </>
                      );
                    }}
                  </AppThemeProvider>
                );
              }
            }
          </TabContext.Consumer>
        </TabContextProvider>
    </Suspense>
  )
}

export default App;