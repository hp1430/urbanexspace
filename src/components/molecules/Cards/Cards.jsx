import { Card } from "../../atoms/Card/Card"
import Residential from "../../../assets/cards/residential.png"
import Office from "../../../assets/cards/office.png"
import Hospitality from "../../../assets/cards/hospitality.png"

export const Cards = () => {
    return (
        <div>
            <h1
                className="text-5xl font-semibold text-center mt-10 text-gray-800"
            >
                What We Offer ?
            </h1>
            <p
                className="text-4xl font-thin text-center text-black mt-5 mb-10 max-w-4xl mx-auto"
            >
                We shape spaces that echo with quiet elegance and bold character
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
                    image={Office} 
                    title="Office"
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
                className="text-xl font-thin text-center text-black mt-5 mb-10 max-w-lg mx-auto"
            >
                At Urbanex Space, we believe that great design should not only be beautiful, but deeply personal, which is why we focus on crafting interiors that feel like an extension of your identity.
            </p>
        </div>
    )
}