import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  EnvelopeAtFill,
  PersonFill,
  ChatLeftTextFill,
} from 'react-bootstrap-icons';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_o4f6eis',
          'template_6ktl72r',
          formRef.current,
          'ngviA9KDuTzf4dmui'
        )
        .then(() => {
          setSubmitted(true);
          formRef.current?.reset();
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  return (
    <div className='container-fluid py-5 px-3'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-8 col-lg-6'>
          <h1 className='mb-4 text-center'>Don't Be Shy!</h1>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                <PersonFill className='me-2' />
                Name
              </label>
              <input
                type='text'
                name='name'
                className='form-control'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                <EnvelopeAtFill className='me-2' />
                Email
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                <ChatLeftTextFill className='me-2' />
                Message
              </label>
              <textarea
                name='message'
                rows={5}
                className='form-control'
                required
              ></textarea>
            </div>

            <button type='submit' className='btn btn-primary w-100'>
              Send
            </button>

            {submitted && (
              <div className='alert alert-success mt-3' role='alert'>
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className='alert alert-danger mt-3' role='alert'>
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
