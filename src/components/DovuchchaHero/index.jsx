import { Container, Text, Group } from '@mantine/core';
import classes from './HeroTitle.module.css';
import { UserInfoAction } from '../DovuchchaCard';
import behzod from '../../assets/behzod.png'
import ismatulloh from '../../assets/ismatulloh.png'
import shaxriyor from '../../assets/shaxriyor.png'
import jahongir from '../../assets/jahongir.png'
import doston from '../../assets/doston.png'
import maruf from '../../assets/maruf.png'
import mokhinur from '../../assets/mokhinur.png'
import samandar from '../../assets/samandar.png'
import otabek from '../../assets/otabek.jpg'
// import suxrob from '../../assets/suxrob.png'

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size='lg' className={classes.inner}>
        <h1 className={classes.title}>
          Bizning {' '}
          <Text component="span" variant="gradient" gradient={{ from: '#7cc142', to: '#dbe020' }} className={classes.dovuchchalarimiz}inherit>
            Dovuchchalarimiz
          </Text>{' '}
          bilan tanishing
        </h1>

        <Text className={classes.description} color="dimmed">
          YouTube videolarimizga o'z xissasini qo'shganlar - tarjima qilishda, ovoz berishda va texnik ishlarda yordam berganlarni
          Dovuchchalar deb ataymiz. Quyida ular bilan tanishing 👇️️️️️️
        </Text>
        <br />
        <Group className={classes.cardsD}>
          <UserInfoAction name="Behzod Musurmonqulov" username="https://t.me/behzodmusurmonqulov" img={behzod} title="Loyiha asoschisi • Tarjimon • Dasturchi"/>
          <UserInfoAction name="Ismatulloh Bakhtiyorov" username="https://t.me/baxt1y0rov"  img={ismatulloh} title="Dizayner • Dasturchi • Animator"/>
          <UserInfoAction name="Shaxriyor Do'ngboyev" username="https://t.me/+998777074864" img={shaxriyor}title="Dublyaj ustasi • Loyiha hammuassisi" />
          <UserInfoAction name="Jahongir Orziqulov" username="https://t.me/astra_empire" img={jahongir} title="Tarjimon • Adminstrator" />
          <UserInfoAction name="Doston Ergashev" username="https://t.me/Ergashev_pm" img={doston} title="Dublyaj ustasi" />
          <UserInfoAction name="Ma'rufjon Abdug'aniyev" username="https://t.me/marufjon9711"img={maruf} title="Maslahatchi" />
          <UserInfoAction name="Suxrob Abdusattorov" username="https://t.me/marufjon9711" title="Shorts maker" />
          <UserInfoAction name="Mokhinur Suyunova" username="https://t.me/mokhinur_s01" img={mokhinur} title="Dublyaj ustasi" />
          <UserInfoAction name="Samandar Muminov" username="https://t.me/Sabedor1a07" img={samandar} title="Dublyaj ustasi" />
          <UserInfoAction name="Otabek Abdukarimov" username="https://t.me/OtabekAbdukarimov" img={otabek} title="Backend developer" />
        </Group>
        

      </Container>

    </div>
    
  );
}
