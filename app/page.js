import Image from "next/image";

export default function Home() {
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
  className="sticky top-0 z-50 border-b border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.45)] bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(10,40,28,0.82), rgba(10,40,28,0.82)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    {/* LOGO + NAME */}
    <div className="flex items-center gap-4">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Rothary Steel Tech Engineering Logo"
        className="h-20 w-auto drop-shadow-[0_0_18px_rgba(255,255,255,0.55)]"
      />

      {/* COMPANY NAME */}
      <div className="leading-tight">
        <h1
          className="text-[#f5d76e] text-xl md:text-3xl font-black tracking-wide"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,0.6), 0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          ROTHARY STEEL TECH
          <br />
          ENGINEERING
        </h1>
      </div>

    </div>

    {/* MENU */}
    <nav className="hidden md:flex items-center gap-3">

      <a
        href="#home"
        className="px-5 py-2 rounded-full text-[#f5d76e] font-bold border border-[#d4af37] bg-black/25 backdrop-blur-md shadow-lg hover:scale-105 transition"
      >
        HOME
      </a>

      <a
        href="#about"
        className="px-5 py-2 rounded-full text-white font-semibold hover:bg-white/10 transition"
      >
        ABOUT US
      </a>

      <a
        href="#services"
        className="px-5 py-2 rounded-full text-white font-semibold hover:bg-white/10 transition"
      >
        SERVICES
      </a>

      <a
        href="#projects"
        className="px-5 py-2 rounded-full text-white font-semibold hover:bg-white/10 transition"
      >
        PROJECTS
      </a>

      <a
        href="#contact"
        className="px-5 py-2 rounded-full text-white font-semibold hover:bg-white/10 transition"
      >
        CONTACT
      </a>

    </nav>

    {/* CTA BUTTON */}
    <a
      href="#contact"
      className="hidden md:inline-block bg-gradient-to-b from-[#ffe27a] via-[#d4af37] to-[#8f6913] text-black px-8 py-3 rounded-full font-black shadow-[0_6px_0_#5f4508,0_12px_25px_rgba(0,0,0,0.4)] hover:translate-y-1 hover:shadow-[0_3px_0_#5f4508,0_8px_18px_rgba(0,0,0,0.35)] transition"
    >
      GET QUOTE
    </a>

  </div>
</header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[78vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              PRECISION STEEL
              <br />
              FABRICATION &
              <br />
              ENGINEERING.
            </h2>

            <p className="mt-6 text-2xl text-white font-medium">
              Gates • Awnings • Welding • Structure Work • Metal Works
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#services"
                className="border-2 border-[#d4af37] bg-black/40 text-[#f5d76e] px-8 py-4 font-bold text-lg"
              >
                OUR SERVICES
              </a>

              <a
                href="#contact"
                className="bg-gradient-to-r from-[#d4af37] to-[#f3d36b] text-black px-8 py-4 font-bold text-lg border border-[#f5df8e]"
              >
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="border-8 border-gray-300 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="Rothary steel fabrication work"
              className="w-full h-[430px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-black text-[#08245c]">ABOUT US</h2>
            <div className="w-32 h-1 bg-[#d4af37] mt-4 mb-8"></div>

            <p className="text-3xl font-bold leading-snug text-[#08245c]">
              Reliable steel, stainless steel, welding and metal work solutions
              for residential, commercial and industrial projects.
            </p>

            <div className="mt-8 space-y-6 text-xl text-gray-700">
              <p>🏗️ Structure work, awnings and roof extension repairs.</p>
              <p>🚪 Main gates, safety doors, safety grills and stainless steel work.</p>
              <p>🛠️ Machinery maintenance, welding, roro bins and any metal works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <h2 className="text-5xl font-black text-center text-[#06142b] mb-14">
          SERVICES
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-black text-[#06142b]">
                  {service.title}
                </h3>
                <p className="mt-2 text-lg text-[#5c4a12]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS + WHY CHOOSE US */}
      <section
        id="projects"
        className="relative py-20 px-6 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')",
        }}
      >
        <div className="absolute inset-0 bg-[#06142b]/90"></div>

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-6">PROJECTS</h2>
          <h3 className="text-4xl font-black text-center text-[#d4af37] mb-10">
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
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 p-5">
                  <h4 className="text-2xl font-black text-white leading-tight">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-4xl font-black text-center mt-16 mb-10">
            WHY CHOOSE US
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-[#f3d36b] to-[#a57c16] p-4 text-4xl rounded-lg shadow-xl">
                🏅
              </div>
              <div>
                <h4 className="text-2xl font-black">SKILLED WORKMANSHIP</h4>
                <p className="text-gray-300 mt-2">
                  Practical steel and metal work experience for different project needs.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-[#f3d36b] to-[#a57c16] p-4 text-4xl rounded-lg shadow-xl">
                ⚙️
              </div>
              <div>
                <h4 className="text-2xl font-black">QUALITY MATERIALS</h4>
                <p className="text-gray-300 mt-2">
                  Strong fabrication standards for residential, commercial and industrial works.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="bg-gradient-to-br from-gray-100 to-gray-400 p-4 text-4xl rounded-lg shadow-xl">
                ⏱️
              </div>
              <div>
                <h4 className="text-2xl font-black">RELIABLE SERVICE</h4>
                <p className="text-gray-300 mt-2">
                  Clear communication, site support and dependable project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="border-8 border-gray-300 shadow-2xl p-8 bg-white">
            <h2 className="text-4xl font-black text-center text-[#06142b] mb-8">
              PARTNER WITH US
            </h2>

            <form className="grid grid-cols-2 gap-4">
              <input className="border-2 border-[#06142b] p-4 text-black" placeholder="NAME" />
              <input className="border-2 border-[#06142b] p-4 text-black" placeholder="COMPANY" />
              <input className="border-2 border-[#06142b] p-4 text-black" placeholder="EMAIL" />
              <input className="border-2 border-[#06142b] p-4 text-black" placeholder="PHONE" />

              <textarea
                className="col-span-2 border-2 border-[#06142b] p-4 text-black"
                rows={5}
                placeholder="MESSAGE"
              ></textarea>

              <a
                href="https://wa.me/601136023592?text=Hello%20I%20want%20a%20quotation%20from%20ROTHARY%20STEEL%20TECH%20ENGINEERING"
                className="col-span-2 bg-gradient-to-r from-[#d4af37] to-[#f3d36b] text-black py-4 text-center font-black"
              >
                SUBMIT INQUIRY
              </a>
            </form>
          </div>

          <div>
            <h2 className="text-5xl font-black text-[#08245c] leading-tight">
              READY TO ENGINEER
              <br />
              YOUR VISION?
            </h2>
            <div className="w-32 h-1 bg-[#d4af37] mt-5 mb-8"></div>

            <div className="border-8 border-gray-300 shadow-2xl p-8 text-xl text-[#06142b] space-y-6">
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
      <footer className="bg-[#06142b] text-white text-center py-6 border-t-4 border-[#d4af37]">
        © 2026 ROTHARY STEEL TECH ENGINEERING. All Rights Reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/601136023592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </main>
  );
}