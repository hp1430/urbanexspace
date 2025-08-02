import { Link } from "react-router-dom"
import logo from "../../../assets/logo/logo.png"

export const Navbar = () => {

    function handlePortfolioClick(e) {
        e.preventDefault();
        const section = document.querySelector('#portfolio');
        const navbarHeight = 125; // Replace with your navbar's height in pixels
        if (section) {
            const top = section.offsetTop - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    function handleAboutClick(e) {
        e.preventDefault();
        const section = document.querySelector('#aboutUs');
        const navbarHeight = 125; // Replace with your navbar's height in pixels
        if (section) {
            const top = section.offsetTop - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    function handleServicesClick(e) {
        e.preventDefault();
        const section = document.querySelector('#services');
        const navbarHeight = 80; // Replace with your navbar's height in pixels
        if (section) {
            const top = section.offsetTop - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    function handleContactClick(e) {
        e.preventDefault();
        const section = document.querySelector('#contact');
        const navbarHeight = 125; // Replace with your navbar's height in pixels
        if (section) {
            const top = section.offsetTop - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    return (
        <div className="flex justify-center items-center text-white p-4 w-full h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg fixed top-0 left-0 z-10">
            <div className="flex items-center w-full max-w-6xl text-black text-lg font-navbar font-light px-4">
                {/* Clickable Logo */}
                <div className="flex-shrink-0">
                    <Link to="/home#home">
                        <img src={logo} alt="Logo" className="w-36 h-28 object-contain" />
                    </Link>
                </div>

                {/* Navigation Links aligned right */}
                <div className="flex ml-10 space-x-8 justify-end flex-grow items-center">
                    <Link to="/home#home" className="hover:text-gray-700">Home</Link>
                    <Link to="/home#portfolio" onClick={(e) => handlePortfolioClick(e)} className="hover:text-gray-700">Portfolio</Link>
                    <Link to="/home#aboutUs" onClick={(e) => handleAboutClick(e)} className="hover:text-gray-700">About</Link>
                    <Link to="/home#services" onClick={(e) => handleServicesClick(e)} className="hover:text-gray-700">Services</Link>
                    <Link to="/home#contact" onClick={(e) => handleContactClick(e)} className="hover:text-gray-700">Contact</Link>
                </div>
            </div>
        </div>
    )
}
