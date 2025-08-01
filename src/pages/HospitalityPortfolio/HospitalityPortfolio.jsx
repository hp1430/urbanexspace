import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import residential11 from "../../assets/portfolio/residential/residential11.png"
import residential12 from "../../assets/portfolio/residential/residential12.png"
import residential21 from "../../assets/portfolio/residential/residential21.png"
import residential22 from "../../assets/portfolio/residential/residential22.png"

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
