import ReactPlayer from 'react-player';
import style from './style.module.css';

export default function Projects() {
  return (
    <div className={style.container}>
      <h1 className='text-center'>Project Name</h1>
      <div className={style.presentation}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolore
        quod, ex corporis, maiores eos sit velit veniam accusantium, atque quia
        ea aspernatur non ad eius et dolor placeat aut nemo suscipit eligendi
        aperiam. Soluta quasi mollitia quaerat accusantium. Ipsa harum explicabo
        molestias doloribus velit cupiditate dignissimos debitis, vero enim
        placeat veniam ducimus soluta mollitia rerum sapiente odit animi quae
        nesciunt ipsam inventore iste illum. Exercitationem placeat minus ab
        pariatur ratione tempora illo quas quibusdam autem, dolore soluta rem
        esse.
      </div>
      <div className={style.video}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          className={style.player}
          width='100%'
          height='100%'
          controls
        />
      </div>
    </div>
  );
}
