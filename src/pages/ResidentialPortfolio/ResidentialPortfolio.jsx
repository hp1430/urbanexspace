import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import residential11 from "../../assets/portfolio/residential/residential11.png"
import residential12 from "../../assets/portfolio/residential/residential12.png"
import residential21 from "../../assets/portfolio/residential/residential21.png"
import residential22 from "../../assets/portfolio/residential/residential22.png"

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
