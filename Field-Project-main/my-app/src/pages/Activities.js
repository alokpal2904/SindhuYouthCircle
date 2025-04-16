import React, { useState } from "react";
import { Link } from "react-router-dom";

function Activities() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    bookingTime: "",
    purpose: {
      marriage: false,
      engagement: false,
      dinner: false,
      drama: false,
      others: false
    },
    otherPurpose: "",
    amount: ""
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        purpose: {
          ...prev.purpose,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auditorium/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bookingTime: new Date(formData.bookingTime).toISOString()
        })
      });

      const data = await response.json();

      if (data.success) {
        setBookingSuccess(true);
      } else {
        alert('Error creating booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating booking. Please try again.');
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Serif%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
      />
      <title>Activities</title>
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
        className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 flex flex-1 py-5">
            <div className="layout-content-container flex flex-col w-full flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <h1 className="text-[#0d151c] text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-left mb-8">
                    Activities
                  </h1>
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Sindhu Bhavan
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        Sindhu Bhavan
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        A community hall available for rent. Suitable for private
                        events, cultural programs, and social gatherings. The hall features modern amenities including:
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Spacious auditorium with seating capacity of 500+</li>
                        <li>Modern sound and lighting systems</li>
                        <li>Air-conditioned premises</li>
                        <li>Separate green rooms and dressing areas</li>
                        <li>Parking facility for 100+ vehicles</li>
                        <li>Professional event management support</li>
                      </ul>
                    </div>
                    <button 
                      onClick={() => setShowBookingModal(true)}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Book Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("./sindhi_bhavan.png")'
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Murij Manghnani Gymkhana
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        Murij Manghnani Gymkhana
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        A sports complex with a cricket ground, football ground,
                        volleyball court, and badminton court. The gymkhana is a
                        popular venue for sports tournaments and coaching camps.
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Professional cricket ground with practice nets</li>
                        <li>FIFA standard football field</li>
                        <li>Indoor badminton courts with wooden flooring</li>
                        <li>Volleyball court with proper lighting</li>
                        <li>Sports equipment rental available</li>
                        <li>Qualified coaches for all sports</li>
                        <li>Regular tournaments and competitions</li>
                        <li>Changing rooms and shower facilities</li>
                      </ul>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Register Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("./gym.jpeg")'
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Suman Ramesh Tulsiani &amp; Sunder Shewak Sabha Book Bank
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        Suman Ramesh Tulsiani &amp; Sunder Shewak Sabha Book Bank
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        The Book Bank offers a collection of textbooks and reference
                        books for higher education. Members can borrow books for the
                        academic year at a nominal fee.
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Extensive collection of academic textbooks</li>
                        <li>Reference books for competitive exams</li>
                        <li>Study materials for various courses</li>
                        <li>Digital library access</li>
                        <li>Study rooms with internet facility</li>
                        <li>Photocopy and printing services</li>
                        <li>Regular book donation drives</li>
                        <li>Online book reservation system</li>
                      </ul>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Register Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/99528d73-a3ae-4e18-ac2a-fcaaefcfc03d.png")'
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Lekhraj Aziz Library &amp; Research Centre
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        Lekhraj Aziz Library &amp; Research Centre
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        The Library &amp; Research Centre contains a wide range of
                        literature, periodicals, and resources. Members can access
                        the library and participate in research projects.
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Vast collection of books and journals</li>
                        <li>Digital resources and e-books</li>
                        <li>Research assistance services</li>
                        <li>Computer workstations</li>
                        <li>Quiet study areas</li>
                        <li>Inter-library loan facility</li>
                        <li>Regular workshops and seminars</li>
                        <li>Online catalog access</li>
                      </ul>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Register Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/127ef6e6-7de6-42d1-ae87-270e0c620ee6.png")'
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Judo-Karate Classes
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        Judo-Karate Classes
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        The Judo-Karate Classes are conducted by professional
                        coaches. Students can learn martial arts techniques and
                        participate in belt grading exams.
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Certified martial arts instructors</li>
                        <li>Separate classes for different age groups</li>
                        <li>Regular belt grading examinations</li>
                        <li>Competition preparation training</li>
                        <li>Self-defense workshops</li>
                        <li>Fitness and conditioning programs</li>
                        <li>Special summer camps</li>
                        <li>Equipment and uniform provided</li>
                      </ul>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Register Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("./karate.jpeg")'
                    }}
                  />
                </div>
              </div>
              <h2 className="text-[#0d151c] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                National &amp; Sindhi Festival Celebrations
              </h2>
              <div className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#0d151c] text-xl font-bold leading-tight">
                        National &amp; Sindhi Festival Celebrations
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        The Sindhu Youth Circle organizes cultural events and
                        festive celebrations. Members can join the cultural programs
                        and take part in the festival activities.
                      </p>
                      <ul className="text-[#49779c] text-base font-normal leading-normal list-disc pl-5 mt-2">
                        <li>Traditional Sindhi cultural programs</li>
                        <li>National festival celebrations</li>
                        <li>Cultural workshops and seminars</li>
                        <li>Traditional dance performances</li>
                        <li>Music and singing competitions</li>
                        <li>Art and craft exhibitions</li>
                        <li>Food festivals and cooking workshops</li>
                        <li>Community gatherings and celebrations</li>
                      </ul>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#e7eef4] text-[#0d151c] text-sm font-medium leading-normal w-fit transition-all duration-300 hover:bg-[#2094f3] hover:text-white hover:scale-105 hover:shadow-lg">
                      <span className="truncate">Register Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{
                      backgroundImage:
                        'url("./event.png")'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {!bookingSuccess ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Book Sindhu Bhavan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Booking Time</label>
                      <input
                        type="datetime-local"
                        name="bookingTime"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.bookingTime}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount (₹)</label>
                      <input
                        type="number"
                        name="amount"
                        required
                        min="0"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.amount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <textarea
                      name="address"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Purpose of Booking</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="marriage"
                          className="mr-2"
                          checked={formData.purpose.marriage}
                          onChange={handleInputChange}
                        />
                        Marriage
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="engagement"
                          className="mr-2"
                          checked={formData.purpose.engagement}
                          onChange={handleInputChange}
                        />
                        Engagement
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="dinner"
                          className="mr-2"
                          checked={formData.purpose.dinner}
                          onChange={handleInputChange}
                        />
                        Dinner/Lunch
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="drama"
                          className="mr-2"
                          checked={formData.purpose.drama}
                          onChange={handleInputChange}
                        />
                        Drama
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="others"
                          className="mr-2"
                          checked={formData.purpose.others}
                          onChange={handleInputChange}
                        />
                        Others
                      </label>
                      {formData.purpose.others && (
                        <input
                          type="text"
                          name="otherPurpose"
                          placeholder="Please specify"
                          className="w-full px-4 py-2 border rounded-lg mt-2"
                          value={formData.otherPurpose}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Scan QR code to pay</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200 inline-block">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=sycyouthcircle@upi&pn=Sindhu%20Youth%20Circle&am=${formData.amount}&cu=INR`}
                          alt="Payment QR Code" 
                          className="w-40 h-40"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">UPI ID: sycyouthcircle@upi</p>
                    </div>
                    <div className="flex justify-end space-x-4 w-full">
                      <button
                        type="button"
                        onClick={() => setShowBookingModal(false)}
                        className="px-6 py-2 border rounded-lg hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#2094f3] text-white rounded-lg hover:bg-[#1884e3]"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Booking Successful!</h2>
                <p className="text-gray-600 mb-6">Your booking has been confirmed.</p>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="px-6 py-2 bg-[#2094f3] text-white rounded-lg hover:bg-[#1884e3]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="text-center py-4 bg-white shadow-md">
        <p>
          © 2025 <span className="font-semibold">Sindhu Youth Circle</span>. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Activities;

