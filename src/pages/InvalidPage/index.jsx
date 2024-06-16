import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from './bg.gif';
import classes from './NotFoundImage.module.css';
import { Link } from 'react-router-dom';

export function NotFoundImage() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} h={400} />
        <div>
          <Title className={classes.title}>Nimadir xato...</Title>
          <Text c="dimmed" size="lg">
            Siz ochmoqchi bo'lgan sahifa mavjud emas. Manzilni xato yozgan bo'lishingiz yoki siz ochmoqchi bo'lgan
            sahifa boshqa urlga ko'chirilgan bo'lishi mumkin. Agar bu xato deb o'ylasangiz iltimos bizga murojaat qiling: <a href="mailto:dovuchcha@dovuchcha.uz">dovuchcha@dovuchcha.uz</a>. 
          </Text>
          <Link to='/'><Button variant="outline" size="md" mt="xl" className={classes.control}>
            Bosh sahifaga qaytish
          </Button></Link>
        </div>
        <Image src={image.src} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}