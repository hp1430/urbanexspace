import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import hospitality11 from "../../assets/portfolio/hospitality/hospitality11.png"
import hospitality12 from "../../assets/portfolio/hospitality/hospitality12.png"
import hospitality21 from "../../assets/portfolio/hospitality/hospitality21.png"
import hospitality22 from "../../assets/portfolio/hospitality/hospitality22.png"
import HospitalitySlide11 from "../../assets/portfolio/hospitality/HospitalitySlide11.png"
import HospitalitySlide12 from "../../assets/portfolio/hospitality/HospitalitySlide12.png"
import HospitalitySlide13 from "../../assets/portfolio/hospitality/HospitalitySlide13.png"
import HospitalitySlide14 from "../../assets/portfolio/hospitality/HospitalitySlide14.png"
import HospitalitySlide15 from "../../assets/portfolio/hospitality/HospitalitySlide15.png"
import HospitalitySlide21 from "../../assets/portfolio/hospitality/HospitalitySlide21.png"
import HospitalitySlide22 from "../../assets/portfolio/hospitality/HospitalitySlide22.png"
import HospitalitySlide23 from "../../assets/portfolio/hospitality/HospitalitySlide23.png"
import HospitalitySlide24 from "../../assets/portfolio/hospitality/HospitalitySlide24.png"
import HospitalitySlide25 from "../../assets/portfolio/hospitality/HospitalitySlide25.png"
import HospitalitySlide26 from "../../assets/portfolio/hospitality/HospitalitySlide26.png"
import HospitalitySlide27 from "../../assets/portfolio/hospitality/HospitalitySlide27.png"
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton"

export const HospitalityPortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="text-3xl font-bold text-center my-8 mt-36">Our Hospitality Projects</h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl font-semibold text-center mb-4">
                    Crafting Destinations That Tell a Story
                </h2>
                <p className="text-center mb-8">
                    Hospitality spaces are more than just places to stay, they're immersive worlds. We design hotels and resorts with a narrative approach, ensuring each element reflects the brand’s character and cultural context. Whether it’s an opulent lobby or a tranquil spa suite, our focus is on creating luxurious yet welcoming spaces that leave a lasting impression on every guest, every time.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: hospitality11 },
                        { image: hospitality12 },
                        { image: hospitality21 },
                        { image: hospitality22 },
                    ]}
                    images={[
                        { image: HospitalitySlide11 },
                        { image: HospitalitySlide12 },
                        { image: HospitalitySlide13 },
                        { image: HospitalitySlide14 },
                        { image: HospitalitySlide15 },
                        { image: HospitalitySlide21 },
                        { image: HospitalitySlide22 },
                        { image: HospitalitySlide23 },
                        { image: HospitalitySlide24 },
                        { image: HospitalitySlide25 },
                        { image: HospitalitySlide26 },
                        { image: HospitalitySlide27 },
                    ]}
                />
            </div>
            <WhatsappButton />
        </div>
    )
}
