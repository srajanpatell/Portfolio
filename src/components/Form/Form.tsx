import React, { useRef, useState, FormEvent } from 'react';
import * as emailjs from '@emailjs/browser';
import { Container, ContainerSucces } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import validator from 'validator';

export function Form() {
  const form = useRef<HTMLFormElement>(null);

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✔️ Validate email
  const verifyEmail = (email: string) => {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  // ✔️ Handle form submit
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm('service_ku4pu4v', 'template_ve5sbkg', form.current, {
        publicKey: '9AjYqZU0yDAHTSii4',
      })
      .then(
        () => {
          toast.success('Email successfully sent!', {
            position: toast.POSITION.BOTTOM_LEFT,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            hideProgressBar: false,
            toastId: 'succeeded',
          });
          setIsSubmitted(true);
        },
        (error) => {
          toast.error(`Failed to send: ${error.text}`, {
            position: toast.POSITION.BOTTOM_LEFT,
            toastId: 'failed',
          });
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  // ✔️ If submitted, show thank you page
  if (isSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch! We'll get back to you soon!!!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsSubmitted(false);
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  // ✔️ The form
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="from_name"
          required
        />

        <input
          placeholder="Email"
          id="email"
          type="email"
          name="from_email"
          onChange={(e) => {
            setEmail(e.target.value);
            verifyEmail(e.target.value);
          }}
          required
        />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit" value="Send"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
