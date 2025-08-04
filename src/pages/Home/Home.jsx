import { Parallax } from "../../components/atoms/Parallax/Parallax"
import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { Cards } from "../../components/molecules/Cards/Cards"
import FirstParallaxImage from "../../assets/firstParallax/FirstParallax.png"
import { Portfolio } from "../../components/organisms/Portfolio/Portfolio"
import { Contact } from "../../components/organisms/Contact/Contact"
import { AboutUs } from "../../components/molecules/AboutUs/AboutUs"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Services from "../../components/molecules/Services/Services"
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton"
import { Footer } from "../../components/molecules/Footer/Footer"

export const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.hash === "#home") {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if(element) {
                element.scrollIntoView({ behavior: "smooth"} );
            }
        }
    }, [location])

    return (
        <div className="bg-white m-0 p-0 overflow-hidden" id="home">
            <Navbar />
            <Parallax image={FirstParallaxImage} description={'URBANEX SPACE'} />
            <Cards />
            <Portfolio />
            <AboutUs />
            <Services />
            <Contact />
            <Footer />
            <WhatsappButton />
        </div>
    )
}