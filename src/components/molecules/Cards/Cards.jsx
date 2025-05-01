import { Card } from "../../atoms/Card/Card"
import Residential from "../../../assets/cards/residential.jpg"
import Retail from "../../../assets/cards/retail.jpg"
import Hospitality from "../../../assets/cards/hospitality.jpg"

export const Cards = () => {
    return (
        <div>
            <p
                className="text-4xl font-thin text-center text-black mt-20 mb-10 max-w-4xl mx-auto"
            >
                Good design yearns for boundless style that is underlined by simplicity
            </p>

            <div className="flex items-start justify-center gap-10 overflow-x-auto px-4">
                <div className="flex-shrink-0 w-[300px]">
                    <Card 
                    image={Residential} 
                    title="Residential"
                    />
                </div>
                <div className="flex-shrink-0 w-[300px]">
                    <Card 
                    image={Retail} 
                    title="Retail"
                    />
                </div>
                <div className="flex-shrink-0 w-[300px]">
                    <Card 
                    image={Hospitality} 
                    title="Hospitality"
                    />
                </div>
            </div>
            <p
                className="text-xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                With over 10 years of experience, Urbanex Space is dedicated to turning your home design ideas into reality. We believe in delivering quality craftsmanship to make your future home dreams come true.
            </p>
        </div>
    )
}