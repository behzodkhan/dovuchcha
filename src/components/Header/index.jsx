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

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={logo} alt="logo" width='200px' />

          <Group h="100%" gap={0} visibleFrom="sm" style={{marginRight: "120px"}}>
            <a href="#" className={classes.link}>
              Biz haqimizda
            </a>

            <a href="#" className={classes.link}>
              Dovuchchalar
            </a>
            <a href="#" className={classes.link}>
              Xayriya
            </a>
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

          <a href="#" className={classes.link}>
            Biz haqimizda
          </a>
          <a href="#" className={classes.link}>
            Dovuchchalar
          </a>
          <a href="#" className={classes.link}>
            Xayriya
          </a>

          <Divider my="sm" />

        </ScrollArea>
      </Drawer>
    </Box>
  );
}