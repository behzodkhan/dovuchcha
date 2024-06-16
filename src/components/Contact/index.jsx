import { ActionIcon, Container } from '@mantine/core'
import React from 'react'
import './style.css'
import { IconSun, IconPhone, IconMapPin, IconAt, IconBrandTelegram, IconBrandYoutube } from '@tabler/icons-react';

const ContactUs = () => {
  return (
    <Container size='lg'>
        <div className="cardContact">
            <div className='infoCard'>
                <h1>Biz bilan aloqaga chiqing</h1>
                <p>Bizga xabar qoldiring va biz sizga 24 soat ichida javob qaytaramiz</p>
                <ul>
                    <li>
                        <div className="iconCard"><IconAt/></div>
                        <div className="reach">
                            <p>Email</p>
                            <h4><a href="mailto:dovuchcha@dovuchcha.uz">dovuchcha@dovuchcha.uz</a></h4>
                        </div>
                    </li>
                    <li>
                        <div className="iconCard"><IconPhone/></div>
                        <div className="reach">
                            <p>Telefon</p>
                            <h4><a href="tel:+998884367606">+998 88 436 76 06</a></h4>
                        </div>
                    </li>
                    <li>
                        <div className="iconCard"><IconMapPin/></div>
                        <div className="reach">
                            <p>Manzil</p>
                            <h4><a href="https://www.google.com/maps/place/Jizzax+shahridagi+Prezident+Maktabi/@40.1363808,67.8205467,18.17z/data=!4m6!3m5!1s0x38b297dab5da3ebf:0x29751f78081f290a!8m2!3d40.136834!4d67.8210088!16s%2Fg%2F11rhsykl49?entry=ttu" target='_blank'>Presidential School in Jizzakh</a></h4>
                        </div>
                    </li>
                    <li>
                        <div className="iconCard"><IconSun/></div>
                        <div className="reach">
                            <p>Ish kunlar</p>
                            <h4>24/7/365</h4>
                        </div>
                    </li>
                </ul>
                <div className="socialBlade">
                    <ActionIcon component="a" href='https://youtube.com/@dovuchcha' variant='transparent' style={{color: '#000'}}>
                        <IconBrandYoutube variant='color' />
                    </ActionIcon>
                    <ActionIcon component="a" href='https://t.me/dovucca' variant='transparent' style={{color: '#000'}}>
                        <IconBrandTelegram variant='color' />
                    </ActionIcon>
                </div>
            </div>
            <div className='mapCard'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1525.1324924821965!2d67.8205467!3d40.1363808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b297dab5da3ebf%3A0x29751f78081f290a!2sJizzax%20shahridagi%20Prezident%20Maktabi!5e0!3m2!1sen!2s!4v1718558105578!5m2!1sen!2s" width="600" height="570" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </Container>
  )
}

export default ContactUs