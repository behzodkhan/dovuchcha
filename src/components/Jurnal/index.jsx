import { Text, Title, TextInput, Button, Image, Container } from '@mantine/core';
import image from './image.svg';
import classes from './EmailBanner.module.css';
import { useForm } from '@mantine/form';
import { Alert } from '@mantine/core';
import { IconFlame } from '@tabler/icons-react';
import React, { useState } from 'react';

export function EmailBanner() {
    const [visible, setVisible] = useState(false);
    const icon = <IconFlame />;
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: ''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Noto\'g\'ri elektron pochta'),
        },
    });
    const handleSubmit = async (values) => {
        try {
            const response = await fetch(
                "https://connect.mailerlite.com/api/subscribers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjViNjViNTg4YzA5N2Y1YjRkOGZlY2RlYTU5N2U5Yjk0ZmQ1YzdhM2MwNDUwZmM3MDVhNzFiMGEyZTI1MjAxZTBjNjI1ZjYwNzQ3NWRmNTQiLCJpYXQiOjE3MTgyNzYzMTYuNTA5NjYzLCJuYmYiOjE3MTgyNzYzMTYuNTA5NjY1LCJleHAiOjQ4NzM5NDk5MTYuNTA2NDk1LCJzdWIiOiI5OTU1MjIiLCJzY29wZXMiOltdfQ.ERKk5_agSB1IPUZkoLiK7r-aWFodbhu27KWc_bFE6AgclHyclT7jWoQh7FTQJpWf_n9oj1YH4uFpqBCpgReQm9V2nxHiD04gMK3rsuO29qF2_yuN_IDFzXQHR-IpLdvdQLoOzO1EYrHtz_3FLsLxy67w89MJY_JniNCfBTtNteuM-FVC5RYelmyPGIExPKg0HMm3vks1IYzY5Vk1VSFJJuW1ZIuYbX6AESbIdOs4mQKdrYOTG07Awha9eTA5BQGGeppUDgagw94FAGbNac7u3dY95g1Dby7Wv3xALPgVHWnN5roCU0QOJZ2Gn1eRBeCmvkm_6mZsNZXajHnW9dfR05ozKn1YKeERvBeX4roIbWNyKw1PED18Ulk1wNDp4l52X1ZMQ098KxhlLSCM8XE-d8vOStW6cLWntZLFqdxLHs7B4PXoF0UlAZmaavpOAyO-Fs0lcvpEuOfPG3O4Oc1pylJSIPmlauLsJ70EdZFiWb4D9ZcGDEQobKAKwg4DaAzzPjQtJKr0ZNuB22ajQvQXfzFowJ9jmZiGvw8UFUVGT9r-I6Uzgas3gt5X1dDSPkSD99T7ojn3ndiBU6Gq_7N1MIgnyMfxQtTM3JyisTlJq6IqfaWIdLBPgaMNZQXQLlyFTmQjaknsV69VW8RcpY7HkRhOFfpzVyXpOOqs56Fbj2g`
                    },
                    body: JSON.stringify({
                        email: values['email'],
                        groups: ["124021844253607644"]
                    })
                }
            )
            setVisible(true);
            const data = await response.json();
            console.log(data)
            
            if(!response.ok){
                throw new Error("Failed to subscribe")
            }


        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <Container size="lg">
            <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Bir daqiqa...</Title>
                <Text fw={500} fz="lg" mb={5}>
                Yangiliklarimizga obuna bo'ling!
                </Text>
                <Text fz="sm" c="dimmed">
                Yangi videolar, loyihadagi o'zgarishlar va boshqa muhim yangiliklarda eng birinchi bo'lib
                xabardor bo'ling. Biz sizni email orqali xabardor qilamiz.
                </Text>

                <div>
                    <form onSubmit={form.onSubmit((values) => handleSubmit(values))} >
                        {visible && <div className={classes.alertstyle}> <br /> <Alert
                            style={{marginBottom: '0px'}}
                            variant="light"
                            color="lime"
                            radius="md"
                            withCloseButton
                            icon={icon} 
                            onClose={() => setVisible(false)}
                        >
                            Siz yangiliklarimizga obuna bo'ldingiz. Elektron pochta manzilingizni tekshiring!
                        </Alert></div>
                        }
                        <div className={classes.controls}>

                            <TextInput
                                placeholder="Elektron pochta manzilingiz"
                                classNames={{ input: classes.input, root: classes.inputWrapper }}
                                key={form.key('email')}
                                {...form.getInputProps('email')}
                            />
                            <Button style={{background: '#7CC142'}} className={classes.control} type='submit'>Obuna bo'lish</Button>
                        </div>
                    </form>
                </div>
            </div>
            <Image src={image} className={classes.image} />
            </div>
        </Container>
    );
}