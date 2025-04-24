import style from './style.module.css';
import { EnvelopeAtFill } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <p className={style.mail}>
      <span className='mx-2'>
        <EnvelopeAtFill size='1em' />
      </span>
      <span className='mx-2'>assiarochat@gmail.com</span>
    </p>
  );
}
