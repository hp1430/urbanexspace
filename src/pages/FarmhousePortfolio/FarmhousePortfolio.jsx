import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import farmhouse11 from "../../assets/portfolio/farmhouse/farmhouse11.png"
import farmhouse12 from "../../assets/portfolio/farmhouse/farmhouse12.png"
import farmhouse13 from "../../assets/portfolio/farmhouse/farmhouse13.png"
import farmhouse14 from "../../assets/portfolio/farmhouse/farmhouse14.png"
import FarmhouseSlide11 from "../../assets/portfolio/farmhouse/FarmhouseSlide11.png"
import FarmhouseSlide12 from "../../assets/portfolio/farmhouse/FarmhouseSlide12.png"
import FarmhouseSlide13 from "../../assets/portfolio/farmhouse/FarmhouseSlide13.png"
import FarmhouseSlide14 from "../../assets/portfolio/farmhouse/FarmhouseSlide14.png"
import FarmhouseSlide15 from "../../assets/portfolio/farmhouse/FarmhouseSlide15.png"
import FarmhouseSlide16 from "../../assets/portfolio/farmhouse/FarmhouseSlide16.png"
import FarmhouseSlide17 from "../../assets/portfolio/farmhouse/FarmhouseSlide17.png"
import FarmhouseSlide18 from "../../assets/portfolio/farmhouse/FarmhouseSlide18.png"
import FarmhouseSlide19 from "../../assets/portfolio/farmhouse/FarmhouseSlide19.png"
import FarmhouseSlide20 from "../../assets/portfolio/farmhouse/FarmhouseSlide20.png"
import FarmhouseSlide21 from "../../assets/portfolio/farmhouse/FarmhouseSlide21.png"
import FarmhouseSlide22 from "../../assets/portfolio/farmhouse/FarmhouseSlide22.png"
import FarmhouseSlide23 from "../../assets/portfolio/farmhouse/FarmhouseSlide23.png"
import { WhatsappButton } from "../../components/atoms/WhatsappButton/WhatsappButton"

export const FarmhousePortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="text-3xl font-bold text-center my-8 mt-36">Our Farmhouse Projects</h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl font-semibold text-center mb-4">
                    Where Rustic Charm Meets Refined Comfort
                </h2>
                <p className="text-center mb-8">
                    Our farmhouse interiors embrace nature-inspired design, blending earthy tones, organic textures, and open layouts to create serene sanctuaries away from the city’s chaos. Every space is a thoughtful combination of rustic elegance and modern comfort from wooden beams and stone finishes to curated vintage accents. We design warm, inviting homes that breathe with natural light and reflect the spirit of relaxed, countryside living with a contemporary twist.
                </p>
                <hr className="border-t-1.5 border-gray-300 mb-8" />

                <PortfolioPage
                    cards={[
                        { image: farmhouse11 },
                        { image: farmhouse12 },
                        { image: farmhouse13 },
                        { image: farmhouse14 },
                    ]}
                    images={[
                        { image: FarmhouseSlide11 },
                        { image: FarmhouseSlide12 },
                        { image: FarmhouseSlide13 },
                        { image: FarmhouseSlide14 },
                        { image: FarmhouseSlide15 },
                        { image: FarmhouseSlide16 },
                        { image: FarmhouseSlide17 },
                        { image: FarmhouseSlide18 },
                        { image: FarmhouseSlide19 },
                        { image: FarmhouseSlide20 },
                        { image: FarmhouseSlide21 },
                        { image: FarmhouseSlide22 },
                        { image: FarmhouseSlide23 },
                    ]}
                />
            </div>
            <WhatsappButton />
        </div>
    )
}
