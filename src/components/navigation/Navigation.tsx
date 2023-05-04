import Link from 'next/link';
import { useState } from 'react';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log('Toggle navigation')
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center justify-between w-full h-fit">
        <div className="flex-shrink-0">
          <Link href="/" className="text-4xl font-bold">
            13
          </Link>
        </div>
          <button
            type="button"
            className="sm:hidden block text-gray-400 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleNav}
          >
            <svg
              className="h-6 w-6 fill-white"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29289 18.2929C5.90237 17.9024 5.90237 17.2692 6.29289 16.8787L16.8787 6.29289C17.2692 5.90237 17.9024 5.90237 18.2929 6.29289C18.6834 6.68342 18.6834 7.31658 18.2929 7.70711L7.70711 18.2929C7.31658 18.6834 6.68342 18.6834 6.29289 18.2929Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 13C4 12.4477 4.44772 12 5 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H5C4.44772 14 4 13.5523 4 13ZM5 19C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H13C13.5523 21 14 20.5523 14 20C14 19.4477 13.5523 19 13 19H5Z"
                />
              )}
            </svg>
          </button>
      </div>
      <div
        className={`fixed top-14 bottom-0 w-full h-full bg-blue-800 ${
          isNavOpen ? 'left-0' : 'left-full'
        } sm:hidden flex flex-col justify-center items-center transition-all duration-300`}
      >
        <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Home
        </Link>
        <Link href="/studio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          About
        </Link>
      </div>
      <div
        className="hidden sm:block sm:ml-6"
      >
        <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Home
        </Link>
        <Link href="/studio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
