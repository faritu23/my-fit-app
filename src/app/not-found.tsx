
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

            <h1 className="text-9xl font-extrabold text-blue-600">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Page Not Found!
            </h2>

            <p className="mt-3 max-w-md text-gray-500">
                Sorry, the page you are looking for
                does not exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-blue-600 px-6 py-3
                font-semibold text-white transition hover:bg-blue-700"
            >
                Back to Home
            </Link>

        </div>
    );
};

export default NotFound;
