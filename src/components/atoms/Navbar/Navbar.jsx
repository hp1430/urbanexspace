import { Link } from "react-router-dom"
import logo from "../../../assets/logo/logo.png"

export const Navbar = () => {
    return (
        <div className="flex justify-center items-center text-white p-4 w-full h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg fixed top-0 left-0 z-10">
            <div className="flex items-center w-full max-w-6xl text-black text-lg font-navbar font-light px-4">
                {/* Clickable Logo */}
                <div className="flex-shrink-0">
                    <Link to="/home">
                        <img src={logo} alt="Logo" className="w-36 h-28 object-contain" />
                    </Link>
                </div>

                {/* Navigation Links aligned right */}
                <div className="flex ml-10 space-x-8 justify-end flex-grow items-center">
                    <Link to="/home" className="hover:text-gray-700">Home</Link>
                    <Link to="/portfolio" className="hover:text-gray-700">Portfolio</Link>
                    <Link to="/home#aboutUs" className="hover:text-gray-700">About</Link>
                    <Link to="/services" className="hover:text-gray-700">Services</Link>
                    <Link to="/home#contact" className="hover:text-gray-700">Contact</Link>
                </div>
            </div>
        </div>
    )
}
