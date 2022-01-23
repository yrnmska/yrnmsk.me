import {
  Avatar,
  AvatarBadge,
  Container,
  Divider,
  Text,
} from '@chakra-ui/react';

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
        src='https://dcdn.dstn.to/avatars/239381559482777600'
        name='Aai0590'
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
      <AboutMe bio='i love chaeyoung' />
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

const AboutMe = ({ bio }) => (
  <>
    <Text color='#B9BBBE' fontWeight='bold' mb={0.7}>
      ABOUT ME
    </Text>
    <Text color='#B7B7B8'>{bio}</Text>
  </>
);

export default DiscordCard;
