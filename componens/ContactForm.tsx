"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SendIcon from "@/assets/icons/send.svg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Stato per mostrare il caricamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true); // Imposta lo stato di caricamento

    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Usa la Public Key qui
      )
      
      .then((response) => {
        setFormData({ name: '', email: '', message: '' }); // Resetta il form
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      })
      .finally(() => {
        setIsLoading(false); // Disattiva il caricamento
      });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-title text-sm text-accent-blue">Your Name</label>
        <input type="text" id="name" name="name" required 
          value={formData.name} 
          onChange={handleChange}
          className="font-text bg-transparent text-foreground p-2 border-2 border-accent-blue rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-title text-sm text-accent-blue">Your Email</label>
        <input type="email" id="email" name="email" required 
          value={formData.email} 
          onChange={handleChange}
          className="font-text bg-transparent text-foreground p-2 border-2 border-accent-blue rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-title text-sm text-accent-blue">Your Message</label>
        <textarea id="message" name="message" required 
          value={formData.message} 
          onChange={handleChange}
          className="font-text bg-transparent text-foreground p-2 border-2 border-accent-blue rounded-2xl"
        />
      </div>
      <button type="submit" className="cta w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
        <SendIcon className="w-6 h-6 ml-2" />
      </button>
    </form>
  );
}

export default ContactForm;
