import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function MessageForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_APP_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Your message has been sent");
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("A network error occurred. Please try again later.");
    } finally {
      setResult("")
    }
  };

  return (
    <div className='mt-20 border-t border-stone-500'>
      <Toaster />
      <form className='flex flex-col justify-center items-center mt-10 text-stone-200' onSubmit={onSubmit} id='message'>
        <input type="hidden" name="access_key" value={import.meta.env.VITE_APP_KEY} />
        <label htmlFor="name">Name:</label>
        <input placeholder='' className="rounded w-64 p-1 bg-stone-950 focus:outline-none focus:ring-1 focus:ring-yellow-800" type="text" name="name" required />
        <label htmlFor="email">Email:</label>
        <input className="rounded w-64 p-1 bg-stone-950 focus:outline-none focus:ring-1 focus:ring-yellow-800" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea className="rounded w-64 p-1 h-48 bg-stone-950 focus:outline-none focus:ring-1 focus:ring-yellow-800" name="message" required></textarea>

        <button className="bg-yellow-800 text-stone-200 rounded mt-3 py-1 px-6 mb-5 hover:bg-yellow-700 transition-colors" type="submit">Send</button>
      </form>
    </div>
  );
}

