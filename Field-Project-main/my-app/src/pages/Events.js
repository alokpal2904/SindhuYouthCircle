import React, { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    role: "Participant",
    participationType: "",
    otherParticipation: ""
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDetailEvent, setSelectedDetailEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  const events = [
    { 
      id: 1, 
      title: "Sindhi Chetichand Celebration", 
      date: "October 22, 2022", 
      time: "10:00 AM - 7:00 PM", 
      image: "/chetichand-1678532220.jpg",
      category: "Cultural",
      registered: 85,
      capacity: 100,
      description: "Annual celebration of Sindhi new year with cultural performances and traditional food.",
      reviews: [
        { id: 1, user: "Ramesh K.", rating: 5, comment: "Wonderful celebration of our culture!" },
        { id: 2, user: "Priya S.", rating: 4, comment: "Great event but too crowded" }
      ]
    },
    { 
      id: 2, 
      title: "Sindhi Drama Performance", 
      date: "November 1, 2022", 
      time: "1:00 PM - 4:00 PM", 
      image: "/sindhi-culture-day-wallpaper-2.jpg",
      category: "Cultural",
      registered: 45,
      capacity: 80,
      description: "Traditional Sindhi drama showcasing our rich heritage."
    },
    { 
      id: 3, 
      title: "Sindhi Music Competition", 
      date: "October 22, 2026", 
      time: "10:00 AM - 7:00 PM", 
      image: "/music.jpg",
      category: "Competition",
      registered: 32,
      capacity: 50,
      description: "Annual music competition for Sindhi artists of all ages."
    },
    { 
      id: 4, 
      title: "Republic Day Celebration", 
      date: "January 26, 2024", 
      time: "08:00 AM - 11:00 AM", 
      image: "/republic day.jfif",
      category: "National",
      registered: 120,
      capacity: 200,
      description: "Patriotic celebration with flag hoisting and cultural programs."
    },
    { 
      id: 5, 
      title: "Independence Day Celebration", 
      date: "August 15, 2024", 
      time: "08:00 AM - 11:00 AM", 
      image: "/independence day.jpg",
      category: "National",
      registered: 95,
      capacity: 200,
      description: "Celebrating our nation's independence with traditional fervor."
    },
    { 
      id: 6, 
      title: "Womens Day Celebration", 
      date: "March 08, 2024", 
      time: "06:00 PM - 09:00 PM", 
      image: "/womens day.jpg",
      category: "Cultural",
      registered: 68,
      capacity: 100,
      description: "Honoring Sindhi women achievers with awards and performances."
    },
    { 
      id: 7, 
      title: "Behrana Sahib", 
      date: "January 12, 2024", 
      time: "05:00 PM - 10:00 PM", 
      image: "/behrana.jpg",
      category: "Religious",
      registered: 210,
      capacity: 250,
      description: "Annual religious gathering with prayers and community feast."
    },
    { 
      id: 8, 
      title: "Sindhi Language Day", 
      date: "April 10, 2024", 
      time: "04:00 PM - 10:00 PM", 
      image: "slday.jpg",
      category: "Cultural",
      registered: 72,
      capacity: 150,
      description: "Celebrating our mother tongue with poetry, songs and seminars."
    }
  ];

  const currentDate = new Date();
  
  const parseEventDate = (eventDate) => {
    const [month, day, year] = eventDate.split(/[\s,]+/);
    return new Date(`${month} ${day}, ${year}`);
  };

  const isEventPast = (eventDate) => {
    return parseEventDate(eventDate) < currentDate;
  };

  const getDaysUntilEvent = (eventDate) => {
    const eventDateObj = parseEventDate(eventDate);
    const diffTime = eventDateObj - currentDate;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const sortedEvents = [...events].sort((a, b) => {
    const aDate = parseEventDate(a.date);
    const bDate = parseEventDate(b.date);
    const aDays = getDaysUntilEvent(a.date);
    const bDays = getDaysUntilEvent(b.date);
    
    if (aDays >= 0 && bDays >= 0) return aDays - bDays;
    if (aDays >= 0) return -1;
    if (bDays >= 0) return 1;
    return bDate - aDate;
  });

  const closestEvent = sortedEvents.find(event => !isEventPast(event.date));

  const filteredEvents = sortedEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "" || event.category === category;
    
    if (filter === "upcoming") return matchesSearch && matchesCategory && !isEventPast(event.date);
    if (filter === "past") return matchesSearch && matchesCategory && isEventPast(event.date);
    return matchesSearch && matchesCategory;
  });

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleEnrollClick = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const handleViewDetails = (event) => {
    setSelectedDetailEvent(event);
    setDetailModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (
      /^[A-Za-z\s]{3,}$/.test(formData.name) &&
      formData.age >= 10 &&
      emailRegex.test(formData.email) &&
      /^\d{10}$/.test(formData.contact) &&
      (formData.role !== "Participant" || 
        (formData.participationType && 
          (formData.participationType !== "Other" || formData.otherParticipation)))
    ) {
      alert(`Thank you for registering as ${formData.role} for ${selectedEvent.title}!`);
      setIsOpen(false);
      setFormData({
        name: "",
        age: "",
        email: "",
        contact: "",
        role: "Participant",
        participationType: "",
        otherParticipation: ""
      });
    } else {
      alert("Please fill all required fields correctly.");
    }
  };

  const categories = [...new Set(events.map(event => event.category))];

  return (
    <>
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
      
      <div className="max-w-6xl mx-auto p-4">
        {closestEvent && (
          <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Next Upcoming Event</h2>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <img src={closestEvent.image} alt={closestEvent.title} className="w-32 h-20 rounded-lg object-cover" />
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-lg">{closestEvent.title}</h3>
                <p className="text-gray-600">{closestEvent.date} - {closestEvent.time}</p>
                <p className="text-blue-600 font-medium mt-1">
                  {getDaysUntilEvent(closestEvent.date)} days remaining
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: `${(closestEvent.registered/closestEvent.capacity)*100}%`}}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {closestEvent.registered}/{closestEvent.capacity} registered
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={() => handleEnrollClick(closestEvent)}
                >
                  Register Now
                </button>
                <button
                  className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                  onClick={() => handleViewDetails(closestEvent)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">All Events</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search events..." 
              className="border p-2 rounded text-sm"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <select 
              className="border p-2 rounded text-sm"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All Events</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <button 
            className={`px-3 py-1 rounded-full text-sm ${category === "" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => {
              setCategory("");
              setCurrentPage(1);
            }}
          >
            All
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`px-3 py-1 rounded-full text-sm ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {currentEvents.length > 0 ? (
            currentEvents.map((event) => {
              const pastEvent = isEventPast(event.date);
              const daysUntil = getDaysUntilEvent(event.date);
              
              return (
                <div key={event.id} className="flex items-center bg-white shadow-md p-4 rounded-lg">
                  <img src={event.image} alt={event.title} className="w-32 h-20 rounded-lg object-cover" />
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold">{event.title}</h3>
                        <p className="text-gray-600">{event.date} - {event.time}</p>
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mt-1">
                          {event.category}
                        </span>
                      </div>
                      <div className="text-right">
                        {pastEvent ? (
                          <p className="text-red-500 text-sm">Event completed</p>
                        ) : (
                          <p className="text-green-600 text-sm">
                            {daysUntil === 0 ? "Today" : `${daysUntil} days remaining`}
                          </p>
                        )}
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{width: `${(event.registered/event.capacity)*100}%`}}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {event.registered}/{event.capacity} registered
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        pastEvent
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                      onClick={() => !pastEvent && handleEnrollClick(event)}
                      disabled={pastEvent}
                      title={pastEvent ? "This event has already occurred" : "Click to register"}
                    >
                      {pastEvent ? "Event Ended" : "Register"}
                    </button>
                    <button
                      onClick={() => handleViewDetails(event)}
                      className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No events found matching your criteria</p>
            </div>
          )}
        </div>

        {filteredEvents.length > eventsPerPage && (
          <div className="flex justify-center mt-6">
            {Array.from({length: Math.ceil(filteredEvents.length / eventsPerPage)}).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i+1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i+1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {i+1}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Register for {selectedEvent.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                  pattern="[A-Za-z ]{3,}"
                  title="Name should contain only letters and be at least 3 characters"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age*</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                  min="10"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                  pattern="\d{10}"
                  title="Please enter a 10-digit phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Register As*</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="Participant"
                      checked={formData.role === "Participant"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Participant
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="Volunteer"
                      checked={formData.role === "Volunteer"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Volunteer
                  </label>
                </div>
              </div>

              {formData.role === "Participant" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Participation Type*</label>
                    <select
                      name="participationType"
                      value={formData.participationType}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Drama">Drama</option>
                      <option value="Dance">Dance</option>
                      <option value="Singing">Singing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {formData.participationType === "Other" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Please Specify*</label>
                      <textarea
                        name="otherParticipation"
                        value={formData.otherParticipation}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                      />
                    </div>
                  )}
                </>
              )}

              {formData.role === "Volunteer" && (
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    Thank you for volunteering! We'll contact you with more details about your role.
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {detailModalOpen && selectedDetailEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{selectedDetailEvent.title}</h3>
              <button 
                onClick={() => setDetailModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="md:w-1/3">
                <img src={selectedDetailEvent.image} className="w-full h-48 object-cover rounded-lg"/>
                <div className="mt-4">
                  <p><strong>Date:</strong> {selectedDetailEvent.date}</p>
                  <p><strong>Time:</strong> {selectedDetailEvent.time}</p>
                  <p><strong>Category:</strong> {selectedDetailEvent.category}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{width: `${(selectedDetailEvent.registered/selectedDetailEvent.capacity)*100}%`}}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedDetailEvent.registered}/{selectedDetailEvent.capacity} registered
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="font-bold mb-2">Event Description</h4>
                <p className="text-gray-700 mb-4">{selectedDetailEvent.description}</p>
                
                <div className="flex gap-3 mt-6">
                  <button
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    onClick={() => {
                      setDetailModalOpen(false);
                      handleEnrollClick(selectedDetailEvent);
                    }}
                    disabled={isEventPast(selectedDetailEvent.date)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Register
                  </button>
                  
                  <button 
                    className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    onClick={() => alert("Added to your calendar!")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Add to Calendar
                  </button>
                </div>
                
                <div className="flex gap-2 mt-4 justify-center">
                  <a 
                    href="https://www.facebook.com/people/Sindhu-Youth-Circle-Women-Wing/100069690035837/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <a 
                    href="https://www.instagram.com/sindhu_youth_circle/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-2 rounded-full hover:opacity-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </button>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold mb-3">Reviews</h4>
                  {selectedDetailEvent.reviews?.length > 0 ? (
                    selectedDetailEvent.reviews.map(review => (
                      <div key={review.id} className="border-b py-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="font-medium mt-1">{review.user}</p>
                        <p className="text-gray-700 mt-1">{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews yet</p>
                  )}
                </div>
              </div>
            </div>
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

export default Events;