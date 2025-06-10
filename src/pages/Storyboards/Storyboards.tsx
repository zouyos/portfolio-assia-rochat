import style from './style.module.css';
import { useState, useEffect } from 'react';
import tvdialog from '../../assets/tvdialogue.mov';
import aventure_minut from '../../assets/aventure_minut.mov';
import sb1 from '../../assets/sb1.png';
import sb2 from '../../assets/sb2.png';
import sb3 from '../../assets/sb3.png';
import sb4 from '../../assets/sb4.png';
import sb5 from '../../assets/sb5.png';
import sb6 from '../../assets/sb6.png';
import sb7 from '../../assets/sb7.png';
import sb8 from '../../assets/sb8.png';
import sb9 from '../../assets/sb9.png';
import { THEME, useThemeModeContext } from '../../contexts/ThemeModeContext';
import { PlayFill } from 'react-bootstrap-icons';

type Media = {
  type: 'image' | 'video';
  src: string;
};

const mediaList: Media[] = [
  { type: 'video', src: tvdialog },
  { type: 'video', src: aventure_minut },
  { type: 'image', src: sb1 },
  { type: 'image', src: sb2 },
  { type: 'image', src: sb3 },
  { type: 'image', src: sb4 },
  { type: 'image', src: sb5 },
  { type: 'image', src: sb6 },
  { type: 'image', src: sb7 },
  { type: 'image', src: sb8 },
  { type: 'image', src: sb9 },
];

export default function Storyboards() {
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isEntering, setIsEntering] = useState(false);
  const { themeMode } = useThemeModeContext();

  const open = (index: number) => {
    setCurrentIndex(index);
    setIsEntering(true);
  };

  const close = () => setCurrentIndex(null);

  const next = () => setCurrentIndex((prev) => (prev! + 1) % mediaList.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev! - 1 + mediaList.length) % mediaList.length
    );

  useEffect(() => {
    if (currentIndex !== null) {
      setIsEntering(true);
      const timeout = setTimeout(() => {
        setIsEntering(false);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <>
      <div className='container my-5'>
        <div className='row g-2'>
          {mediaList.map((media, index) => (
            <div className='col-6 col-sm-4 col-md-3' key={index}>
              <div
                className='ratio ratio-1x1 overflow-hidden rounded position-relative'
                onClick={() => open(index)}
                style={{ cursor: 'pointer' }}
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    className='w-100 h-100 object-fit-cover'
                    alt=''
                  />
                ) : (
                  <>
                    <video
                      src={media.src}
                      className='w-100 h-100 object-fit-cover'
                      playsInline
                    />
                    <div
                      className={`${style.videoIconOverlay} d-flex justify-content-center align-items-center`}
                    >
                      <div className={style.videoIconCircle}>
                        <PlayFill size={24} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div
          className={[
            style.lightbox,
            isClosing
              ? style.lightboxExitActive
              : isEntering
              ? style.lightboxEnter
              : style.lightboxEnterActive,
          ].join(' ')}
          style={{
            backgroundColor: THEME[themeMode].backgroundColor,
            opacity: '90%',
          }}
        >
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                close();
                setIsClosing(false);
              }, 200);
            }}
            className={`btn-close position-absolute top-0 end-0 m-3 btn-close-${THEME[themeMode].btnClose}`}
          ></button>

          <button
            onClick={prev}
            className='btn btn-transparent position-absolute start-0 m-3 fs-1'
          >
            ‹
          </button>

          <div className='container text-center'>
            {mediaList[currentIndex].type === 'image' ? (
              <img
                src={mediaList[currentIndex].src}
                className='img-fluid'
                alt=''
                style={{ maxHeight: '80vh' }}
              />
            ) : (
              <video
                src={mediaList[currentIndex].src}
                controls
                autoPlay
                className='img-fluid'
                style={{ maxHeight: '80vh' }}
              />
            )}
          </div>

          <button
            onClick={next}
            className='btn btn-transparent position-absolute end-0 m-3 fs-1'
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
