"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Rothary Steel Tech Engineering, I would like to request a quotation.

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`
  );

  const services = [
    {
      title: "Steel Fabrication",
      desc: "Custom steel fabrication for residential, commercial and industrial needs.",
      img: "/image1.jpg",
      icon: "🏗️",
    },
    {
      title: "Welding Works",
      desc: "Reliable welding, repair and metal joining works.",
      img: "/image2.jpg",
      icon: "🔥",
    },
    {
      title: "Awning & Roofing",
      desc: "ACP, PU metal awning, C roof and roof extension works.",
      img: "/image3.jpg",
      icon: "🏠",
    },
    {
      title: "Main Gate",
      desc: "Custom steel gates for homes, shops and commercial properties.",
      img: "/image4.jpg",
      icon: "🚪",
    },
    {
      title: "Safety Grill & Door",
      desc: "Strong safety grills and safety doors with durable finishing.",
      img: "/image5.jpg",
      icon: "🔒",
    },
    {
      title: "Structural Steel Work",
      desc: "Steel frames, structures and heavy-duty fabrication works.",
      img: "/image1.jpg",
      icon: "🏭",
    },
    {
      title: "Stainless Steel Work",
      desc: "Stainless steel railings, gates, frames and custom works.",
      img: "/image6.jpg",
      icon: "⚙️",
    },
    {
      title: "Machinery Maintenance",
      desc: "Machinery repair, servicing and maintenance support.",
      img: "/image7.jpg",
      icon: "🔧",
    },
    {
      title: "Custom Metal Works",
      desc: "Iron works, roro bin repair and other custom metal solutions.",
      img: "/image8.jpg",
      icon: "🛠️",
    },
  ];

  const projects = [
    {
      title: "Steel Structure Work",
      img: "/image1.jpg",
    },
    {
      title: "Awning & Roof Extension",
      img: "/image3.jpg",
    },
    {
      title: "Welding & Fabrication",
      img: "/image2.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#06142b]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#082318] border-b border-[#d4af37]/40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img
              src="/logo.png"
              alt="Rothary Steel Tech Engineering Logo"
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />

            <div className="text-center lg:text-left">
              <h1 className="text-[#f8e08b] text-base sm:text-lg lg:text-2xl font-black tracking-wide leading-tight">
                ROTHARY STEEL TECH
                <br />
                ENGINEERING
              </h1>
              <p className="text-white/90 text-xs sm:text-sm italic tracking-wide mt-1">
                Precision in Every Structure
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-2 px-2">
            {[
              ["home", "HOME"],
              ["about", "ABOUT"],
              ["services", "SERVICES"],
              ["projects", "PROJECTS"],
              ["contact", "CONTACT"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`px-4 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide transition ${
                  active === id
                    ? "bg-[#d4af37] text-black"
                    : "text-[#f5d76e] hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="w-full lg:w-auto text-center bg-[#d4af37] hover:bg-[#f3d36b] text-black px-6 py-3 font-black rounded-full transition"
          >
            GET QUOTE
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image1.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#06142b]/85"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 w-full grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              BUILT STRONG.
              <br />
              BUILT RIGHT.
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Rothary Steel Tech Engineering provides quality steel fabrication,
              welding, structural works, awnings, gates, safety grills and metal
              engineering solutions with reliability and professionalism.
            </p>

            <p className="mt-4 text-[#f5d76e] font-semibold">
              Serving Teluk Intan, Perak and nearby areas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="text-center px-8 py-4 border-2 border-[#d4af37] text-[#f5d76e] font-black rounded-full hover:bg-[#d4af37]/20 transition"
              >
                OUR SERVICES
              </a>

              <a
                href="#contact"
                className="text-center px-8 py-4 bg-[#d4af37] text-black font-black rounded-full hover:bg-[#f3d36b] transition"
              >
                CONTACT US
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="/image2.jpg"
              alt="Steel welding work"
              className="w-full h-[480px] object-cover rounded-3xl border-4 border-[#d4af37]/40 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/image7.jpg"
            alt="Steel fabrication work"
            className="w-full h-72 md:h-[430px] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#08245c]">
              ABOUT US
            </h2>
            <div className="w-28 h-1 bg-[#d4af37] mt-4 mb-8"></div>

            <p className="text-xl md:text-2xl font-bold leading-snug text-[#08245c]">
              Reliable steel, stainless steel, welding and metal work solutions
              for residential, commercial and industrial projects.
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              We focus on practical workmanship, strong materials and dependable
              service. From custom gates and safety grills to awnings,
              structural steel and machinery repair, our goal is to deliver work
              that is durable, neat and trusted by customers.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-20 px-5 md:px-6 bg-[#06142b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
            VISION & MISSION
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-8 border-[#d4af37]">
              <h3 className="text-3xl font-black text-[#08245c] mb-5">
                OUR VISION
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                To become a leading and trusted steel fabrication and
                engineering company known for quality, reliability, and
                excellence.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-8 border-[#d4af37]">
              <h3 className="text-3xl font-black text-[#08245c] mb-5">
                OUR MISSION
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                To deliver high-quality steel fabrication and engineering
                solutions through skilled workmanship, reliable service, safety,
                integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 px-5 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#06142b] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Complete steel fabrication, welding and metal work solutions for
            homes, businesses and industrial projects.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition border border-gray-200"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-black text-[#06142b]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#06142b] mb-4">
            FEATURED WORKS
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            A sample of our steel, welding and fabrication work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 p-5">
                  <h4 className="text-xl font-black text-white">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 px-5 md:px-6 bg-[#082318] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            WHY CHOOSE US
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="text-5xl mb-5">🏅</div>
              <h3 className="text-2xl font-black text-[#f5d76e]">
                Quality Workmanship
              </h3>
              <p className="text-gray-300 mt-4">
                We focus on neat, strong and long-lasting fabrication work.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="text-5xl mb-5">⚙️</div>
              <h3 className="text-2xl font-black text-[#f5d76e]">
                Reliable Service
              </h3>
              <p className="text-gray-300 mt-4">
                We provide clear communication, site support and dependable
                project delivery.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="text-5xl mb-5">🛡️</div>
              <h3 className="text-2xl font-black text-[#f5d76e]">
                Strong & Safe
              </h3>
              <p className="text-gray-300 mt-4">
                We aim to deliver durable steel solutions with safety and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#08245c] leading-tight">
              GET A QUOTATION
            </h2>
            <div className="w-28 h-1 bg-[#d4af37] mt-5 mb-8"></div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Contact us for steel fabrication, welding, awning, safety grill,
              gate, stainless steel and structural work inquiries.
            </p>

            <p className="text-lg font-bold text-[#08245c] mb-8">
              Service Area: Teluk Intan, Perak and nearby areas.
            </p>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-6 md:p-8 text-lg text-[#06142b] space-y-5">
              <p>
                📍 Lot 4337, Batu 6, Jalan Maharajalela, Kampung Sri Jaya,
                36000 Teluk Intan, Perak.
              </p>
              <p>✉️ rotharysteeltechengineering@gmail.com</p>
              <p>📞 +60 11 3602 3592</p>
              <p>Reg No: KT0609406-H</p>

              <div className="pt-4 border-t border-gray-300">
                <p className="font-black mb-3">Follow Us:</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/share/1BHgkLpX6h/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#06142b] text-white px-4 py-2 rounded-full font-bold hover:bg-[#d4af37] hover:text-black transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/rotharysteeltechengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#06142b] text-white px-4 py-2 rounded-full font-bold hover:bg-[#d4af37] hover:text-black transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@rotharysteeltechengineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#06142b] text-white px-4 py-2 rounded-full font-bold hover:bg-[#d4af37] hover:text-black transition"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#06142b] rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-white text-center mb-3">
              SEND INQUIRY
            </h3>

            <p className="text-center text-gray-300 mb-8">
              Fill in the details and send directly through WhatsApp.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37] placeholder:text-gray-500"
                placeholder="Name"
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37]"
                placeholder="Company"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37]"
                placeholder="Email"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37]"
                placeholder="Phone"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37]"
                rows={5}
                placeholder="Message / Type of work needed"
              ></textarea>

              <a
                href={`https://wa.me/601136023592?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 bg-[#d4af37] hover:bg-[#f3d36b] text-black py-4 text-center font-black rounded-xl transition"
              >
                SEND VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06142b] text-white text-center py-8 px-5 border-t-4 border-[#d4af37]">
        <h3 className="font-black text-lg">ROTHARY STEEL TECH ENGINEERING</h3>
        <p className="italic text-[#f5d76e] mt-1">
          Precision in Every Structure
        </p>
        <p className="text-sm mt-2">
          Teluk Intan, Perak | Steel Fabrication, Welding & Structural Works
        </p>

        <div className="flex justify-center gap-5 mt-4">
  <a
    href="https://www.facebook.com/share/1BHgkLpX6h/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/facebook.png"
      alt="Facebook"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://www.instagram.com/rotharysteeltechengineering"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/instagram.png"
      alt="Instagram"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>

  <a
    href="https://www.tiktok.com/@rotharysteeltechengineer"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/tiktok.png"
      alt="TikTok"
      className="w-8 h-8 hover:scale-110 transition"
    />
  </a>
</div>

        <p className="text-sm mt-4">
          © 2026 Rothary Steel Tech Engineering. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/601136023592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform duration-300"
      >
        <img src="/whatsappicon.png" alt="WhatsApp" className="w-14 h-14" />
      </a>
    </main>
  );
}