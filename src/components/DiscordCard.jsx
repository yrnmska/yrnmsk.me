import {
  Avatar,
  AvatarBadge,
  Container,
  Divider,
  Text,
} from '@chakra-ui/react';

import axios from 'axios';

import { useEffect, useState } from 'react';

const YOUKA = '239381559482777600';

const DiscordCard = () => {
  return (
    <Container
      width='350px'
      height='300px'
      display='flex'
      flexDirection='column'
      backgroundColor='#18191C'
      borderRadius={10}
    >
      <Avatar
        src={`https://dcdn.dstn.to/avatars/${YOUKA}`}
        name='youka#0083'
        display='flex'
        mt={5}
        borderRadius={50}
        border='#1A1A1A'
        showBorder
        size='md'
      >
        <AvatarBadge bg='green.500' boxSize='1.25rem' borderColor='white' />
      </Avatar>
      <Nickname name='Youka' />
      <Username username='youka' discriminator='0083' />
      <Divider
        borderColor='#262729'
        mt={2}
        mb={2}
        display='block'
        orientation='horizontal'
      />
      <AboutMe />
    </Container>
  );
};

const Nickname = ({ name }) => (
  <Text color='#DCDDDE' pt={2}>
    {name}
  </Text>
);

const Username = ({ username, discriminator }) => (
  <Text color='#ABADB0'>
    {username}#{discriminator}
  </Text>
);

const AboutMe = () => {
  const [bio, setBio] = useState('');

  useEffect(() => {
    axios.get(`https://dcdn.dstn.to/profile/${YOUKA}`).then((res) => {
      setBio(res.data.user.bio);
    });
  }, []);

  return (
    <>
      <Text color='#B9BBBE' fontWeight='bold' mb={0.7}>
        ABOUT ME
      </Text>
      <Text color='#B7B7B8'>{bio || 'bio not found'}</Text>
    </>
  );
};

export default DiscordCard;
