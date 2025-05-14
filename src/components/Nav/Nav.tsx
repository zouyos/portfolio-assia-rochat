import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './style.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | FocusEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={style.navbar}>
      <div className={style.brand} onClick={() => onClick('HOME', '/')}>
        <img src={logo} alt='Logo' className={style.logo} />
      </div>

      <div className={style.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>

      <div
        ref={menuRef}
        className={`${style.menu} ${menuOpen ? style.open : ''}`}
      >
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`${style.menuItem} ${
              selected === item.label ? style.selected : ''
            }`}
            onClick={() => onClick(item.label, item.path)}
            tabIndex={0}
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
