import './App.css'
import '@mantine/core/styles.css';
import { HeroBullets } from './components/Hero';
import { MantineProvider } from '@mantine/core';
import { HeaderMenu } from './components/Header';
import { FooterSocial } from './components/Footer';
import { EmailBanner } from './components/Jurnal';
import { FaqWithImage } from './components/faq';

function App() {
  return <MantineProvider>
    <HeaderMenu/> 
    <HeroBullets/>
    <FaqWithImage/>
    <EmailBanner/>
    <FooterSocial/>
  </MantineProvider>;
}

export default App
