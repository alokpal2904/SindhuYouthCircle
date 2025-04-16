import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homes() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    username: ""
  });

  // Check if user is logged in when component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      age: "",
      password: "",
      username: ""
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          age: parseInt(formData.age),
          password: formData.password,
          role: 'user'
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        alert('Signup successful!');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setShowLoginModal(false);
        alert('Login successful!');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Password reset link sent to your email');
        setShowForgotPassword(false);
      } else {
        alert(data.message || 'Failed to send reset link');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request');
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
      />
      <title>HomePage</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      <div
        className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-4 py-3">
            <div className="flex items-center gap-2 text-[#0d151c]">
              <div className="size-16">
              <img
                  src="./logo.jpeg"
                  alt="Sindhu Youth Circle Logo"
                  className="w-[120px] h-[69px] transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">
                Sindhu Youth Circle
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <Link to="/" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Home
                </Link>
                <Link to="/about" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  About
                </Link>
                <Link to="/activities" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Activities
                </Link>
                <Link to="/gymkhana" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Gymkhana
                </Link>
                <Link to="/events" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Events
                </Link>
                <Link to="/library" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Library
                </Link>
                <Link to="/contact" className="text-[#0d151c] text-[18px] leading-[27px] font-normal hover:text-[#2094f3] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
                  Contact
                </Link>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-[#2094f3] text-white px-4 py-2 rounded-lg text-[1rem] font-normal hover:bg-[#1a7bc2] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-[#2094f3] text-white px-4 py-2 rounded-lg text-[1rem] font-normal hover:bg-[#1a7bc2] transition-colors duration-200" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </header>
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full flex-1">
              <div className="@container">
                <div className="p-0">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/frontpage.svg")',
                      minHeight: isLoggedIn ? '600px' : '600px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      paddingTop: '0',
                      marginTop: '0'
                    }}
                  >
                    <div className="flex flex-col gap-4 text-left max-w-2xl mt-4">
                      <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] drop-shadow-lg whitespace-nowrap">
                        Welcome to Sindhu Youth Circle
                      </h1>
                      <h2 className="text-white text-lg font-normal leading-relaxed @[480px]:text-xl @[480px]:font-normal @[480px]:leading-relaxed drop-shadow-md whitespace-nowrap">
                        Preserve the rich heritage of Sindhi culture
                      </h2>
                    </div>
                    {!isLoggedIn && (
                      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mt-8">
                        <h3 className="text-2xl font-bold text-[#0d151c] mb-4">Join Our Community</h3>
                        <form onSubmit={handleSignup} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                              placeholder="Enter your age"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-[#2094f3] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1a7bc2] transition-colors duration-200"
                          >
                            Sign Up Now
                          </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600 text-center">
                          Already have an account?{" "}
                          <button 
                            onClick={() => setShowLoginModal(true)}
                            className="text-[#2094f3] font-medium hover:underline"
                          >
                            Sign in
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Barbell"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Gym
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Get fit with our modern gym facilities
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Book"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Book Bank
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Borrow books for free from our library
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    className="text-[#0d151c]"
                    data-icon="BookOpen"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Library
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Read Sindhi literature and poetry
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Calendar"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Events
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Join cultural events and workshops
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    className="text-[#0d151c]"
                    data-icon="Strategy"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M68,152a36,36,0,1,0,36,36A36,36,0,0,0,68,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,68,208ZM34.34,106.34,48.69,92,34.34,77.66A8,8,0,0,1,45.66,66.34L60,80.69,74.34,66.34A8,8,0,0,1,85.66,77.66L71.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L60,103.31,45.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L196,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L184.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L196,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L207.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93a8.13,8.13,0,0,1-2,.24,8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L144,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H155.31l2.35,2.34C175.9,68.59,182.58,90.78,176.47,112.83Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Martial Arts
                    </h2>
                    <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Learn martial arts and self-defense
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-[#0d151c]">Sign In</h3>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2094f3] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1a7bc2] transition-colors duration-200"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setShowForgotPassword(true);
                }}
                className="text-[#2094f3] text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-[#0d151c]">Reset Password</h3>
              <button 
                onClick={() => setShowForgotPassword(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#cedde8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2094f3] focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2094f3] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1a7bc2] transition-colors duration-200"
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setShowForgotPassword(false);
                  setShowLoginModal(true);
                }}
                className="text-[#2094f3] text-sm hover:underline"
              >
                Back to Sign In
              </button>
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

export default Homes;
