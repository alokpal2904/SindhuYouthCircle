import React from 'react';
import { Link } from 'react-router-dom';

function AuthButton() {
    return (
        <div className="flex items-center gap-6">
            <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Sign Up / Login
            </Link>
        </div>
    );
}

export default AuthButton; 