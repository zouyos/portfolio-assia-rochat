import style from './style.module.css';
import instagram_icon from '../../assets/instagram-icon.png';
import linkedin_icon from '../../assets/linkedin-icon.png';
import apple_music_icon from '../../assets/apple-music-icon.png';
import { THEME, useThemeModeContext } from '../../contexts/ThemeModeContext';

export default function Footer() {
  const { themeMode } = useThemeModeContext();

  return (
    <div
      className={style.container}
      style={{ borderTop: `1px solid ${THEME[themeMode].color}` }}
    >
      <div className='d-flex justify-content-center align-items-center mt-3'>
        <a
          href='https://www.instagram.com/ekassiaaa/'
          target='__blank'
          className={style.link}
        >
          <img src={instagram_icon} className={style.icon} />
        </a>
        <a
          href='https://www.linkedin.com/in/assia-rochat-a1978923a/'
          target='__blank'
          className={style.link}
        >
          <img src={linkedin_icon} className={style.icon} />
        </a>
        <a
          href='https://music.apple.com/us/album/adventures-in-paradise/1443843076'
          target='__blank'
          className={style.link}
        >
          <img src={apple_music_icon} className={style.icon} />
        </a>
      </div>
      <p className='text-center my-4'>2025 © Assia Rochat</p>
    </div>
  );
}
