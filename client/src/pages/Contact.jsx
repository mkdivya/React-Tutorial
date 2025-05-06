import React from 'react';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Stop page reload

    const formData = new FormData(e.target);

    // Convert FormData to an object and log it
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
  };

  return (
    <section className='section-container'>
      <div className='container-title'>Contact Us</div>

      <div className='contact-wrapper container'>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            required
            className='form-control'
            autoComplete='off'
            placeholder='Enter your name'
            name='username'
          />

          <input
            type="email"
            required
            className='form-control'
            autoComplete='off'
            placeholder='Enter your email'
            name='email'
          />

          <textarea
            required
            rows='10'
            className='form-control'
            autoComplete='off'
            placeholder='Enter your message'
            name='message'
          />

          <button type='submit'>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
