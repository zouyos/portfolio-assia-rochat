import style from './style.module.css';
import avatar from '../../assets/avatar.png';
import sketch1 from '../../assets/sketch1.png';
import sketch2 from '../../assets/sketch2.png';
import sketch3 from '../../assets/sketch3.png';
import sketch4 from '../../assets/sketch4.png';

function Home() {
  return (
    <>
      <div className={`${style.container}`}>
        <h1 className='text-center my-5'>Assia Rochat</h1>
        <div className={style.presentation}>
          <img src={avatar} alt='Avatar' className={style.avatar} />
          <div className={style.presentationText}>
            <h2 className='my-4'>Hi There!</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, fuga totam. Corporis atque obcaecati incidunt
                commodi. Ipsa harum repudiandae debitis repellat nemo,
                asperiores magni quis id odio, aliquid quia aspernatur!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                officia!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur expedita cum nobis quae quas nihil.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, fuga totam. Corporis atque obcaecati incidunt
                commodi. Ipsa harum repudiandae debitis repellat nemo,
                asperiores magni quis id odio, aliquid quia aspernatur!
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div
          id='carouselAutoplaying'
          className='carousel slide my-5'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='d-flex justify-content-center'>
                <img
                  src={sketch1}
                  className={`${style.carouselItem} d-block`}
                  alt='Sketch'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='d-flex justify-content-center'>
                <img
                  src={sketch2}
                  className={`${style.carouselItem} d-block`}
                  alt='Sketch'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='d-flex justify-content-center'>
                <img
                  src={sketch3}
                  className={`${style.carouselItem} d-block`}
                  alt='Sketch'
                />
              </div>
            </div>
            <div className='carousel-item'>
              <div className='d-flex justify-content-center'>
                <img
                  src={sketch4}
                  className={`${style.carouselItem} d-block`}
                  alt='Sketch'
                />
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselAutoplaying'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselAutoplaying'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
