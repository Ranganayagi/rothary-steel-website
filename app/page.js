"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    address: "",
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
Address: ${formData.address}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`
  );

  const services = [
  {
    title: "Steel Fabrication",
    desc: "Custom steel fabrication for residential, commercial and industrial needs.",
    img: "/image2.jpg",
    icon: "🏗️",
  },
  {
    title: "Welding Works",
    desc: "Reliable welding, repair and metal joining works.",
    img: "/image10.jpg",
    icon: "🔥",
  },
  {
    title: "Awning & Roofing",
    desc: "ACP, PU metal awning, C roof and roof extension works.",
    img: "/image14.jpg",
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
    img: "/image9.jpg",
    icon: "🏭",
  },
  {
    title: "Stainless Steel Work",
    desc: "Stainless steel railings, gates, frames and custom works.",
    img: "/image6.jpg",
    icon: "⚙️",
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
    title: "Premium Gate Work",
    img: "/image13.jpg",
  },
  {
    title: "Stainless Steel Safety Door",
    img: "/image18.jpg",
  },
  {
    title: "Completed Fence Work",
    img: "/image11.jpg",
  },
];

  return (
    <main className="min-h-screen bg-white text-[#06142b]">
      {/* NAVBAR */}
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#06142b]/95 backdrop-blur-md shadow-xl border-b border-[#d4af37]/30"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">

    <div className="flex items-center justify-center lg:justify-start gap-3">
      <img
        src="/logo.png"
        alt="Rothary Steel Tech Engineering Logo"
        className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
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

    <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 lg:gap-6 px-2">
      {[
        ["home", "HOME"],
        ["about", "ABOUT"],
        ["gallery", "GALLERY"],
        ["why", "WHY US"],
        ["services", "SERVICES"],
        ["contact", "CONTACT"],
      ].map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setActive(id)}
          className={`px-4 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all duration-300 ${
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
      className="w-full lg:w-auto text-center bg-[#d4af37] hover:bg-[#f3d36b] text-black px-6 py-3 font-black rounded-full transition shadow-lg"
    >
      GET QUOTE
    </a>
  </div>
</header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen pt-64 sm:pt-56 lg:pt-28 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142b]/95 via-[#06142b]/85 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 w-full grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#d4af37] font-black tracking-[0.3em] mb-4 text-sm">
              PREMIUM STEEL FABRICATION
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              BUILT STRONG,
              <br />
              BUILT RIGHT.
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Rothary Steel Tech Engineering provides quality steel fabrication,
              welding, structural works, awnings, gates, safety grills and metal
              engineering solutions with reliability and professionalism.
            </p>

            <p className="mt-4 text-[#f5d76e] font-semibold">
              Providing steel fabrication and engineering services across Malaysia
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
              src="/image19.jpg"
              alt="Steel welding work"
              className="w-full h-[480px] object-cover object-center rounded-3xl border-4 border-[#d4af37]/40 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/image7.jpg"
            alt="Steel fabrication work"
            className="w-full h-80 md:h-[460px] object-cover object-center rounded-3xl shadow-xl"
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
      <section className="py-16 md:py-24 px-5 md:px-6 bg-[#06142b]">
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
      <section id="services" className="py-16 md:py-24 px-5 md:px-6 bg-gray-50">
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
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-200"
              >
                <div className="h-72 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

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
      <section id="projects" className="py-16 md:py-24 px-5 md:px-6 bg-white">
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
                className="group relative rounded-3xl overflow-hidden shadow-xl h-80 bg-gray-100"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h4 className="text-xl font-black text-white">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
<section
  id="gallery"
  className="py-16 md:py-24 px-5 md:px-6 bg-white"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-black text-center text-[#06142b] mb-4">
      PHOTO GALLERY
    </h2>

    <p className="text-center text-gray-600 text-lg mb-12">
      Our latest steel fabrication, welding and engineering projects.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {[
        "/image2.jpg",
        "/image4.jpg",
        "/image5.jpg",
        "/image6.jpg",
        "/image8.jpg",
        "/image9.jpg",
        "/image10.jpg",
        "/image11.jpg",
      ].map((img, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl shadow-xl bg-gray-100"
        >
          <div className="h-56 md:h-64 overflow-hidden">
            <img
              src={img}
              alt="Rothary Steel Project"
              className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-[#082318] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            WHY CHOOSE US
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["🏅", "Quality Workmanship", "We focus on neat, strong and long-lasting fabrication work."],
              ["⚙️", "Reliable Service", "We provide clear communication, site support and dependable project delivery."],
              ["🛡️", "Strong & Safe", "We aim to deliver durable steel solutions with safety and professionalism."],
            ].map(([icon, title, desc], index) => (
              <div
                key={index}
                className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition"
              >
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="text-2xl font-black text-[#f5d76e]">{title}</h3>
                <p className="text-gray-300 mt-4">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#08245c]">
              GET A QUOTATION
            </h2>

            <div className="w-28 h-1 bg-[#d4af37] mx-auto mt-5 mb-8"></div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Contact us for steel fabrication, welding, awning, structural
              steel, safety grill, stainless steel and custom metal work services
              across Malaysia.
            </p>
          </div>

          {/* PROJECT PREVIEW IMAGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {["/image12.jpg", "/image15.jpg", "/image16.jpg", "/image20.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className="h-40 w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt="Project"
                    className="h-full w-full object-cover object-center hover:scale-110 transition duration-700"
                  />
                </div>
              )
            )}
          </div>

          {/* CONTACT CARD */}
          <div className="mt-12 bg-[#06142b] rounded-3xl p-6 md:p-10 shadow-2xl">
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37] placeholder:text-gray-500"
                placeholder="Address"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37] placeholder:text-gray-500"
                placeholder="Email"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37] placeholder:text-gray-500"
                placeholder="Phone"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 rounded-xl p-4 text-black bg-white border-2 border-gray-300 outline-none focus:border-[#d4af37] placeholder:text-gray-500"
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

            {/* GOOGLE MAP */}
<div className="mt-10 rounded-3xl overflow-hidden shadow-xl border border-white/10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.339582749128!2d100.96669177497499!3d3.950229596023524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cb415a2cfccc9d%3A0x2592c7950c1acf53!2sRothary%20Steel%20Tech%20Engineering!5e0!3m2!1sen!2smy!4v1779567714298!5m2!1sen!2smy"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full"
  ></iframe>
</div>

{/* COMPANY INFO */}
<div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-300 space-y-3">
  <p>
    📍 Lot 4337, Batu 6, Jalan Maharajalela, Kampung Sri Jaya,
    36000 Teluk Intan, Perak.
  </p>

  <p>📞 +60 11 3602 3592</p>

  <p>✉️ rotharysteeltechengineering@gmail.com</p>

  <p>Service Area: Available across Malaysia.</p>
</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06142b] text-white text-center py-8 px-5 border-t-4 border-[#d4af37]">
        <img
          src="/logo.png"
          alt="Rothary Steel Tech Engineering Logo"
          className="h-20 w-auto mx-auto mb-4 object-contain"
        />

        <h3 className="font-black text-lg">ROTHARY STEEL TECH ENGINEERING</h3>
        <p className="italic text-[#f5d76e] mt-1">
          Precision in Every Structure
        </p>
        <p className="text-sm mt-2">
          Steel Fabrication, Welding & Structural Works Across Malaysia
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
              className="w-9 h-9 hover:scale-110 transition object-contain"
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
              className="w-9 h-9 hover:scale-110 transition object-contain"
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
              className="w-9 h-9 hover:scale-110 transition object-contain"
            />
          </a>
        </div>

        <p className="text-sm mt-4">
          © 2026 Rothary Steel Tech Engineering. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
<a
  href={`https://wa.me/601136023592?text=${encodeURIComponent(
    "Hi Rothary Steel Tech Engineering, I would like to request a quotation."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform duration-300"
>
  <img
    src="/whatsappicon.png"
    alt="WhatsApp"
    className="w-20 h-20 object-contain"
  />
</a>
    </main>
  );
}