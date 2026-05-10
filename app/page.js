"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  const services = [
    {
      title: "C ROOF",
      desc: "C roof fabrication, repair and installation works.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      icon: "🏠",
    },
    {
      title: "ACP / PU METAL AWNING",
      desc: "ACP, PU metal awning and roof extension solutions.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      icon: "🏗️",
    },
    {
      title: "MAIN GATE",
      desc: "Custom main gates for residential and commercial properties.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      icon: "🚪",
    },
    {
      title: "SAFETY DOOR",
      desc: "Strong safety doors with durable steel finishing.",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      icon: "🛡️",
    },
    {
      title: "SAFETY GRILL",
      desc: "Window grills, door grills and custom protection works.",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      icon: "🔒",
    },
    {
      title: "INDOOR DESIGNING",
      desc: "Metal and stainless steel interior design works.",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      icon: "✨",
    },
    {
      title: "STRUCTURE WORK",
      desc: "Heavy structure work, steel frames and industrial structures.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      icon: "🏭",
    },
    {
      title: "STAINLESS STEEL WORK",
      desc: "Stainless steel gates, railings, frames and custom works.",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      icon: "⚙️",
    },
    {
      title: "IRON WORKS",
      desc: "Iron fabrication, welding, repairs and metal works.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      icon: "🔥",
    },
    {
      title: "RORO BIN",
      desc: "Roro bin fabrication and repair services.",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
      icon: "🧰",
    },
    {
      title: "MACHINERY MAINTENANCE",
      desc: "Machinery repair, servicing and maintenance works.",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      icon: "🔧",
    },
    {
      title: "ANY METAL WORKS",
      desc: "Custom welding, fabrication and general metal solutions.",
      img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7",
      icon: "🛠️",
    },
  ];

  const projects = [
    {
      title: "STEEL STRUCTURE WORK",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    },
    {
      title: "AWNING & ROOF EXTENSION",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
    {
      title: "WELDING & FABRICATION",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#06142b]">
      {/* NAVBAR */}
      <header
        className="sticky top-0 z-50 border-b border-[#d4af37]/40 shadow-[0_10px_40px_rgba(0,0,0,0.55)] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,35,24,0.92), rgba(8,35,24,0.92)), url('/newback.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* LOGO + NAME */}
          <div className="flex items-center justify-center lg:justify-start gap-3 w-full lg:w-auto">
            <img
              src="/logo.png"
              alt="Rothary Steel Tech Engineering Logo"
              className="h-14 sm:h-16 lg:h-24 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.85)]"
            />

            <h1
              className="text-[#f8e08b] text-base sm:text-lg lg:text-3xl font-black tracking-wide leading-tight text-center lg:text-left"
              style={{
                textShadow:
                  "0 2px 5px rgba(0,0,0,0.7), 0 0 14px rgba(212,175,55,0.55)",
              }}
            >
              ROTHARY STEEL TECH
              <br />
              ENGINEERING
            </h1>
          </div>

          {/* MENU */}
          <nav className="flex flex-wrap justify-center items-center gap-2 bg-black/20 px-3 py-2 rounded-2xl lg:rounded-full border border-[#d4af37]/20 backdrop-blur-md w-full lg:w-auto">
            {[
              ["home", "HOME"],
              ["about", "ABOUT US"],
              ["services", "SERVICES"],
              ["projects", "PROJECTS"],
              ["contact", "CONTACT"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`whitespace-nowrap px-3 lg:px-5 py-2 rounded-full text-xs lg:text-base font-bold transition duration-300 ${
                  active === id
                    ? "bg-gradient-to-r from-[#ffe27a] via-[#d4af37] to-[#8a6a14] text-black shadow-[0_0_18px_rgba(212,175,55,0.8)] scale-105"
                    : "text-[#f5d76e] hover:bg-[#d4af37]/20 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="whitespace-nowrap w-full lg:w-auto text-center bg-gradient-to-b from-[#fff4b0] via-[#d4af37] to-[#7a5b10] text-black px-6 lg:px-9 py-3 lg:py-4 font-black rounded-full border border-[#fff1a6] shadow-[0_6px_0_#5c4309,0_12px_25px_rgba(0,0,0,0.4)]"
          >
            GET QUOTE
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
        }}
      >
        <div className="absolute inset-0 bg-[#06142b]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 lg:py-0 w-full grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 md:px-5 py-2 rounded-full border border-[#d4af37]/40 bg-black/25 text-[#f5d76e] text-xs md:text-base font-bold tracking-wide mb-6">
              INDUSTRIAL ENGINEERING & FABRICATION
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]"
              style={{
                textShadow:
                  "0 3px 10px rgba(0,0,0,0.75), 0 0 18px rgba(212,175,55,0.25)",
              }}
            >
              PRECISION
              <br />
              STEEL
              <br />
              ENGINEERING.
            </h2>

            <p className="mt-6 md:mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Delivering high-quality steel fabrication, structure works,
              welding, awnings, gates and innovative engineering solutions with
              reliability and professionalism.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#services"
                className="text-center px-8 py-4 border-2 border-[#d4af37] bg-black/40 text-[#f5d76e] font-black rounded-full shadow-xl hover:bg-[#d4af37]/20 transition"
              >
                OUR SERVICES
              </a>

              <a
                href="#projects"
                className="text-center px-8 py-4 bg-gradient-to-r from-[#ffe27a] via-[#d4af37] to-[#8a6a14] text-black font-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.65)] hover:scale-105 transition"
              >
                VIEW PROJECTS
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4da6ff]/20 blur-3xl rounded-full"></div>

              <div className="relative border border-[#4da6ff]/40 bg-black/25 backdrop-blur-md rounded-3xl p-8 shadow-[0_0_35px_rgba(77,166,255,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
                  alt="Engineering Structure"
                  className="w-[480px] h-[520px] object-cover rounded-2xl border border-[#d4af37]/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="border-4 md:border-8 border-gray-300 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="Rothary steel fabrication work"
              className="w-full h-72 md:h-[430px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#08245c]">
              ABOUT US
            </h2>
            <div className="w-28 md:w-32 h-1 bg-[#d4af37] mt-4 mb-8"></div>

            <p className="text-2xl md:text-3xl font-bold leading-snug text-[#08245c]">
              Reliable steel, stainless steel, welding and metal work solutions
              for residential, commercial and industrial projects.
            </p>

            <div className="mt-8 space-y-5 md:space-y-6 text-lg md:text-xl text-gray-700">
              <p>🏗️ Structure work, awnings and roof extension repairs.</p>
              <p>
                🚪 Main gates, safety doors, safety grills and stainless steel
                work.
              </p>
              <p>🛠️ Machinery maintenance, welding, roro bins and any metal works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        className="relative py-16 md:py-20 px-5 md:px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,20,43,0.88), rgba(6,20,43,0.88)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12 md:mb-16">
            VISION & MISSION
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white/10 backdrop-blur-md border border-[#d4af37]/40 rounded-3xl p-7 md:p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-5xl md:text-6xl mb-5">👁️</div>

              <h3 className="text-3xl md:text-4xl font-black text-[#f5d76e] mb-6">
                OUR VISION
              </h3>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                To be a trusted leader in steel fabrication and engineering
                solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-[#d4af37]/40 rounded-3xl p-7 md:p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-5xl md:text-6xl mb-5">🎯</div>

              <h3 className="text-3xl md:text-4xl font-black text-[#f5d76e] mb-6">
                OUR MISSION
              </h3>

              <p className="text-lg md:text-xl text-white leading-relaxed">
                Delivering quality workmanship, reliable service, and innovative
                engineering solutions with integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#06142b] mb-12 md:mb-14">
          SERVICES
        </h2>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white border-[6px] border-gray-300 rounded-xl overflow-hidden shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="absolute top-0 left-0 bg-white/95 w-16 h-16 flex items-center justify-center text-3xl border-r border-b border-gray-300 z-10">
                {service.icon}
              </div>

              <img
                src={service.img}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white text-center p-6">
                <h3 className="text-xl md:text-2xl font-black text-[#06142b]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base md:text-lg text-[#5c4a12]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS + WHY CHOOSE US */}
      <section
        id="projects"
        className="relative py-16 md:py-20 px-5 md:px-6 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
        }}
      >
        <div className="absolute inset-0 bg-[#06142b]/90"></div>

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            PROJECTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-center text-[#d4af37] mb-10">
            FEATURED WORKS
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative border-[5px] border-[#c9a646] shadow-2xl overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-64 md:h-72 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 p-5">
                  <h4 className="text-xl md:text-2xl font-black text-white leading-tight">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-center mt-16 mb-10">
            WHY CHOOSE US
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-[#f3d36b] to-[#a57c16] p-4 text-4xl rounded-lg shadow-xl">
                🏅
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black">
                  SKILLED WORKMANSHIP
                </h4>
                <p className="text-gray-300 mt-2">
                  Practical steel and metal work experience for different
                  project needs.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-[#f3d36b] to-[#a57c16] p-4 text-4xl rounded-lg shadow-xl">
                ⚙️
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black">
                  QUALITY MATERIALS
                </h4>
                <p className="text-gray-300 mt-2">
                  Strong fabrication standards for residential, commercial and
                  industrial works.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-gray-100 to-gray-400 p-4 text-4xl rounded-lg shadow-xl">
                ⏱️
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black">
                  RELIABLE SERVICE
                </h4>
                <p className="text-gray-300 mt-2">
                  Clear communication, site support and dependable project
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="border-4 md:border-8 border-gray-300 shadow-2xl p-5 md:p-8 bg-white">
            <h2 className="text-3xl md:text-4xl font-black text-center text-[#06142b] mb-8">
              PARTNER WITH US
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border-2 border-[#06142b] p-4 text-black"
                placeholder="NAME"
              />
              <input
                className="border-2 border-[#06142b] p-4 text-black"
                placeholder="COMPANY"
              />
              <input
                className="border-2 border-[#06142b] p-4 text-black"
                placeholder="EMAIL"
              />
              <input
                className="border-2 border-[#06142b] p-4 text-black"
                placeholder="PHONE"
              />

              <textarea
                className="md:col-span-2 border-2 border-[#06142b] p-4 text-black"
                rows={5}
                placeholder="MESSAGE"
              ></textarea>

              <a
                href="https://wa.me/601136023592?text=Hello%20I%20want%20a%20quotation%20from%20ROTHARY%20STEEL%20TECH%20ENGINEERING"
                className="md:col-span-2 bg-gradient-to-r from-[#d4af37] to-[#f3d36b] text-black py-4 text-center font-black"
              >
                SUBMIT INQUIRY
              </a>
            </form>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#08245c] leading-tight">
              READY TO ENGINEER
              <br />
              YOUR VISION?
            </h2>
            <div className="w-28 md:w-32 h-1 bg-[#d4af37] mt-5 mb-8"></div>

            <div className="border-4 md:border-8 border-gray-300 shadow-2xl p-5 md:p-8 text-lg md:text-xl text-[#06142b] space-y-6">
              <p>
                📍 Lot 4337, Batu 6, Jalan Maharajalela, Kampung Sri Jaya,
                36000 Teluk Intan, Perak.
              </p>
              <p>✉️ rotharysteeltechengineering@gmail.com</p>
              <p>📞 +60 11 3602 3592</p>
              <p>Reg No: KT0609406-H</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06142b] text-white text-center py-6 px-5 border-t-4 border-[#d4af37] text-sm md:text-base">
        © 2026 ROTHARY STEEL TECH ENGINEERING. All Rights Reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/601136023592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl z-50 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-7 h-7 md:w-8 md:h-8"
        />
      </a>
    </main>
  );
}