import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-100 to-orange-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-md w-full">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-6xl animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold text-gray-600 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
            🔙 Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;