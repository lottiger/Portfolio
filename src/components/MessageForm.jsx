import React, { useState } from 'react';

export const MessageForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Här kan du hantera inskickningen av formuläret, till exempel genom att skicka ett e-postmeddelande med en serverless funktion
    console.log(`Email: ${email}, Message: ${message}`);
  };

  return (
    <form name="message" method="POST" data-netlify="true" onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10 text-stone-200 h-auto w-full border-t border-stone-500'>
      <label className='mt-5'>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='rounded bg-stone-900 p-1 mt-1 text-center focus:outline-none focus:ring-1 focus:ring-stone-500' style={{ width: '50%' }} />
      <label>Message:</label>
      <textarea id='message' value={message} rows={8} cols={24} onChange={(e) => setMessage(e.target.value)} required className='rounded bg-stone-900 mt-1 text-center focus:outline-none focus:ring-1 focus:ring-stone-500' style={{ width: '50%' }}/>
      <button type="submit" value="Submit" className='bg-yellow-800 text-stone-200 rounded mt-3 py-1 px-6 mb-5 hover:bg-yellow-700 transition-colors'>Send</button>
    </form>
  );
};

