import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aloqa from './pages/Aloqa';
import { NotFoundImage } from './pages/InvalidPage';
import Dovuchchalar from './pages/Dovuchchalar';

function App() {
  return <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/dovuchchalar' element={<Dovuchchalar/>} />
        <Route path='/aloqa' element={<Aloqa/>} />
        <Route path='/*' element={<NotFoundImage/>} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    <SpeedInsights />
  </MantineProvider>;
}

export default App
