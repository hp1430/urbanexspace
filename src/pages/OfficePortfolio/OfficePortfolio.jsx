import { Navbar } from "../../components/atoms/Navbar/Navbar"
import { PortfolioPage } from "../../components/organisms/PortfolioPage/PortfolioPage"
import residential11 from "../../assets/portfolio/residential/residential11.png"
import residential12 from "../../assets/portfolio/residential/residential12.png"
import residential21 from "../../assets/portfolio/residential/residential21.png"
import residential22 from "../../assets/portfolio/residential/residential22.png"

export const OfficePortfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-5xl px-4 mx-auto">
                <h1 className="text-3xl font-bold text-center my-8 mt-36">Our Office Projects</h1>

                <hr className="border-t-1.5 border-gray-300 mb-8" />
                <h2 className="text-xl font-semibold text-center mb-4">
                    Designing Workspaces That Work Beautifully
                </h2>
                <p className="text-center mb-8">
                    We create inspiring office environments that foster productivity, creativity, and wellbeing. Our office designs focus on clean, functional layouts enhanced by modern aesthetics and ergonomic principles. From sleek meeting rooms and collaborative zones to quiet workstations and stylish break areas, every detail is curated to reflect your brand ethos while maximizing efficiency and comfort. The result is a space where form and function align seamlessly.
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
