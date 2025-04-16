import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
<>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Serif%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>About Us</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
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
  <div
    className="relative flex size-full min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white group/design-root overflow-x-hidden"
    style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col flex-1">
          <div className="@container">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8">
              <div className="flex-1">
                <h1 className="text-[#0d151c] tracking-light text-5xl font-bold leading-tight mb-6">
                  About Us
                </h1>
                <p className="text-[#49779c] text-lg font-normal leading-relaxed">
                  Sindhu Youth Circle, a nonprofit organization, was established
                  in 1962 by a group of young Sindhi men with the aim of promoting
                  Sindhi culture and providing welfare services to the community.
                  Over the years, the organization has made significant
                  contributions to the preservation and promotion of Sindhi
                  heritage and has undertaken various social welfare projects. The
                  organization's primary focus is on the cultural preservation and
                  community welfare.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="./ab.png" 
                    alt="Sindhu Youth Circle Community"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-tight mb-6">
                Our History
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                    <span className="text-[#2094f3] text-xl font-bold">1962</span>
                  </div>
                  <div>
                    <h3 className="text-[#0d151c] text-xl font-semibold mb-2">Establishment</h3>
                    <p className="text-[#49779c] text-lg">Sindhu Youth Circle was established in 1962</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                    <span className="text-[#2094f3] text-xl font-bold">1972</span>
                  </div>
                  <div>
                    <h3 className="text-[#0d151c] text-xl font-semibold mb-2">Cultural Milestone</h3>
                    <p className="text-[#49779c] text-lg">Publication of 'Sindhu' magazine in 1972</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2094f3]/10 flex items-center justify-center">
                    <span className="text-[#2094f3] text-xl font-bold">1987</span>
                  </div>
                  <div>
                    <h3 className="text-[#0d151c] text-xl font-semibold mb-2">Recognition</h3>
                    <p className="text-[#49779c] text-lg">Conferred with 'Shri Mohandas Ranjhan Valecha Award' in 1987</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-r from-[#2094f3] to-[#1884e3] p-8 mb-8 text-white">
              <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90">
                The mission of Sindhu Youth Circle is to promote Sindhi heritage and
                culture, foster harmony and goodwill among communities, and provide
                welfare services to the needy without any distinction of caste,
                creed, or religion.
              </p>
            </div>

            {/* Key Achievements Section */}
            <div className="bg-white shadow-sm p-8 mb-8">
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-tight mb-6">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2094f3]/5 rounded-xl p-6">
                  <h3 className="text-[#0d151c] text-xl font-semibold mb-3">Cultural Preservation</h3>
                  <p className="text-[#49779c] text-lg">
                    Significant contributions to the preservation and promotion of Sindhi heritage
                  </p>
                </div>
                <div className="bg-[#2094f3]/5 rounded-xl p-6">
                  <h3 className="text-[#0d151c] text-xl font-semibold mb-3">Literary Excellence</h3>
                  <p className="text-[#49779c] text-lg">
                    Publication of 'Sindhu' magazine, widely recognized for its literary and cultural content
                  </p>
                </div>
                <div className="bg-[#2094f3]/5 rounded-xl p-6">
                  <h3 className="text-[#0d151c] text-xl font-semibold mb-3">Social Welfare</h3>
                  <p className="text-[#49779c] text-lg">
                    Various social welfare projects benefiting the community
                  </p>
                </div>
                <div className="bg-[#2094f3]/5 rounded-xl p-6">
                  <h3 className="text-[#0d151c] text-xl font-semibold mb-3">Recognition</h3>
                  <p className="text-[#49779c] text-lg">
                    Conferring the 'Shri Mohandas Ranjhan Valecha Award' for outstanding contributions
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="bg-white shadow-sm p-8">
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-tight mb-6">
                Leadership
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-[#2094f3]/5 rounded-xl p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="./founder.svg" 
                    alt="Mr. Sunder Dangwani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[#0d151c] text-2xl font-bold mb-2">
                    Mr. Sunder Dangwani
                  </h3>
                  <p className="text-[#49779c] text-lg">
                    Chief Trustee, Sindhu Youth Circle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="text-center py-4 bg-white shadow-md">
    <p>
      © 2025 <span className="font-semibold">Sindhu Youth Circle</span>. All
      rights reserved.
    </p>
  </footer>
</>

  );
}

export default About;
