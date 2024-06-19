import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from './image.svg';
import classes from './FaqWithImage.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FaqWithImage() {
  return (
    <Container size="lg">
        <div className={classes.wrapper}>
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
                Tez-tez so'raladigan savollar
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>Men ham ovoz bera olamanmi?</Accordion.Control>
                <Accordion.Panel className={classes.faqtext}>Ha. Agar bizga ovoz berishda, tarjima qilishda yoki shorts/reels yasashda yordam berishni istasangiz, bizga murojaat qiling. Biz bundan xursand bo'lamiz!</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Sizga qanday murojaat qila olaman?</Accordion.Control>
                <Accordion.Panel> <a href="mailto:dovuchcha@dovuchcha.uz">dovuchcha@dovuchcha.uz</a> emaili orqali murojaat qilishingiz mumkin. 24/7 javob qaytarishga tayyormiz. Qolaversa, fikrlaringizni YouTube va telegram kanali kommentariyalarida qoldirishingiz mumkin. Biz hammasini o'qishga harakat qilamiz.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>Nimaga aynan Dovuchcha?</Accordion.Control>
                <Accordion.Panel>Nimaga Dovuchcha emas? Shunchaki kreativ nom. Tasodifan o'ylab topilgan. Bu hech qanday ko'rsatuv yoki kanal nomidan olinmagan, ilhomlanilmagan.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  O'zlaring ham video chiqarasizlarmi?
                </Accordion.Control>
                <Accordion.Panel>Biz keyingi o'quv yilidan boshlab prezident maktabida ilmiy-ommabop videolarni o'zimiz olishni niyat qilganmiz. Bu juda ham ko'p kuch talab etilgani uchun, bizga qiyin bo'ladi. Ammo, siz kabi tomoshabinlar bizga yordam beradi degan umiddamiz.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
        </div>
    </Container>
  );
}