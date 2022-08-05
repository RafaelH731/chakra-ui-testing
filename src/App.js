import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import {Header} from './components/Header';
import {Profile} from './components/ProfileCard';
function App() {
  return (
    <ChakraProvider>
   <Header/>
   <Profile/>
  </ChakraProvider>
  );
}

export default App;
