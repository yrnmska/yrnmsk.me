import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';

import DiscordCard from './components/DiscordCard';

import './styles/app.scss';

const App = () => {
  return (
    <ChakraProvider resetCSS>
      <div className='container'>
        <DiscordCard />
      </div>
    </ChakraProvider>
  );
};

export default App;
