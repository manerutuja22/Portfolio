import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/** Sends the <form> element via EmailJS. Input "name" attributes must match the template variables. */
export function sendContactEmail(formElement) {
  if (!isEmailConfigured) {
    return Promise.reject(new Error("EmailJS is not configured. Check your .env file."));
  }
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, { publicKey: PUBLIC_KEY });
}
