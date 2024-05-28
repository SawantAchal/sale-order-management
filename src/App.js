import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LoginPage from './pages/LoginPage';
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    // <ChakraProvider>
    //   <Router>
    //     <Routes>
    //       <Route path='/' element={<MainPage/>}/>
    //       <Route path='/login' element={<LoginPage/>}/>
    //     </Routes>
    //   </Router>
    // </ChakraProvider>
    <>
        <LoginPage/>
    <MainPage/>
    </>

  );
}

export default App;
