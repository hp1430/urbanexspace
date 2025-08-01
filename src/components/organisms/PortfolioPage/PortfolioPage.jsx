import { PortfolioImageSlider } from "../../atoms/PortfolioImageSlider/PortfolioImageSlider"
import { PortfolioGrid } from "../../molecules/PortfolioGrid/PortfolioGrid"

export const PortfolioPage = ({ cards, images }) => {
    return (
        <div>
            <PortfolioGrid 
                cards={cards}
            />
            <PortfolioImageSlider 
                images={images.map(image => image.image)}
            />
        </div>
    )
}