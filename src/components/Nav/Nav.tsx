import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './style.module.css';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { THEME, useThemeModeContext } from '../../contexts/ThemeModeContext';

type NavProps = {
  themeModeSwitch: ReactNode;
};

export default function Nav({ themeModeSwitch }: NavProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const { themeMode } = useThemeModeContext();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
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
    <nav
      className={style.navbar}
      style={{
        backgroundColor: THEME[themeMode].backgroundColor,
        color: THEME[themeMode].color,
        borderBottom: `1px solid ${THEME[themeMode].color}`,
      }}
    >
      <div className={style.brand} onClick={() => onClick('HOME', '/')}>
        <img src={logo} alt='Logo' className={style.logo} />
      </div>

      <div
        className={style.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={burgerRef}
      >
        <div
          className={style.bar}
          style={{ backgroundColor: THEME[themeMode].color }}
        ></div>
        <div
          className={style.bar}
          style={{ backgroundColor: THEME[themeMode].color }}
        ></div>
        <div
          className={style.bar}
          style={{ backgroundColor: THEME[themeMode].color }}
        ></div>
      </div>

      <div
        ref={menuRef}
        className={`${style.menu} ${menuOpen ? style.open : ''}`}
        style={{ backgroundColor: THEME[themeMode].backgroundColor }}
      >
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={style.menuItem}
            onClick={() => onClick(item.label, item.path)}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            tabIndex={0}
            style={{
              backgroundColor:
                selected === item.label
                  ? THEME[themeMode].color
                  : hoveredItem === item.label
                  ? THEME[themeMode].color
                  : '',
              color:
                selected === item.label
                  ? THEME[themeMode].backgroundColor
                  : hoveredItem === item.label
                  ? THEME[themeMode].backgroundColor
                  : '',
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      {themeModeSwitch}
    </nav>
  );
}
