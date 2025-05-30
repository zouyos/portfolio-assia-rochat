import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.tsx';
import Contact from './pages/Contact/Contact.tsx';
import Resume from './pages/Resume/Resume.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Storyboards from './pages/Storyboards/Storyboards.tsx';
import { ThemeModeProvider } from './contexts/ThemeModeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeModeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/storyboards' element={<Storyboards />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeModeProvider>
);
