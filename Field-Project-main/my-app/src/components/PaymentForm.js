import React, { useState } from "react";

function PaymentForm({ bookName, firstName, lastName, issueDate, onBack, onSubmit }) {
    const [formData, setFormData] = useState({
        depositAmount: "500",
        paymentMethod: "",
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    
    // Payment methods
    const paymentMethods = [
        { id: "card", label: "Credit/Debit Card" },
        { id: "upi", label: "UPI Payment" },
        { id: "netbanking", label: "Net Banking" }
    ];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };
    
    const selectPaymentMethod = (method) => {
        setFormData({
            ...formData,
            paymentMethod: method
        });
    };
    
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.paymentMethod) {
            newErrors.paymentMethod = "Please select a payment method";
        }
        
        if (formData.paymentMethod === "card") {
            if (!formData.cardNumber) {
                newErrors.cardNumber = "Card number is required";
            } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
                newErrors.cardNumber = "Please enter a valid card number";
            }
            
            if (!formData.cardName) {
                newErrors.cardName = "Name on card is required";
            }
            
            if (!formData.expiryDate) {
                newErrors.expiryDate = "Expiry date is required";
            }
            
            if (!formData.cvv) {
                newErrors.cvv = "CVV is required";
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Call the onSubmit callback with the payment data
            onSubmit(formData);
        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Payment Information Section */}
            <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold text-lg mb-3">Payment Details</h3>
                
                <div className="mb-6">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-4">
                        <p className="text-blue-800 font-medium">Booking Summary</p>
                        <p className="text-sm text-gray-600 mt-2">Book: {bookName}</p>
                        <p className="text-sm text-gray-600">Borrower: {firstName} {lastName}</p>
                        <p className="text-sm text-gray-600">Issue Date: {issueDate}</p>
                        <div className="mt-3 pt-3 border-t border-blue-200">
                            <p className="font-medium">Security Deposit: ₹{formData.depositAmount}</p>
                            <p className="text-xs text-gray-500 mt-1">This is a refundable deposit that will be returned when the book is returned in good condition.</p>
                        </div>
                    </div>
                    
                    {/* Payment Method Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Payment Method*
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {paymentMethods.map(method => (
                                <div 
                                    key={method.id}
                                    className={`border rounded-md p-3 cursor-pointer ${
                                        formData.paymentMethod === method.id 
                                            ? 'border-blue-500 bg-blue-50' 
                                            : 'border-gray-300 hover:border-blue-300'
                                    }`}
                                    onClick={() => selectPaymentMethod(method.id)}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-4 h-4 rounded-full border ${
                                            formData.paymentMethod === method.id
                                                ? 'border-blue-500 bg-blue-500' 
                                                : 'border-gray-400'
                                        }`}>
                                            {formData.paymentMethod === method.id && (
                                                <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>
                                            )}
                                        </div>
                                        <span className="ml-2">{method.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {errors.paymentMethod && (
                            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
                        )}
                    </div>
                    
                    {/* Credit Card Details - Show only when card payment is selected */}
                    {formData.paymentMethod === "card" && (
                        <div className="border border-gray-200 rounded-md p-4 mt-4">
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                                    Card Number*
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    className={`w-full px-3 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {errors.cardNumber && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="cardName" className="block text-gray-700 font-medium mb-2">
                                    Name on Card*
                                </label>
                                <input
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {errors.cardName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                                )}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
                                        Expiry Date*
                                    </label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        className={`w-full px-3 py-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {errors.expiryDate && (
                                        <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                                        CVV*
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        placeholder="123"
                                        className={`w-full px-3 py-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    {errors.cvv && (
                                        <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* UPI Payment - Show only when UPI is selected */}
                    {formData.paymentMethod === "upi" && (
                        <div className="border border-gray-200 rounded-md p-4 mt-4 text-center">
                            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-md flex items-center justify-center mb-4">
                                <div className="text-center">
                                    <div className="text-3xl mb-2">📱</div>
                                    <div className="text-gray-500">QR Code</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Scan with any UPI app to pay</p>
                            <p className="font-medium">UPI ID: bookbank@ybl</p>
                        </div>
                    )}
                    
                    {/* Net Banking - Show only when Net Banking is selected */}
                    {formData.paymentMethod === "netbanking" && (
                        <div className="border border-gray-200 rounded-md p-4 mt-4">
                            <p className="mb-3">Select your bank:</p>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                <option value="">-- Select Bank --</option>
                                <option value="sbi">State Bank of India</option>
                                <option value="hdfc">HDFC Bank</option>
                                <option value="icici">ICICI Bank</option>
                                <option value="axis">Axis Bank</option>
                                <option value="kotak">Kotak Mahindra Bank</option>
                            </select>
                            <p className="text-sm text-gray-500 mt-2">You will be redirected to your bank's website to complete the payment.</p>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Payment Buttons */}
            <div className="flex justify-between space-x-2 mt-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                    Back to Form
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Processing Payment...' : `Pay ₹${formData.depositAmount}`}
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">* Required fields</p>
            <div className="flex items-center justify-center mt-4">
                <div className="text-xs text-gray-500 flex items-center">
                    <span className="mr-2">🔒 Secured by</span>
                    <span className="font-bold">MOCK PAY</span>
                </div>
            </div>
        </form>
    );
}

export default PaymentForm; 