import {
  Group,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import logo from '../../assets/logo.png'
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import { Link } from 'react-router-dom';

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={logo} alt="logo" width='200px' />

          <Group h="100%" gap={0} visibleFrom="sm" style={{marginRight: "120px"}}>
            <Link to="/" className={classes.link}>
              Biz haqimizda
            </Link>

            <Link to="/dovuchchalar" className={classes.link}>
              Dovuchchalar
            </Link>
            <Link to="/" className={classes.link}>
              Xayriya
            </Link>
            <Link to="/aloqa" className={classes.link}>
              Aloqa
            </Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Mundarija"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link}>
            Biz haqimizda
          </Link>
          <Link to="/" className={classes.link}>
            Dovuchchalar
          </Link>
          <Link to="/" className={classes.link}>
            Xayriya
          </Link>
          <Link to="/aloqa" className={classes.link}>
            Aloqa
          </Link>

          <Divider my="sm" />

        </ScrollArea>
      </Drawer>
    </Box>
  );
}