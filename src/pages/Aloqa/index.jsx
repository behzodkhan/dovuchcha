import React from 'react'
import { HeaderMenu } from '../../components/Header'
import { FooterSocial } from '../../components/Footer'
import ContactUs from '../../components/Contact'
import { MantineProvider } from '@mantine/core'

const Aloqa = () => {
  return (
    <div>
        <HeaderMenu/>
        <ContactUs/>
        <FooterSocial/>
    </div>
  )
}

export default Aloqa