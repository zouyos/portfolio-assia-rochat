import style from './style.module.css';
import { useState, useEffect } from 'react';
import sketch1 from '../../assets/sketch1.png';
import sketch2 from '../../assets/sketch2.png';
import sketch3 from '../../assets/sketch3.png';
import sketch4 from '../../assets/sketch4.png';

type Media = {
  type: 'image' | 'video';
  src: string;
};

const mediaList: Media[] = [
  { type: 'image', src: sketch1 },
  { type: 'image', src: sketch2 },
  { type: 'image', src: sketch3 },
  { type: 'image', src: sketch4 },
  { type: 'image', src: sketch1 },
  { type: 'image', src: sketch2 },
  { type: 'image', src: sketch3 },
  { type: 'image', src: sketch4 },
  { type: 'image', src: sketch1 },
  { type: 'image', src: sketch2 },
  { type: 'image', src: sketch3 },
  { type: 'image', src: sketch4 },
];

export default function Storyboards() {
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isEntering, setIsEntering] = useState(false);

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
                className='ratio ratio-1x1 overflow-hidden rounded'
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
                  <video
                    src={media.src}
                    className='w-100 h-100 object-fit-cover'
                    muted
                    playsInline
                  />
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
        >
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                close();
                setIsClosing(false);
              }, 200);
            }}
            className='btn-close position-absolute top-0 end-0 m-3 btn-close-white'
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
