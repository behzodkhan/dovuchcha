import './App.css'
import '@mantine/core/styles.css';
import { HeroBullets } from './components/Hero';
import { MantineProvider } from '@mantine/core';
import { HeaderMenu } from './components/Header';
import { FooterSocial } from './components/Footer';
import { EmailBanner } from './components/Jurnal';
import { FaqWithImage } from './components/faq';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return <MantineProvider>
    <HeaderMenu/> 
    <HeroBullets/>
    <FaqWithImage/>
    <EmailBanner/>
    <FooterSocial/>
    <Analytics />
  </MantineProvider>;
}

export default App
