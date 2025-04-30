import { Link } from "react-router-dom"
import logo from "../../../assets/logo/logo.png"

export const Navbar = () => {
    return (
        <div
            className="flex justify-center items-center text-white p-4 w-full h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg"
        >
            <div className="justify-between items-center w-full max-w-6xl flex text-black text-lg font-navbar font-light">
                {/* Left side */}
                <div className="flex justify-start items-center">
                    <Link className="ml-8 hover:text-gray-500">Home</Link>
                    <Link className="ml-8 hover:text-gray-500">Our Projects</Link>
                </div>

                <div className="flex justify-center items-center">
                    <img src={logo} alt="Logo" className="w-36 h-28" />
                </div>

                <div className="flex justify-end items-center">
                    <Link className=" hover:text-gray-500">About Us</Link>
                    <Link className="ml-8 mr-8 hover:text-gray-500">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}