import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import residential11 from "../../assets/portfolio/residential/residential11.png"
import residential12 from "../../assets/portfolio/residential/residential12.png"
import residential21 from "../../assets/portfolio/residential/residential21.png"
import residential22 from "../../assets/portfolio/residential/residential22.png"

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
                        { image: residential11 },
                        { image: residential12 },
                        { image: residential21 },
                        { image: residential22 },
                    ]}
                    images={[
                        { image: residential11 },
                        { image: residential12 },
                        { image: residential21 },
                        { image: residential22 },
                    ]}
                />
            </div>
        </div>
    )
}
