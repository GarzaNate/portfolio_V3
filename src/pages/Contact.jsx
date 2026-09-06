import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Replace these with your actual EmailJS values
    emailjs
      .send("serviceId", "templateId", data, "userId")
      .then(() => {
        alert("Message sent!");
        reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col py-24">
      <div className="max-w-5xl mx-auto w-full px-6 flex-1">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Get In Touch
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            Let's connect.
          </h2>

          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed opacity-70">
            Whether you have an opportunity, a project idea, or just want to say
            hello, I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}
        <div className="mt-12 grid md:grid-cols-[0.8fr_1.2fr] gap-12">
          {/* =================================================
              CONTACT INFO
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Find Me
            </p>

            <div className="mt-6 space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-widest opacity-40">
                  Email
                </p>

                <a
                  href="mailto:your.email@example.com"
                  className="
                    mt-1
                    inline-block
                    text-base
                    transition
                    hover:text-accent
                  "
                >
                  your.email@example.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-xs uppercase tracking-widest opacity-40">
                  GitHub
                </p>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-1
                    inline-block
                    text-base
                    transition
                    hover:text-accent
                  "
                >
                  github.com/yourusername ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-xs uppercase tracking-widest opacity-40">
                  LinkedIn
                </p>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-1
                    inline-block
                    text-base
                    transition
                    hover:text-accent
                  "
                >
                  linkedin.com/in/yourusername ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6
              md:p-8
            "
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-sm opacity-70">
                Name
              </label>

              <input
                id="name"
                {...register("name")}
                placeholder="Your name"
                className="
                  mt-2
                  w-full
                  rounded-lg
                  border border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  placeholder:opacity-30
                  focus:border-cyan-400/50
                "
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label htmlFor="email" className="text-sm opacity-70">
                Email
              </label>

              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="
                  mt-2
                  w-full
                  rounded-lg
                  border border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  placeholder:opacity-30
                  focus:border-cyan-400/50
                "
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label htmlFor="message" className="text-sm opacity-70">
                Message
              </label>

              <textarea
                id="message"
                {...register("message")}
                placeholder="Tell me a little about what you're working on..."
                rows={6}
                className="
                  mt-2
                  w-full
                  resize-none
                  rounded-lg
                  border border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  placeholder:opacity-30
                  focus:border-cyan-400/50
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-6
                rounded-lg
                border border-cyan-400/40
                bg-cyan-400/10
                px-5
                py-2.5
                text-sm
                font-medium
                text-accent
                transition
                hover:bg-cyan-400/20
                hover:border-cyan-400/60
              "
            >
              Send Message ↗
            </button>
          </motion.form>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <motion.div
          className="mt-20 pb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-full bg-white/10" />

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed opacity-60">
            I'm always open to learning, collaborating, and building something
            interesting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
