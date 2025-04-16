import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return(
        <>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>Contact</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white group/design-root overflow-x-hidden"
    style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-0 py-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2 text-[#0d151c] pl-0">
          <div className="size-16">
            <img
              src="./logo.jpeg"
              alt="Sindhu Youth Circle Logo"
              className="w-[120px] h-[69px] transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-[#0d151c] text-xl font-bold leading-tight tracking-[-0.015em] m-0 p-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Sindhu Youth Circle
          </h2>
        </div>
        <div className="flex items-center gap-[2.25rem] pr-[133px]">
          <Link to="/" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Home
          </Link>
          <Link to="/about" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            About
          </Link>
          <Link to="/activities" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Activities
          </Link>
          <Link to="/gymkhana" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Gymkhana
          </Link>
          <Link to="/events" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Events
          </Link>
          <Link to="/library" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Library
          </Link>
          <Link to="/contact" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif', fontWeight: 400 }}>
            Contact
          </Link>
        </div>
      </header>

      <div className="flex flex-1 justify-center py-12 px-4 md:px-8 lg:px-12">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-[#0e141b] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-[#4e7397] text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-[#0e141b] text-2xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#2094f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#4e7397] text-sm font-medium">Email</p>
                      <a href="mailto:info@sindhuyouthcircle.org" className="text-[#0e141b] text-lg font-semibold hover:text-[#2094f3] transition-colors">
                        info@sindhuyouthcircle.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#2094f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#4e7397] text-sm font-medium">Phone</p>
                      <a href="tel:+14161234567" className="text-[#0e141b] text-lg font-semibold hover:text-[#2094f3] transition-colors">
                        +91 73501 05805
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-[#0e141b] text-2xl font-bold mb-6">Follow us</h2>
                <div className="space-y-4">
                  <a href="#" className="flex items-center justify-between p-4 rounded-xl border border-[#d0dbe7] hover:border-[#2094f3] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2094f3]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0e141b] font-bold">LinkedIn</p>
                        <p className="text-[#4e7397] text-sm">Connect with us</p>
                      </div>
                    </div>
                    <div className="text-[#2094f3] group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/sindhu_youth_circle/" className="flex items-center justify-between p-4 rounded-xl border border-[#d0dbe7] hover:border-[#2094f3] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2094f3]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0e141b] font-bold">Instagram</p>
                        <p className="text-[#4e7397] text-sm">Follow our story</p>
                      </div>
                    </div>
                    <div className="text-[#2094f3] group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </div>
                  </a>

                  <a href="https://www.facebook.com/people/Sindhu-Youth-Circle-Women-Wing/100069690035837/" className="flex items-center justify-between p-4 rounded-xl border border-[#d0dbe7] hover:border-[#2094f3] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#2094f3]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0e141b] font-bold">Facebook</p>
                        <p className="text-[#4e7397] text-sm">Like our page</p>
                      </div>
                    </div>
                    <div className="text-[#2094f3] group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-[#0e141b] text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#0e141b] text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#e7edf3] border-none focus:ring-2 focus:ring-[#2094f3] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#0e141b] text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-[#e7edf3] border-none focus:ring-2 focus:ring-[#2094f3] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#0e141b] text-sm font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-[#e7edf3] border-none focus:ring-2 focus:ring-[#2094f3] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2094f3] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#1a7bc2] transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">Contact Us</a>
              <a href="#" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">Terms of Service</a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sindhu_youth_circle/" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Sindhu-Youth-Circle-Women-Wing/100069690035837/" className="text-[#4e7397] hover:text-[#2094f3] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
            <p className="text-[#4e7397] text-sm">
              © 2023 Sindhu Youth Circle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>
    )
}

export default Contact;