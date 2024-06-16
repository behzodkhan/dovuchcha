import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aloqa from './pages/Aloqa';

function App() {
  return <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/aloqa' element={<Aloqa/>} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </MantineProvider>;
}

export default App
