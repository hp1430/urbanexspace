import { Parallax } from "../../components/atoms/Parallax/Parallax"
import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { Cards } from "../../components/molecules/Cards/Cards"
import FirstParallaxImage from "../../assets/firstParallax/FirstParallax.jpg"
import { Categories } from "../../components/organisms/Categories/Categories"
import { Contact } from "../../components/organisms/Contact/Contact"

export const Home = () => {
    return (
        <div className="bg-white m-0 p-0 overflow-hidden">
            <Navbar />
            <Parallax image={FirstParallaxImage} description={'TRANSFORM YOUR INTERIOR WITH URBANEX SPACE'} />
            <Cards />
            <Categories />
            <Contact />
        </div>
    )
}