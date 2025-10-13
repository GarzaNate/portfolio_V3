import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Replace serviceId/templateId/userId with your EmailJS values
    emailjs
      .send("serviceId", "templateId", data, "userId")
      .then(() => {
        alert("Message sent!");
        reset();
      })
      .catch(() => alert("Failed to send"));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
          <input
            {...register("name")}
            placeholder="Your name"
            className="p-3 rounded border"
          />
          <input
            {...register("email")}
            placeholder="Your email"
            className="p-3 rounded border"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={6}
            className="p-3 rounded border"
          />
          <button type="submit" className="px-4 py-2 bg-accent rounded">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
