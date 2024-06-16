import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Eng foydali <br />  ilm - <span className={classes.highlight}>o'rganilgan va o'rgatilgan</span> ilm
          </Title>
          <Text c="dimmed" mt="md">
            O'zbek YouTube segmentida ilmiy-ommabop kontentni ko'paytirishni maqsad qilgan jamoamiz, bizga - o'zbek tiliga yordam berishga chaqiradi. Quyidagi sohalarda o'z hissangizni qo'shishingiz mumkin
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" style={{background: '#7CC142'}}>
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Ovoz berish</b> – biz sizdagi kabi ovozni hali eshitmaganmiz va sizni anchadan buyon kutyapmiz
            </List.Item>
            <List.Item>
              <b>Tarjima qilish</b> – sizning so'zlarni zanjir kabi ulash qobilyatingizga tan berdik
            </List.Item>
            <List.Item>
              <b>Tomosha qilish</b> – bu bilan jamoamizning eng asosiy kishisi bo'lar edingiz
            </List.Item>
          </List>

          <Group mt={30}>
            <Button style={{background: '#7CC142'}} radius="xl" size="md" className={classes.control2}>
              Tomosha qilish
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Aloqaga chiqish
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}