import logo from '../../../../public/favicon.png'

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between shadow-md">
      {/* Left: Copyright */}
      <div className="text-sm ml-20 mb-2 md:mb-0">
        © {new Date().getFullYear()} <span className="font-semibold">URBANEX SPACE</span>
      </div>

      {/* Center: Logo & Language */}
      <div className="flex flex-col items-center">
        <img
          src={logo} // Replace with your white logo path
          alt="Logo"
          className="h-16 mb-1"
        />
        <div className="text-xs space-x-2">
          <span className="font-bold">TRANSFORM YOUR INTERIOR</span>
        </div>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex space-x-4 text-white text-xl mr-20">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-pink-500 hover:text-gray-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-blue-600 hover:text-gray-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-red-600 hover:text-gray-400" />
        </a>
        {/*<a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x hover:text-gray-400" />
        </a>*/}
      </div>
    </footer>
  );
};
