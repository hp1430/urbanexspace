import { Parallax } from "../../atoms/Parallax/Parallax"
import Office from "../../../assets/categories/OfficeCover.png"
import Residential from "../../../assets/categories/Residential.jpg"
import Villa from "../../../assets/categories/Villa.jpg"


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
            <Parallax image={Residential} description={'Residential Projects'} />
            <p
                className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                <span className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto">
                    With over 10 years of experience, Urbanex Space is dedicated to turning your home design ideas into reality. We believe in delivering quality craftsmanship to make your future home dreams come true.
                </span>
            </p>
            <Parallax image={Villa} description={'Villa Projects'} />
            <p
                className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto"
            >
                <span className="text-2xl font-thin text-center text-black mt-20 mb-10 max-w-lg mx-auto">
                    With over 10 years of experience, Urbanex Space is dedicated to turning your home design ideas into reality. We believe in delivering quality craftsmanship to make your future home dreams come true.
                </span>
            </p>
        </div>
    )
}