import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import residential11 from "../../assets/portfolio/residential/residential11.png"
import residential12 from "../../assets/portfolio/residential/residential12.png"
import residential21 from "../../assets/portfolio/residential/residential21.png"
import residential22 from "../../assets/portfolio/residential/residential22.png"
import ResidentialSlide11 from "../../assets/portfolio/residential/ResidentialSlide11.png"
import ResidentialSlide12 from "../../assets/portfolio/residential/ResidentialSlide12.png"
import ResidentialSlide13 from "../../assets/portfolio/residential/ResidentialSlide13.png"
import ResidentialSlide14 from "../../assets/portfolio/residential/ResidentialSlide14.png"
import ResidentialSlide21 from "../../assets/portfolio/residential/ResidentialSlide21.png"
import ResidentialSlide22 from "../../assets/portfolio/residential/ResidentialSlide22.png"
import ResidentialSlide23 from "../../assets/portfolio/residential/ResidentialSlide23.png"
import ResidentialSlide24 from "../../assets/portfolio/residential/ResidentialSlide24.png"
import ResidentialSlide31 from "../../assets/portfolio/residential/ResidentialSlide31.png"
import ResidentialSlide32 from "../../assets/portfolio/residential/ResidentialSlide32.png"
import ResidentialSlide33 from "../../assets/portfolio/residential/ResidentialSlide33.png"
import ResidentialSlide34 from "../../assets/portfolio/residential/ResidentialSlide34.png"
import ResidentialSlide35 from "../../assets/portfolio/residential/ResidentialSlide35.png"

export const ResidentialPortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="text-3xl font-bold text-center my-8 mt-36">Our Residential Projects</h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl font-semibold text-center mb-4">
                    Elevated Living, Crafted for the Contemporary Soul.
                </h2>
                <p className="text-center mb-8">
                    We design Residentials that redefine urban sophistication, where every square foot is thoughtfully optimized without compromising on luxury. Blending modern aesthetics with functional comfort, our Residential designs celebrate clean lines, rich textures, and personalized detailing. From ambient lighting to modular solutions, each element is curated to elevate everyday living while echoing your unique style. Whether minimalist or maximalist, the result is always timeless and effortlessly elegant.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: residential11 },
                        { image: residential12 },
                        { image: residential21 },
                        { image: residential22 },
                    ]}
                    images={[
                        { image: ResidentialSlide11 },
                        { image: ResidentialSlide12 },
                        { image: ResidentialSlide13 },
                        { image: ResidentialSlide14 },
                        { image: ResidentialSlide21 },
                        { image: ResidentialSlide22 },
                        { image: ResidentialSlide23 },
                        { image: ResidentialSlide24 },
                        { image: ResidentialSlide31 },
                        { image: ResidentialSlide32 },
                        { image: ResidentialSlide33 },
                        { image: ResidentialSlide34 },
                        { image: ResidentialSlide35 },
                    ]}
                />
            </div>
        </div>
    )
}
