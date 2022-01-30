import { ChakraProvider } from '@chakra-ui/react';
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
