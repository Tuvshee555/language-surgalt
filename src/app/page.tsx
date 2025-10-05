/* eslint-disable @next/next/no-img-element */
// app/page.tsx
"use client";
import HeroSlider from "@/components/HeroSlider";
import { motion } from "framer-motion";

export default function Home() {
  const courses = [
    {
      title: "Англи — Анхан шат",
      length: "4 долоо хоног",
      price: "₮199,000",
      bullets: ["Ярианд суурилсан", "Бага анги", "Долоо хоног тутмын үнэлгээ"],
    },
    {
      title: "Англи — Бизнес",
      length: "4 долоо хоног",
      price: "₮249,000",
      bullets: ["Илтгэл", "Хэлцэл", "Имэйл"],
    },
    {
      title: "Япон — Анхан (N5)",
      length: "4 долоо хоног",
      price: "₮219,000",
      bullets: ["Хирагана", "Яриа", "JLPT бэлтгэл"],
    },
  ];

  return (
    <main className="bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      <HeroSlider />
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              Ф
            </div>
            <span className="font-semibold text-lg">ФлүэнтВан Академи</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#courses" className="hover:text-indigo-600 transition">
              Сургалтууд
            </a>
            <a href="#about" className="hover:text-indigo-600 transition">
              Бидний тухай
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Байршил
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Англи ба Япон хэлийг <span className="text-indigo-600">хурдан</span>{" "}
            сур
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Богино хугацаанд үр дүнтэй сургалт, туршлагатай багш нар, ярианд
            төвлөрсөн хөтөлбөр.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#courses"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition shadow"
            >
              Сургалтуудыг үзэх
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition shadow"
            >
              Байршил
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
            <img
              src="class.jpg"
              alt="Class"
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* COURSES */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Манай сургалтууд
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{c.title}</h3>
              <span className="text-sm text-gray-500">{c.length}</span>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {c.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-bold text-lg">{c.price}</span>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition shadow"
                >
                  Бүртгүүлэх
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12 items-center bg-indigo-50 rounded-3xl"
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Бидний тухай
          </h2>
          <p className="text-gray-600 text-lg">
            ФлүэнтВан нь бодит ярианд төвлөрсөн, богино хугацаанд үр дүн
            гаргахад чиглэсэн сургалтуудыг санал болгодог. Багш нар нь уугуул
            хэлтэй, туршлагатай.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="teacher.jpg"
            alt="Teacher"
            className="w-full h-80 object-cover"
          />
        </motion.div>
      </section>

      {/* CONTACT / LOCATION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Холбоо барих & Байршил
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <motion.div
            className="text-center lg:text-left space-y-2 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>📍 Blue Sky Tower, Улаанбаатар, Монгол</p>
            <p>📞 +976 9900-1234</p>
            <p>✉ ganturtuvshinsaikhan@gmail.com</p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="instagram.jpg"
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="facebook.jpg"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md h-64"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.123456!2d106.920000!3d47.910000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969a123456789%3A0xabcdef1234567890!2sBlue%20Sky%20Tower!5e0!3m2!1smn!2smn!4v1700000000000!5m2!1smn!2smn"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 bg-white border-t border-gray-200 py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ФлүэнтВан Академи — Загвар & Дизайн
      </footer>
    </main>
  );
}
