import React, { useState } from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "ratepn445@gmail.com", link: "mailto:ratepn445@gmail.com" },
    { logo: "logo-whatsapp", text: "+963959547610", link: "https://wa.me/963959547610" },
    { logo: "location", text: "Syria, Damascus, Alassad Suburb", link: "https://www.google.com/maps/place/Alassad+Suburb,+Damascus,+Syria" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ratepn445@gmail.com?subject=Contact from ${formData.name}&body=${formData.message} (from ${formData.email})`;
    window.location.href = mailtoLink;
    setShowConfirmation(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-gray-400 text-lg">Get in Touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div>
            {contact_info.map((contact, i) => (
              <div key={i} className="flex gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] min-h-[3.5rem] mt-5 text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        {showConfirmation && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-cyan-600">
                Message Sent!
              </h2>
              <p className="mt-4 text-gray-200">
                Thank you for getting in touch. We will respond to you shortly.
              </p>
              <button
                className="btn-primary mt-6"
                onClick={() => setShowConfirmation(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;


