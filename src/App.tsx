import style from './style.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.appLayout}>
      <Nav />
      <div className={style.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
