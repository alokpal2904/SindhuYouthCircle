import React, { useState } from "react";
import { Link } from "react-router-dom";

function Gymkhana() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    sex: "",
    age: "",
    heightFeet: "",
    heightInches: "",
    weight: "",
    medicalConditions: {
      sugar: false,
      bp: false,
      cardiac: false,
      thyroid: false,
      others: false
    },
    otherMedicalCondition: ""
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const plans = {
    monthly: { price: 500, duration: "month" },
    quarterly: { price: 1200, duration: "3 months" },
    halfYearly: { price: 2300, duration: "6 months" },
    yearly: { price: 4400, duration: "year" }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        medicalConditions: {
          ...prev.medicalConditions,
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
      const response = await fetch('http://localhost:5000/api/gym/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          membershipPlan: selectedPlan,
          amountPaid: plans[selectedPlan].price
        })
      });

      const data = await response.json();

      if (data.success) {
        setPaymentSuccess(true);
      } else {
        alert('Error creating membership. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating membership. Please try again.');
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
    setPaymentSuccess(false);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
      />
      <title>Gymkhana</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
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
          <div className="px-4 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full flex-1">
              <div className="@container">
                <div className="p-4">
                  <div
                    className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-8 pb-12 relative overflow-hidden group"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    <div className="flex flex-col gap-4 text-left relative z-10 max-w-2xl">
                      <h1 className="text-white text-5xl font-black leading-tight tracking-tight">
                        Murif Manghnani Gymkhana
                      </h1>
                      <h2 className="text-gray-200 text-xl font-normal leading-relaxed">
                        The Murif Manghnani Gymkhana, located in the heart of the
                        Sindhu Youth Circle, offers a wide range of fitness and
                        sports facilities including a gym, pool, tennis courts and
                        more. The gym is open from 6:30 AM to 11 AM and 6 PM to 10
                        PM.
                      </h2>
                      <button className="flex items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[#2094f3] hover:bg-[#1884e3] text-white text-lg font-bold leading-none tracking-wide transition-all duration-300 hover:scale-105 mt-4 w-fit">
                        <span className="truncate">Join Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-12">
                <h2 className="text-[#111518] text-3xl font-bold leading-tight tracking-tight mb-8 text-center">
                  Membership Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  
                  {/* Monthly Plan */}
                  <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-solid border-[#dbe1e6] bg-white p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2094f3]/20 group">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#111518] text-xl font-bold leading-tight">
                        Monthly
                      </h3>
                      <p className="flex items-baseline gap-2 text-[#111518]">
                        <span className="text-[#2094f3] text-4xl font-black leading-none">
                          ₹500
                        </span>
                        <span className="text-[#111518] text-lg font-medium opacity-80">
                          / month
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access to gym and pool
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Structured timings
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Discounts on dietary supplements
                      </div>
                    </div>
                    <button 
                      onClick={() => handlePlanSelect('monthly')}
                      className="mt-auto w-full rounded-xl py-3 px-4 bg-gray-100 hover:bg-[#2094f3] text-[#111518] hover:text-white font-semibold transition-all duration-300 text-center"
                    >
                      Choose Plan
                    </button>
                  </div>

                  {/* Quarterly Plan */}
                  <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-solid border-[#dbe1e6] bg-white p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2094f3]/20 group">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#111518] text-xl font-bold leading-tight">
                        Quarterly
                      </h3>
                      <p className="flex items-baseline gap-2 text-[#111518]">
                        <span className="text-[#2094f3] text-4xl font-black leading-none">
                          ₹1,200
                        </span>
                        <span className="text-[#111518] text-lg font-medium opacity-80">
                          / 3 months
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access to gym and pool
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Structured timings
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Discounts on dietary supplements
                      </div>
                    </div>
                    <button 
                      onClick={() => handlePlanSelect('quarterly')}
                      className="mt-auto w-full rounded-xl py-3 px-4 bg-gray-100 hover:bg-[#2094f3] text-[#111518] hover:text-white font-semibold transition-all duration-300 text-center"
                    >
                      Choose Plan
                    </button>
                  </div>

                  {/* Half-Yearly Plan */}
                  <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-solid border-[#dbe1e6] bg-white p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2094f3]/20 group">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#111518] text-xl font-bold leading-tight">
                        Half-Yearly
                      </h3>
                      <p className="flex items-baseline gap-2 text-[#111518]">
                        <span className="text-[#2094f3] text-4xl font-black leading-none">
                          ₹2,300
                        </span>
                        <span className="text-[#111518] text-lg font-medium opacity-80">
                          / 6 months
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access to gym and pool
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Structured timings
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Discounts on dietary supplements
                      </div>
                    </div>
                    <button 
                      onClick={() => handlePlanSelect('halfYearly')}
                      className="mt-auto w-full rounded-xl py-3 px-4 bg-gray-100 hover:bg-[#2094f3] text-[#111518] hover:text-white font-semibold transition-all duration-300 text-center"
                    >
                      Choose Plan
                    </button>
                  </div>

                  {/* Yearly Plan */}
                  <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-solid border-[#dbe1e6] bg-white p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2094f3]/20 group relative overflow-hidden">
                    <div className="absolute -right-12 top-8 bg-[#2094f3] text-white px-12 py-1 rotate-45 text-sm font-medium">
                      Best Value
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#111518] text-xl font-bold leading-tight">
                        Yearly
                      </h3>
                      <p className="flex items-baseline gap-2 text-[#111518]">
                        <span className="text-[#2094f3] text-4xl font-black leading-none">
                          ₹4,400
                        </span>
                        <span className="text-[#111518] text-lg font-medium opacity-80">
                          / year
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access to gym and pool
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Structured timings
                      </div>
                      <div className="text-base font-normal leading-relaxed flex items-center gap-3 text-[#111518]">
                        <svg className="w-5 h-5 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Discounts on dietary supplements
                      </div>
                    </div>
                    <button 
                      onClick={() => handlePlanSelect('yearly')}
                      className="mt-auto w-full rounded-xl py-3 px-4 bg-[#2094f3] hover:bg-[#1884e3] text-white font-semibold transition-all duration-300 text-center"
                    >
                      Choose Plan
                    </button>
                  </div>

                </div>
              </div>

              {/* Additional Features Section */}
              <div className="px-4 pb-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-[#2094f3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#111518] mb-2">Flexible Timings</h3>
                    <p className="text-[#49779c]">Open from 6:30 AM to 11 AM and 6 PM to 10 PM daily</p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-[#2094f3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#111518] mb-2">Modern Equipment</h3>
                    <p className="text-[#49779c]">State-of-the-art fitness equipment and facilities</p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-[#2094f3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#2094f3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#111518] mb-2">Expert Trainers</h3>
                    <p className="text-[#49779c]">Professional guidance from certified fitness trainers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {!paymentSuccess ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Gym Membership Registration</h2>
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
                        <label className="block text-sm font-medium mb-2">Sex</label>
                        <select
                          name="sex"
                          required
                          className="w-full px-4 py-2 border rounded-lg"
                          value={formData.sex}
                          onChange={handleInputChange}
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Age</label>
                        <input
                          type="number"
                          name="age"
                          required
                          min="18"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={formData.age}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Height (Feet)</label>
                        <input
                          type="number"
                          name="heightFeet"
                          required
                          min="4"
                          max="7"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={formData.heightFeet}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Height (Inches)</label>
                        <input
                          type="number"
                          name="heightInches"
                          required
                          min="0"
                          max="11"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={formData.heightInches}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                        <input
                          type="number"
                          name="weight"
                          required
                          min="30"
                          className="w-full px-4 py-2 border rounded-lg"
                          value={formData.weight}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Home Address</label>
                      <textarea
                        name="address"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Medical Conditions</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="sugar"
                            className="mr-2"
                            checked={formData.medicalConditions.sugar}
                            onChange={handleInputChange}
                          />
                          Diabetes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="bp"
                            className="mr-2"
                            checked={formData.medicalConditions.bp}
                            onChange={handleInputChange}
                          />
                          High Blood Pressure
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="cardiac"
                            className="mr-2"
                            checked={formData.medicalConditions.cardiac}
                            onChange={handleInputChange}
                          />
                          Cardiac Issues
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="thyroid"
                            className="mr-2"
                            checked={formData.medicalConditions.thyroid}
                            onChange={handleInputChange}
                          />
                          Thyroid
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="others"
                            className="mr-2"
                            checked={formData.medicalConditions.others}
                            onChange={handleInputChange}
                          />
                          Others
                        </label>
                        {formData.medicalConditions.others && (
                          <input
                            type="text"
                            name="otherMedicalCondition"
                            placeholder="Please specify"
                            className="w-full px-4 py-2 border rounded-lg mt-2"
                            value={formData.otherMedicalCondition}
                            onChange={handleInputChange}
                          />
                        )}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h3 className="text-lg font-semibold mb-2">Selected Plan</h3>
                      <p className="text-xl font-bold text-[#2094f3]">
                        ₹{plans[selectedPlan].price} / {plans[selectedPlan].duration}
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Scan QR code to pay</p>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 inline-block">
                          <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=sycyouthcircle@upi&pn=Sindhu%20Youth%20Circle&am={plans[selectedPlan].price}&cu=INR" 
                            alt="Payment QR Code" 
                            className="w-40 h-40"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">UPI ID: sycyouthcircle@upi</p>
                      </div>
                      <div className="flex justify-end space-x-4 w-full">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
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
                  <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                  <p className="text-gray-600 mb-6">Your gym membership has been activated.</p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-[#2094f3] text-white rounded-lg hover:bg-[#1884e3]"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

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

export default Gymkhana;