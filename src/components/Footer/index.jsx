import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';
import logo from '../../assets/logo.png'

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={logo} alt="logo" width='200px' />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a style={{color: 'gray'}} href="https://t.me/dovucca" target='_blank'><IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a style={{color: 'gray'}} href='https://youtube.com/@dovuchcha' target='_blank'><IconBrandYoutube  style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}