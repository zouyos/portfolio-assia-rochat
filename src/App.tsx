import style from './style.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { THEME, useThemeModeContext } from './contexts/ThemeModeContext';

function App() {
  const { themeMode, setThemeMode } = useThemeModeContext();
  function toggleThemeMode() {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }

  const themeModeSwitch = (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          role='switch'
          checked={themeMode === 'dark'}
          value={themeMode}
          onChange={toggleThemeMode}
        />
        <label className='form-check-label'>
          {themeMode === 'dark' ? 'Dark Theme' : 'Light Theme'}
        </label>
      </div>
    </div>
  );

  return (
    <div
      className={style.appLayout}
      style={{
        backgroundColor: THEME[themeMode].backgroundColor,
        color: THEME[themeMode].color,
      }}
    >
      <Nav themeModeSwitch={themeModeSwitch} />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
