import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import style from './style.module.css';
import { useState } from 'react';

export default function Nav() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);

  function onClick(label: string, url: string) {
    setSelected(label);
    navigate(url);
    setMenuOpen(false);
  }

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'STORYBOARDS', path: '/storyboards' },
    { label: 'RESUME', path: '/resume' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`${style.navbar}`}>
      <div className={style.brand} onClick={() => onClick('HOME', '/')}>
        <img src={logo} alt='Logo' className={style.logo} />
      </div>

      <div className={style.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>

      <div className={`${style.menu} ${menuOpen ? style.open : ''}`}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`${style.menuItem} ${
              selected === item.label ? style.selected : ''
            }`}
            onClick={() => onClick(item.label, item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
