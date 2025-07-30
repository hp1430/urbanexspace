import { Parallax } from "../../atoms/Parallax/Parallax"
import Office from "../../../assets/categories/OfficeCover.png"
import Residential from "../../../assets/categories/ResidentialCover.png"
import Hospitality from "../../../assets/categories/HospitalityCover.png"


export const Categories = () => {
    return (
        <div>
            <h1
                className="text-5xl font-semibold text-center mt-10 mb-10 text-gray-800"
            >
                What we Offer ?
            </h1>

            <Parallax image={Office} description={'Office Designs'} />
            <p
                className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                <span className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto">
                    <h2><strong>Smart & Stylish Workspaces That Energize Performance.</strong></h2>
                    We believe a well-designed office is a catalyst for productivity and inspiration. Our approach to office interiors combines brand identity with employee experience using layout, lighting, color psychology, and material choices to create dynamic environments. From sleek corporate setups to creative studios, our designs support modern workflows while exuding professionalism and innovation.
                </span>
            </p>
            <Parallax image={Residential} description={'Residential Designs'} />
            <p
                className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                <span className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto">
                    <h2><strong>Designed for Modern Living, Styled for Timeless Grace.</strong></h2>
                    Our Residential Designs are tailored to urban lifestyles that demand both style and substance. Each project is a study in balance blending bold design statements with serene palettes, smart space planning with luxurious comfort. We focus on making every corner count, from multi-functional layouts to mood-enhancing lighting and curated finishes.

                </span>
            </p>
            <Parallax image={Hospitality} description={'Hospitality Designs'} />
            <p
                className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                <span className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto">
                    <h2><strong>Immersive Luxury Designed to Leave a Lasting Impression.</strong></h2>
                    Our hospitality interiors blend elegance, warmth, and cultural nuance to create unforgettable guest experiences. Whether designing boutique hotels or expansive resorts, we focus on spatial storytelling where every lobby, room, and lounge evokes comfort, opulence, and distinct identity. Rich materials, ambient lighting, and regionally inspired accents come together to build immersive environments that delight guests and elevate your brand’s hospitality offering.
                </span>
            </p>
        </div>
    )
}