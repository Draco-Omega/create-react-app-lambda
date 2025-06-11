import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const images = {
  hero: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  about: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
};

export default function FreelanceDevWebsite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Landing Page */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="bg-black/60 p-10 rounded-2xl text-center max-w-xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Hi, I'm Alex – Freelance Web Developer</h1>
          <p className="text-lg md:text-xl mb-6 animate-fadeIn delay-200">Crafting sleek and dynamic websites that bring ideas to life.</p>
          <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all animate-fadeIn delay-300">Contact Me</a>
        </div>
      </section>

      {/* About Page */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-20 bg-white">
        <img src={images.about} alt="coding setup" className="w-full h-auto rounded-xl shadow-lg" />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-2">
            I'm a passionate developer with 5+ years of experience building responsive and performant websites. I specialize in React, Tailwind CSS, and backend integrations.
          </p>
          <p className="text-lg">
            Whether it's a portfolio, an ecommerce platform, or a custom web app, I deliver clean and scalable solutions with a creative edge.
          </p>
        </div>
      </section>

      {/* Contact Page */}
      <section id="contact" className="px-6 py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="mb-10 text-gray-700">Have a project in mind or just want to say hello? Drop me a message below!</p>
          <form onSubmit={handleSubmit} className="grid gap-6 text-left">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Your Message" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">Send Message</button>
          </form>
          <div className="mt-10 flex justify-center gap-10 text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> <span>alex@freelancedev.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
