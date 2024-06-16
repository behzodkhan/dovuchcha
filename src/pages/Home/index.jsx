import React from 'react'
import { HeaderMenu } from '../../components/Header'
import { HeroBullets } from '../../components/Hero'
import { FaqWithImage } from '../../components/faq'
import { EmailBanner } from '../../components/Jurnal'
import { FooterSocial } from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <HeaderMenu/>
        <HeroBullets/>
        <FaqWithImage/>
        <EmailBanner/>
        <FooterSocial/>
    </div>
  )
}

export default Home