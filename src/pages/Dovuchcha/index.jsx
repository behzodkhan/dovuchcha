import React from 'react';
import { HeaderMenu } from '../../components/Header';
import { FooterSocial } from '../../components/Footer';
import { Container, Text, Group, Avatar, Divider, Badge, Button } from '@mantine/core';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaSnapchat, FaTelegram } from 'react-icons/fa';
import Image from './mrb.jpg'

const Dovuchcha = () => {
  return (
    <div>
      <HeaderMenu />
      <Container size="md" style={{ marginTop: '40px' }}>
        {/* CEO Introduction */}
        <Group align="flex-start" spacing="md">
          {/* Decorative Avatar */}
          <Avatar
            src={Image} // Replace with actual avatar URL
            alt="Behzod Musurmonqulov"
            size={120}
            radius={60}
            style={{
              marginRight: '20px',
              float: 'left',
              shapeOutside: 'circle()', // Ensures the text wraps around
              clipPath: 'circle()',
            }}
          />
          <div>
            {/* Name and Title */}
            <h1 style={{ borderBottom: '3px black solid', display: 'inline-block', marginBottom: '10px' }}>
              Behzod Musurmonqulov
            </h1>
            <Badge color="green" variant="light" ml="sm">
              CEO & Founder, Dovuchcha
            </Badge>
          </div>
        </Group>
        <Divider my="lg" />

        <Text mt="md" style={{ lineHeight: 1.8 }}>
          Behzod Musurmonqulov is the visionary founder and CEO of Dovuchcha, a groundbreaking platform
          aimed at revolutionizing social media and software solutions. With a passion for innovation,
          Behzod has spearheaded projects like <strong>Dovuchcha Buzz</strong> and <strong>Dovuchcha Accounts</strong> 
          to connect people and simplify technology. His journey is an inspiring tale of creativity,
          perseverance, and leadership.
        </Text>

        {/* Mission Statement */}
        <Divider my="lg" />
        <h2>Mission Statement</h2>
        <Text>
          "At Dovuchcha, our mission is to empower individuals and businesses with tools that bridge
          technology and creativity. We aim to create intuitive, reliable, and impactful software
          solutions to foster a better connected world."
        </Text>

        {/* Key Achievements */}
        <Divider my="lg" />
        <h2>Key Achievements</h2>
        <ul>
          <li>
            <strong>Developed Dovuchcha Buzz:</strong> A modern platform for sharing news, updates, and insights.
          </li>
          <li>
            <strong>Launched Dovuchcha Accounts:</strong> A unified account system for seamless user authentication across platforms.
          </li>
          <li>
            <strong>Innovative Design:</strong> Created a suite of user-friendly, dark-mode-first interfaces for all products.
          </li>
          <li>
            <strong>Community Builder:</strong> Empowered thousands of users by providing intuitive digital solutions.
          </li>
        </ul>

        {/* Social Media Links */}
        <Divider my="lg" />
        <h2>Connect with Behzod</h2>
        <Text>Follow Behzod Musurmonqulov on social media to stay updated with the latest developments:</Text>
        <Group mt="md">
          <Button
            leftIcon={<FaSnapchat />}
            variant="outline"
            component="a"
            href="https://snapchat.com/add/behzod.d"
            target="_blank"
          >
            Snapchat
          </Button>
          <Button
            leftIcon={<FaLinkedin />}
            variant="outline"
            component="a"
            href="https://www.linkedin.com/in/behzodmusurmonqulov/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            leftIcon={<FaTelegram />}
            variant="outline"
            component="a"
            href="https://t.me/bsfrens"
            target="_blank"
          >
            Telegram
          </Button>
          <Button
            leftIcon={<FaInstagram />}
            variant="outline"
            component="a"
            href="https://www.instagram.com/behzod_musurmonqulov"
            target="_blank"
          >
            Instagram
          </Button>
        </Group>

        {/* Closing Section */}
        <Divider my="lg" />
        <Text align="center" mt="lg" style={{ fontStyle: 'italic' }}>
          "Dream big, execute better, and keep innovating." – Behzod Musurmonqulov
        </Text>
      </Container>
      <FooterSocial />
    </div>
  );
};

export default Dovuchcha;