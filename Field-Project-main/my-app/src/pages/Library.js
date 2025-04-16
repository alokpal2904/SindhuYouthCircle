import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";
import { reserveBook } from "../services/api";

function Library() {
    const [showForm, setShowForm] = useState(false);
    const [submitResult, setSubmitResult] = useState({ success: false, message: "" });
    const [showResult, setShowResult] = useState(false);

    const handleFormSubmit = async (formData) => {
        try {
            // Send data to backend
            await reserveBook(formData);
            setSubmitResult({
                success: true,
                message: "Book reserved successfully!"
            });
            setShowResult(true);
            // Hide result message after 5 seconds
            setTimeout(() => setShowResult(false), 5000);
            return true;
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "Failed to reserve book. Please try again."
            });
            setShowResult(true);
            // Hide error message after 5 seconds
            setTimeout(() => setShowResult(false), 5000);
            return false;
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Library &amp; Book Bank</title>
  
  {/* Result Notification */}
  {showResult && (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-md z-50 ${submitResult.success ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
        <p>{submitResult.message}</p>
    </div>
  )}
  
  {/* Navbar */}
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
  {/* Hero Section */}
  <section
    className="relative min-h-[500px] flex items-center justify-center text-white"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Library & Book Bank</h1>
      <p className="text-xl mb-8 opacity-90">Discover a world of knowledge with our extensive collection of books and resources</p>
      <button 
        className="bg-[#2094f3] hover:bg-[#1884e3] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
        onClick={toggleForm}
      >
        Issue a Book
      </button>
    </div>
  </section>
  {/* Library Information */}
  <div className="w-full bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-7xl mx-auto py-16">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#0d151c] mb-4">
            Lekhraj Aziz Library & Research Centre
          </h2>
          <p className="text-lg text-[#49779c] mb-8">
            The Lekhraj Aziz Library & Research Centre has over 33,000 Sindhi
            books, the largest collection in the world. Our library serves as a
            cultural hub for the community, preserving and promoting Sindhi
            literature and heritage.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop" 
                alt="Library Interior"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Library Interior</h3>
                  <p className="text-sm">Modern reading spaces</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
                alt="Book Collection"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Book Collection</h3>
                  <p className="text-sm">Extensive Sindhi literature</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
                alt="Reading Area"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Reading Area</h3>
                  <p className="text-sm">Comfortable study spaces</p>
                </div>
              </div>
            </div>
          </div>
          <button 
            className="bg-[#2094f3] hover:bg-[#1884e3] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={toggleForm}
          >
            Issue a Book
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Book Bank Information */}
  <div className="w-full bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-7xl mx-auto py-16">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#0d151c] mb-4">
            Suman Ramesh Tulsiani & Sunder Shewak Sabha Book Bank
          </h2>
          <p className="text-lg text-[#49779c] mb-8">
            Provides free textbooks from Class 8 to post-graduation. Our book bank
            aims to support students in their educational journey by providing
            access to essential academic resources.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
                alt="Book Bank Collection"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Textbook Collection</h3>
                  <p className="text-sm">Class 8 to Post-graduation</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop" 
                alt="Study Materials"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Study Materials</h3>
                  <p className="text-sm">Comprehensive resources</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
                alt="Reference Books"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Reference Books</h3>
                  <p className="text-sm">Academic support</p>
                </div>
              </div>
            </div>
          </div>
          <button 
            className="bg-[#2094f3] hover:bg-[#1884e3] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={toggleForm}
          >
            Issue a Book
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Book Reservation Form Modal */}
  {showForm && <BookForm onClose={toggleForm} onSubmit={handleFormSubmit} />}

  {/* Availability Section */}
  <div className="w-full bg-gradient-to-r from-[#2094f3] to-[#1884e3] text-white py-16">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-4">Library Hours</h3>
      <p className="text-xl mb-2">Every Sunday</p>
      <p className="text-2xl font-semibold">10:00 AM - 1:00 PM</p>
      <div className="mt-8 flex justify-center gap-8">
        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium">Regular Hours</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-sm font-medium">Contact Us</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm font-medium">Book Events</p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="text-center py-4 bg-white shadow-md">
    <p>
      © 2025 <span className="font-semibold">Sindhu Youth Circle</span>. All
      rights reserved.
    </p>
  </footer>
</>

    )
}

export default Library;