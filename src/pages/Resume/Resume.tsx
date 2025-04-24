import style from './style.module.css';
import { softwares } from '../../data';

export default function Resume() {
  const liItems = softwares.other.map((el: string[]) => (
    <li>
      {el.map((item: string, index: number) =>
        index !== el.length - 1 ? item + ', ' : item
      )}
    </li>
  ));
  return (
    <div className={style.container}>
      <div className={style.leftBlock}>
        <div className={style.softwares}>
          <h3>SOFTWARES</h3>
          <ul>
            <li>
              Adobe:{' '}
              {softwares.adobe.map((item: string, index) => {
                if (index !== softwares.adobe.length - 1) {
                  return item + ', ';
                } else {
                  return item;
                }
              })}
            </li>
            {liItems}
          </ul>
        </div>
        <hr />
        <div className={style.languages}>
          <h3>LANGUAGES</h3>
          <ul>
            <li>French (first language)</li>
            <li>Fluent in English</li>
            <li>Notions of Spanish and Arabic</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={style.rightBlock}>
        <div className={style.education}>
          <h2>EDUCATION</h2>
          <div>
            <p className='fw-bold'>
              2021-2023: Bachelor - Animated Movie Conceptor
            </p>
            <a
              className='fst-italic'
              href='https://www.atelierdesevres.com/'
              target='__blank'
            >
              Atelier de Sèvres, Paris
            </a>
            <ul>
              <li>
                Mixed techniques: 2D complementary 3D, stop-motion, traditional
                marker animation, live-action shooting, from scriptwriting to
                finalizing the image
              </li>
              <li>Multiple workshops</li>
            </ul>
          </div>
          <div>
            <p className='fw-bold'>
              Classe préparatoire des Ateliers Beaux-Arts de la ville de Paris -
              Option Image
            </p>
            <p>
              Understanding various forms of imagery: engraving, illustration,
              transition to volume, experimental animation. Image culture:
              History of sequential arts, illustration and photography, applied
              arts, image theory (Scott McCloud's 'Understanding Comics')
            </p>
          </div>
        </div>
        <hr />
        <div className={style.workfield}>
          <h2>WORKFIELD</h2>
          <div>
            <p className='fst-italic'>2023</p>
            <p className='fw-bold'>
              <span className='fst-italic'>“Triste cire”</span> short film
              co-directed And submitted to the national channel Arte's
              competition for the best student short film.
            </p>
          </div>
          <div>
            <p className='fst-italic'>February 2022</p>
            <p className='fw-bold'>
              <span className='fst-italic'>“Memory”</span> short film
              co-directed for the Jeu de Paume Museum for the "Fata Morgana"
              exhibition.
            </p>
            <p>
              A short film in traditional marker animation, a collective
              Proustian madeleine experience crafted by five hands.
            </p>
          </div>
        </div>
        <hr />
        <div className={style.workfield}>
          <h2>FREETIME</h2>
          <p>
            Listening to history podcasts, darning my trousers, taking the train
            to visit friends.
          </p>
        </div>
      </div>
    </div>
  );
}
