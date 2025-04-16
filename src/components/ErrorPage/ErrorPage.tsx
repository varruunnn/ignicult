import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-extrabold text-[#82E300] mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <a
        onClick={() => navigate('/')}
        className="inline-block px-6 py-3 bg-[#82E300] text-black font-semibold rounded-md transition-transform hover:scale-105"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
