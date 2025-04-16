import React, { useState, useEffect } from "react";
import PaymentForm from "./PaymentForm";

function BookForm({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phoneNumber: "",
        collegeName: "",
        collegeAddress: "",
        familyMembers: "",
        monthlyEarnings: "",
        issueDate: new Date().toISOString().split('T')[0], // Current date as default
        academicYear: "",
        stream: "",
        semester: "",
        bookName: ""
        // Payment fields are now handled by PaymentForm
    });
    
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [availableBooks, setAvailableBooks] = useState([]);
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        // Reset book selection when stream or semester changes
        setFormData(prev => ({
            ...prev,
            bookName: ""
        }));
        
        // Set available books based on stream and semester
        setAvailableBooks(getBookOptions(formData.stream, formData.semester));
    }, [formData.stream, formData.semester]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when field is edited
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ""
            });
        }
        
        // Reset semester if stream changes
        if (name === "stream") {
            setFormData(prev => ({
                ...prev,
                semester: "",
                bookName: ""
            }));
        }
    };
    
    const validateForm = () => {
        const errors = {};
        
        // Required fields validation for main form
        const requiredFields = [
            { field: "firstName", label: "First name" },
            { field: "lastName", label: "Last name" },
            { field: "address", label: "Resident address" },
            { field: "email", label: "Email" },
            { field: "phoneNumber", label: "Phone number" },
            { field: "collegeName", label: "College name" },
            { field: "collegeAddress", label: "College address" },
            { field: "familyMembers", label: "Number of family members" },
            { field: "monthlyEarnings", label: "Monthly earnings" },
            { field: "issueDate", label: "Issue date" },
            { field: "academicYear", label: "Academic year" },
            { field: "stream", label: "Stream" },
            { field: "bookName", label: "Book name" }
        ];
        
        requiredFields.forEach(({ field, label }) => {
            if (!formData[field].toString().trim()) {
                errors[field] = `${label} is required`;
            }
        });
        
        // Validate semester if Engineering, Commerce or Arts is selected
        if (["Engineering", "Commerce", "Arts"].includes(formData.stream) && !formData.semester) {
            errors.semester = "Semester is required";
        }
        
        // Email validation
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        
        // Phone number validation - must be 10 digits
        if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) {
            errors.phoneNumber = "Please enter a valid 10-digit phone number";
        }
        
        // Number validations
        if (formData.familyMembers && (isNaN(formData.familyMembers) || Number(formData.familyMembers) < 1)) {
            errors.familyMembers = "Please enter a valid number";
        }
        
        if (formData.monthlyEarnings && (isNaN(formData.monthlyEarnings) || Number(formData.monthlyEarnings) < 0)) {
            errors.monthlyEarnings = "Please enter a valid amount";
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return;
        }
        
        // Proceed to payment
        setShowPayment(true);
        window.scrollTo(0, 0); // Scroll to top to show payment form
    };
    
    const handlePaymentComplete = async (paymentData) => {
        setIsSubmitting(true);
        
        try {
            // Combine form data with payment data
            const completeData = {
                ...formData,
                payment: paymentData
            };
            
            // Send data to backend using the onSubmit prop
            if (onSubmit) {
                const success = await onSubmit(completeData);
                if (success) {
                    // Reset form and close if successful
                    setFormData({
                        firstName: "",
                        lastName: "",
                        address: "",
                        email: "",
                        phoneNumber: "",
                        collegeName: "",
                        collegeAddress: "",
                        familyMembers: "",
                        monthlyEarnings: "",
                        issueDate: new Date().toISOString().split('T')[0],
                        academicYear: "",
                        stream: "",
                        semester: "",
                        bookName: ""
                    });
                    onClose();
                }
            } else {
                // Fallback if no onSubmit prop provided
                console.log("Form submitted with payment:", completeData);
                onClose();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleBackToForm = () => {
        setShowPayment(false);
    };

    // Stream options
    const streamOptions = [
        "Engineering",
        "Commerce",
        "Arts",
        "10th",
        "11th",
        "12th"
    ];
    
    // Semester options based on selected stream
    const getSemesterOptions = () => {
        if (formData.stream === "Engineering") {
            return ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem", "7th Sem", "8th Sem"];
        } else if (["Commerce", "Arts"].includes(formData.stream)) {
            return ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem"];
        }
        return [];
    };
    
    // Book options based on stream and semester
    const getBookOptions = (stream, semester) => {
        if (stream === "Engineering") {
            switch(semester) {
                case "1st Sem":
                    return [
                        "BR Patil - Basic Electrical Engineering",
                        "MD Dayal - Engineering Mechanics",
                        "Tech Max - BEE",
                        "Kumbhojkar - Engineering Mathematics 1",
                        "Balagurusamy - C Programming",
                        "Avadhanulu - Engineering Physics"
                    ];
                case "2nd Sem":
                    return [
                        "Kumbhojkar - Engineering Mathematics 2",
                        "Mallick - Programming for Problem Solving (PCC)",
                        "Reema Thareja - Python Programming",
                        "Jain & Jain - Engineering Chemistry",
                        "Rajput - Engineering Thermodynamics",
                        "Bhattacharya - Basic Electronics"
                    ];
                case "3rd Sem":
                    return [
                        "Kumbhojkar - Engineering Mathematics 3",
                        "Rabaey - Digital Logic Design",
                        "Tanenbaum - Data Structures",
                        "Millman & Halkias - Electronic Devices and Circuits",
                        "Deitel & Deitel - Object Oriented Programming"
                    ];
                case "4th Sem":
                    return [
                        "Kumbhojkar - Engineering Mathematics 4",
                        "Stallings - Operating Systems",
                        "Forouzan - Computer Networks",
                        "Korth - Database Management Systems",
                        "Rosen - Discrete Mathematics"
                    ];
                default:
                    return [
                        "Advanced Programming Concepts",
                        "Software Engineering",
                        "Compiler Design",
                        "Artificial Intelligence",
                        "Machine Learning Fundamentals",
                        "Web Development Technologies"
                    ];
            }
        } else if (stream === "Commerce") {
            switch(semester) {
                case "1st Sem":
                    return [
                        "Financial Accounting",
                        "Business Economics",
                        "Business Organization",
                        "Business Communication",
                        "Business Law"
                    ];
                case "2nd Sem":
                    return [
                        "Corporate Accounting",
                        "Business Statistics",
                        "Fundamentals of Entrepreneurship",
                        "Marketing Management",
                        "Business Environment"
                    ];
                default:
                    return [
                        "Cost Accounting",
                        "Taxation",
                        "Auditing",
                        "Corporate Law",
                        "Financial Management"
                    ];
            }
        } else if (stream === "Arts") {
            switch(semester) {
                case "1st Sem":
                    return [
                        "Introduction to Psychology",
                        "History of India",
                        "Political Theory",
                        "English Literature",
                        "Sociology Fundamentals"
                    ];
                case "2nd Sem":
                    return [
                        "Social Psychology",
                        "Ancient Indian History",
                        "Comparative Politics",
                        "British Literature",
                        "Research Methodology"
                    ];
                default:
                    return [
                        "Developmental Psychology",
                        "Modern Indian History",
                        "International Relations",
                        "American Literature",
                        "Social Movements"
                    ];
            }
        } else if (stream === "10th") {
            return [
                "NCERT Mathematics - Class 10",
                "NCERT Science - Class 10",
                "NCERT Social Science - Class 10",
                "NCERT English - Class 10",
                "NCERT Hindi - Class 10"
            ];
        } else if (stream === "11th") {
            return [
                "NCERT Physics Part 1 & 2 - Class 11",
                "NCERT Chemistry Part 1 & 2 - Class 11",
                "NCERT Mathematics - Class 11",
                "NCERT Biology - Class 11",
                "NCERT Economics - Class 11",
                "NCERT Accountancy - Class 11",
                "NCERT Business Studies - Class 11"
            ];
        } else if (stream === "12th") {
            return [
                "NCERT Physics Part 1 & 2 - Class 12",
                "NCERT Chemistry Part 1 & 2 - Class 12",
                "NCERT Mathematics Part 1 & 2 - Class 12",
                "NCERT Biology - Class 12",
                "NCERT Economics - Class 12",
                "NCERT Accountancy - Class 12",
                "NCERT Business Studies - Class 12"
            ];
        }
        
        return [];
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto py-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4 my-4 max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">
                    {showPayment ? "Payment Details" : "Book Bank Reservation Form"}
                </h2>
                
                {showPayment ? (
                    <PaymentForm 
                        bookName={formData.bookName}
                        firstName={formData.firstName}
                        lastName={formData.lastName}
                        issueDate={formData.issueDate}
                        onBack={handleBackToForm}
                        onSubmit={handlePaymentComplete}
                    />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Personal Information Section */}
                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                            <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                                    )}
                                </div>
                                
                                {/* Last Name */}
                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                                    )}
                                </div>
                                
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.email && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                    )}
                                </div>
                                
                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                                        Phone Number*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        placeholder="10-digit mobile number"
                                    />
                                    {formErrors.phoneNumber && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                                    )}
                                </div>
                                
                                {/* Resident Address - Full width */}
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                        Resident Address*
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className={`w-full px-3 py-2 border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    ></textarea>
                                    {formErrors.address && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Educational Information Section */}
                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                            <h3 className="font-semibold text-lg mb-3">Educational Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* College Name */}
                                <div>
                                    <label htmlFor="collegeName" className="block text-gray-700 font-medium mb-2">
                                        College Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="collegeName"
                                        name="collegeName"
                                        value={formData.collegeName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.collegeName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.collegeName && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.collegeName}</p>
                                    )}
                                </div>
                                
                                {/* Academic Year */}
                                <div>
                                    <label htmlFor="academicYear" className="block text-gray-700 font-medium mb-2">
                                        Current Academic Year*
                                    </label>
                                    <input
                                        type="text"
                                        id="academicYear"
                                        name="academicYear"
                                        value={formData.academicYear}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 2023-2024"
                                        className={`w-full px-3 py-2 border ${formErrors.academicYear ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.academicYear && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.academicYear}</p>
                                    )}
                                </div>
                                
                                {/* College Address - Full width */}
                                <div className="md:col-span-2">
                                    <label htmlFor="collegeAddress" className="block text-gray-700 font-medium mb-2">
                                        College Address*
                                    </label>
                                    <textarea
                                        id="collegeAddress"
                                        name="collegeAddress"
                                        value={formData.collegeAddress}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className={`w-full px-3 py-2 border ${formErrors.collegeAddress ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    ></textarea>
                                    {formErrors.collegeAddress && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.collegeAddress}</p>
                                    )}
                                </div>
                                
                                {/* Stream */}
                                <div>
                                    <label htmlFor="stream" className="block text-gray-700 font-medium mb-2">
                                        Book Required From Stream*
                                    </label>
                                    <select
                                        id="stream"
                                        name="stream"
                                        value={formData.stream}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.stream ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                                    >
                                        <option value="">Select Stream</option>
                                        {streamOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {formErrors.stream && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.stream}</p>
                                    )}
                                </div>
                                
                                {/* Semester - Only show for certain streams */}
                                {["Engineering", "Commerce", "Arts"].includes(formData.stream) && (
                                    <div>
                                        <label htmlFor="semester" className="block text-gray-700 font-medium mb-2">
                                            Semester*
                                        </label>
                                        <select
                                            id="semester"
                                            name="semester"
                                            value={formData.semester}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border ${formErrors.semester ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                                        >
                                            <option value="">Select Semester</option>
                                            {getSemesterOptions().map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        {formErrors.semester && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.semester}</p>
                                        )}
                                    </div>
                                )}
                                
                                {/* Book Name - Show when stream is selected */}
                                {formData.stream && (
                                    <div className={["Engineering", "Commerce", "Arts"].includes(formData.stream) && !formData.semester ? "hidden" : "md:col-span-2"}>
                                        <label htmlFor="bookName" className="block text-gray-700 font-medium mb-2">
                                            Book to be Issued*
                                        </label>
                                        <select
                                            id="bookName"
                                            name="bookName"
                                            value={formData.bookName}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border ${formErrors.bookName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                                            disabled={["Engineering", "Commerce", "Arts"].includes(formData.stream) && !formData.semester}
                                        >
                                            <option value="">Select Book</option>
                                            {availableBooks.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        {formErrors.bookName && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.bookName}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Family Information & Issue Details Section */}
                        <div className="bg-gray-50 p-4 rounded-md mb-4">
                            <h3 className="font-semibold text-lg mb-3">Family Information & Issue Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Family Members */}
                                <div>
                                    <label htmlFor="familyMembers" className="block text-gray-700 font-medium mb-2">
                                        Number of Family Members*
                                    </label>
                                    <input
                                        type="number"
                                        id="familyMembers"
                                        name="familyMembers"
                                        value={formData.familyMembers}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-3 py-2 border ${formErrors.familyMembers ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.familyMembers && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.familyMembers}</p>
                                    )}
                                </div>
                                
                                {/* Monthly Earnings */}
                                <div>
                                    <label htmlFor="monthlyEarnings" className="block text-gray-700 font-medium mb-2">
                                        Total Family Earnings Per Month (₹)*
                                    </label>
                                    <input
                                        type="number"
                                        id="monthlyEarnings"
                                        name="monthlyEarnings"
                                        value={formData.monthlyEarnings}
                                        onChange={handleInputChange}
                                        min="0"
                                        className={`w-full px-3 py-2 border ${formErrors.monthlyEarnings ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.monthlyEarnings && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.monthlyEarnings}</p>
                                    )}
                                </div>
                                
                                {/* Issue Date */}
                                <div>
                                    <label htmlFor="issueDate" className="block text-gray-700 font-medium mb-2">
                                        Date of Issue*
                                    </label>
                                    <input
                                        type="date"
                                        id="issueDate"
                                        name="issueDate"
                                        value={formData.issueDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border ${formErrors.issueDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {formErrors.issueDate && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.issueDate}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Form Buttons */}
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                Continue to Payment
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">* Required fields</p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default BookForm; 